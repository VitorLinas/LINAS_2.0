window.sr = ScrollReveal({reset: true});
sr.reveal('.container_projetos, #sobre_mim, #formulario, #projetos h1, #sistema h1', {
    duration: 2000,
    rotate:{x:0, y:10, z: 0} 
});



function emBreve(){
    window.alert("Em Breve!");
}


let inputNome = document.getElementById("name");
let inputEmail =  document.getElementById("email");
let inputMensagem =  document.getElementById("message");

let envio = document.getElementById("envio");
let contato = document.getElementById("contato");


function enviar(){
    let nome = inputNome.value;
    let email = inputEmail.value;
    let mensagem = inputMensagem.value;

    

    if(nome==''|| email==''||mensagem==''){
        window.alert("Preencha todas as áreas");
        envio.value = "";   
        contato.action = "";
        contato.method = "";
    }
    else{
        window.alert("Eviado! Aguarde o retorno.");
}
}
