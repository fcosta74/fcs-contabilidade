const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const phoneInput = document.querySelector("#phone")
const emailInput = document.querySelector("#email")
const messageTextarea = document.querySelector("#message")

const modal = document.querySelector("#modal")
const closeButton = document.querySelector("#close-button")
const modalMessage = document.querySelector(".modal-message")


form.addEventListener("submit", (event) => {
    event.preventDefault()

    // verificar se o nome está vazio
    if (nameInput.value === ""){
        showModal("Por favor, preencha o seu nome")
        return
    }
    
    // verificar se o telefone está preenchido
    if (!validatePhone(phoneInput.value, 11)){
        showModal("Por favor, digito o nº do seu telefone")
        return
    }
    // verificar se o e-mail está vázio
    if (emailInput.value === "" || !isEmailValid(emailInput.value)){
        showModal("Por favor, preenha um e-mail válido")
        return
    }
    // verificar se a mensagem foi preenchida
    if(messageTextarea.value == ""){
        showModal("Por favor, digite uma mensagem.")

        return
    }
    // se todos os campos estiverem corretamente preenchidos, envie o formulário
    form.submit()
})
// função que valida o telefone
function validatePhone(phone, minDigits){
    if(phone.length >= minDigits){
    // telefone válido
    return true
    }
    return false
  }
// função que valida o e-mail
function isEmailValid(email){
    // cria uma regex para validar email
    const emailRegex = new RegExp(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )
    if(emailRegex.test(email)){
      return true
    }   
    return false
  }
  function validateCpf(cpf, minDigits){
    if(cpf.length >= minDigits){
    // telefone válido
    return true
    }
    return false
}
  
// Exibir modal
function showModal(msg) {
    modalMessage.textContent = msg;
    modal.style.display = "block";
  }
  
  // Fechar modal
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });
  
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
});
// valida o telefone
const handlePhone = (event) => {
    let phoneInput = event.target
    phoneInput.value = phoneMask(phoneInput.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }
  
  const filtroTeclas = function(events){
    return((events.charCode == 8) || (events.charCode > 47 && events.charCode < 58) || (events.charCode == 45 || events.charCode == 46))
  }
  
// valida o nome somente com letras
nameInput.addEventListener("keypress", function(e) {
    const which = e.which 
  })
    function ApenasLetras(e, t) {
      try {
          if (window.event) {
              var charCode = window.event.which;
          } else if (e) {
              var charCode = e.which;
          } else {
              return true;
          }
          if ((charCode == 32) || (charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 982))
              return true;
          else
              return false;
        } catch (err) {
          alert(err.Description);
    }
}
$(document).ready(function() {
  $(window).scroll(function() {
    const scroll = $(window).scrollTop();

    if (scroll >= 100) {
      $("#menu").addClass("scrolled");
    } else {
      $("#menu").removeClass("scrolled");
    }
  });
});
