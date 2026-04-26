const textAreaElement = document.getElementById("textoparaejercicio2")



const btn = document.getElementById("boton");
btn.addEventListener ("click", function(){
    alert(textAreaElement.value.length)
})