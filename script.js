
//esto agraga a la pantalla el valor del boton de la calculadora
function agregar(valor) {
    document.getElementById('pantalla').value += valor 
}

//esat accion borra la pantalla
function borrar() {
    document.getElementById('pantalla').value = ''
}


function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado
}