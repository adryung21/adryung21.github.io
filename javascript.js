function encriptar(){
    
    var  frase = document.getElementsByClassName("textArea")[0].value;

    var texto = frase.replace(/e/img,"enter");
    var texto = texto.replace(/i/img,"imes");
    var texto = texto.replace(/a/img,"ai");
    var texto = texto.replace(/o/img,"ober");
    var texto = texto.replace(/u/img,"ufat");

    document.getElementsByClassName("Respuesta")[0].innerHTML = texto;
    document.getElementsByClassName("preMensaje")[0].style.display = "none";
    document.getElementsByClassName("munheco")[0].style.display = "none";
    document.getElementsByClassName("copiarText")[0].style.display = "show";
    document.getElementsByClassName("copiarText")[0].style.display = "inherit";
    
}
function desencriptar(){
    
    var  frase = document.getElementsByClassName("textArea")[0].value;

    var texto = frase.replace(/enter/img,"e");
    var texto = texto.replace(/imes/img,"i");
    var texto = texto.replace(/ai/img,"a");
    var texto = texto.replace(/ober/img,"o");
    var texto = texto.replace(/ufat/img,"u");

    document.getElementsByClassName("Respuesta")[0].innerHTML = texto;
}
function copiar(){
    var contenido = document.querySelector(".Respuesta");
    contenido.select();
    document.execCommand("copy");
}