let operacion = '';

function agregar(valor) {
    const pantalla = document.getElementById('pantalla');
    if (operacion === 'resultado') {
        pantalla.value = ''; // Borra la pantalla si ya hay un resultado
        operacion = '';
    }
    pantalla.value += valor;
}

function borrar() {
    const pantalla = document.getElementById('pantalla');
    pantalla.value = '';
}

function calcular() {
    const pantalla = document.getElementById('pantalla');
    try {
        let resultado = eval(pantalla.value);
        pantalla.value = resultado;
        operacion = 'resultado'; // Marca que se ha obtenido un resultado
    } catch (error) {
        pantalla.value = 'Error';
    }
}

// Manejo de eventos del teclado
document.addEventListener('keydown', function(event) {
    const teclaPresionada = event.key;

    switch (teclaPresionada) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '+':
        case '-':
        case '**':
        case '*':
        case '/':
        case '.':
            agregar(teclaPresionada);
            break;
        case 'Enter':
            calcular();
            break;
        case 'c':
        case 'C':
            borrar();
            break;
        default:
            break;
    }
});