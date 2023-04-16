// Modo nocturno

const boton = document.querySelector('#switch');

boton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    boton.classList.toggle('active');
});