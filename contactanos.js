
const columnasInput = document.querySelector('#columnasInput')
const botonEnviar = document.querySelector('#sendTo')
columnasInput.addEventListener('submit', 'send')

function send(event) {
    event.prevenrDefault()
    const form = new FormData(this)
    botonEnviar.setAttribute('href', 'mailto:pulgoso8603@gmail.com')
    botonEnviar.click()

    let send = true;
    if (true) {
    console.log("¡Gracias!. Hemos recibido tu mensaje. En unas horas, un miembro de nuestro equipo te estará contactando.");
 }
}
// ?subject=${form.get('nombre')}${form.get('email')}&body${form.get('message')}