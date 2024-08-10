// const textElements = document.querySelectorAll('.text h1, .text h2');

// textElements.forEach(element => {
//     element.addEventListener('mousemove', (e) => {
//         const { offsetX, offsetY } = e;
//         const { offsetWidth, offsetHeight } = element;

//         const xPercent = offsetX / offsetWidth;
//         const yPercent = offsetY / offsetHeight;

//         const red = Math.round(xPercent * 255);
//         const green = Math.round(yPercent * 255);
//         const blue = Math.round((xPercent + yPercent) * 255);

//         const color = `rgb(${red}, ${green}, ${blue})`;
//         element.style.color = color;
//     });

//     element.addEventListener('mouseleave', () => {
//         element.style.color = '#fff'; // Retorna à cor original ao retirar o mouse
//     });
// });
