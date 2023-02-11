var validForm = () => {

    var nome        = document.querySelector("#nome");        
    var telefone   = document.querySelector("#telefone");   
    var email       = document.querySelector("#email");       

    
    if(nome.value == ""){   
        alert("Digite seu nome");    
        nome.focus();    
        return false;  
    }
    if(telefone.value == ""){
        alert("Digite o seu telefone");  
        telefone.focus();    
        return false;   
    }
    if(email.value == ""){
        alert("Digite o seu e-mail");  
        email.focus();    
        return false;   
    }

    alert("Todos os dados são válidos");

}

