// Recuperamos TODOS los elementos HTML que cumplen con la condición class="button"
const buttons = document.querySelector('.buttons');
const body = document.querySelector('body');

buttons.addEventListener("click", (event) => {
    body.style.background = event.target.id;
})

// body.addEventListener("click", (event) => {
//     if (event.target.id === 'grey') {
//         body.style.background = 'grey';
//     } else if (event.target.id === 'white') {
//         body.style.background = 'white';
//     } else if (event.target.id === 'blue') {
//         body.style.background = 'blue';
//     } else if (event.target.id === 'yellow')
//         body.style.background = 'yellow';
// })

