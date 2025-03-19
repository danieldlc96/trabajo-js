//MANTENER FIJA LA BARRA DE NAVEGACION AL HACER SCROLL

window.onscroll = function() {
    let navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 100) { 
        navbar.style.position = 'fixed'; // Fija la barra en la parte superior cuando se hace scroll
        navbar.style.top = '0'; // Asegura que esté en la parte superior
    } else {
        navbar.style.position = 'relative'; // Vuelve a su posición original cuando no se hace scroll
    }
};

const nombreInput = document.getElementById('nombre')
const apellidoInput = document.getElementById('apellido')
const telefonoInput = document.getElementById('telefono')
const emailInput = document.getElementById('email')
const form = document.getElementById('formulario')

//VALIDAR NOMBRE
function validarNombre(){
    const nombre = nombreInput.value 
    const nombrePatron = /^[A-Z][a-z ]{3,15}$/

    if(nombre.length >= 3 && nombrePatron.test(nombre)){
        nombreInput.classList.add('valido')
        nombreInput.classList.remove('invalido')
        document.getElementById('nombreError').textContent = ''
    }else{
        nombreInput.classList.add('invalido')
        nombreInput.classList.remove('valido')
        document.getElementById('nombreError').textContent = 'El nombre de usuario debe tener al menos 3 caracteres y solo letras'
    }
}

//VALIDAR APELLIDO
function validarApellido(){
    const apellido = apellidoInput.value 
    const apellidoPatron = /^[A-Za-z ]{5,40}$/

    if(apellido.length >= 5 && apellidoPatron.test(apellido)){
        apellidoInput.classList.add('valido')
        apellidoInput.classList.remove('invalido')
        document.getElementById('apellidoError').textContent = ''
    }else{
        apellidoInput.classList.add('invalido')
        apellidoInput.classList.remove('valido')
        document.getElementById('apellidoError').textContent = 'El apellido debe contener entre 5 y 40 caracteres y solo letras'
    }
}

//VALIDAR TELEFONO
function validarTelefono(){
    const telefono = telefonoInput.value 
    const telefonoPatron =  /^\d{9}$/

    if(telefonoPatron.test(telefono)){
        telefonoInput.classList.add('valido')
        telefonoInput.classList.remove('invalido')
        document.getElementById('telefonoError').textContent = ''
    }else{
        telefonoInput.classList.add('invalido')
        telefonoInput.classList.remove('valido')
        document.getElementById('telefonoError').textContent = 'El telefono debe contener 9 digitos y solo numeros'
    }
}

//VALIDAR EMAIL
function validarEmail(){
    const email = emailInput.value 
    const emailPatron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if(emailPatron.test(email)){
        emailInput.classList.add('valido')
        emailInput.classList.remove('invalido')
        document.getElementById('emailError').textContent = ''
    }else{
        emailInput.classList.add('invalido')
        emailInput.classList.remove('valido')
        document.getElementById('emailError').textContent = 'No es un email valido'
    }
}

function resetFormulario(){
    formulario.reset()
    nombreInput.classList.remove('valido')
    apellidoInput.classList.remove('valido')
    telefonoInput.classList.remove('valido')
    emailInput.classList.remove('valido')
}

nombreInput.addEventListener('input', validarNombre)
apellidoInput.addEventListener('input', validarApellido)
telefonoInput.addEventListener('input', validarTelefono)
emailInput.addEventListener('input', validarEmail)

formulario.addEventListener('submit', function validar(event){
    event.preventDefault()
    validarNombre()
    validarApellido()
    validarTelefono()
    validarEmail()

    if(nombreInput.classList.contains('valido') && apellidoInput.classList.contains('valido') && telefonoInput.classList.contains('valido') && emailInput.classList.contains('valido')){
        alert('Formulario enviado correctamente')
        resetFormulario()
    }else{
        alert('Corrija los errores del formulario')
    }
})

/* PRESUPUESTO */ 

const productoSelect = document.getElementById('producto')
const plazoInput = document.getElementById('plazo')
const extras = document.querySelectorAll('.extra')
const totalPrecio = document.getElementById('totalPrecio')
const presupuesto = document.getElementById('presupuestoForm')
const terminos = document.getElementById('terminos')

function calcularPresupuesto(){
    let precioBase = parseInt(productoSelect.value)
    if (isNaN(precioBase) || precioBase === 0) { 
        totalPrecio.textContent = "$0"; 
        return;
    }
    let plazo = parseInt(plazoInput.value)
    let extrasTotal = 0;

    extras.forEach(extra => {
        if(extra.checked) extrasTotal = parseInt(extra.value)
    })
    let descuento = 0;
    if(plazo <= 5){ descuento = 5; }
    else if(plazo <= 10) descuento = 3;
    else if(plazo <= 20) descuento = -5;
    else if(plazo <= 30) descuento = -7;
    else if(plazo <= 40) descuento = -10;
    
    let total = precioBase + extrasTotal - descuento;
    totalPrecio.textContent = `$${total}`
}

productoSelect.addEventListener("change", calcularPresupuesto)
plazoInput.addEventListener("input", calcularPresupuesto)
extras.forEach(extra => extra.addEventListener("change", calcularPresupuesto))

/* VALIDAR PRESUPUESTO */ 

presupuesto.addEventListener("submit", function(event){
    event.preventDefault()
    if(!terminos.checked){
        alert("Debes aceptar los terminos y condiciones")
        return;
    }
    if(productoSelect.value === "0"){
        alert("Por favor, seleciona un producto")
        return;
    }
    alert("Presupuesto enviado correctamente")
    presupuesto.reset()
    totalPrecio.textContent = "$0"
})