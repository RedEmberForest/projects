const canvas = document.querySelector('#canvas');
const margin = canvas.getBoundingClientRect();

document.addEventListener('mousemove', (event) => {
    const x = event.clientX - margin.left;
    const y = event.clientY - margin.top;

    if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
        console.log(`Mouse position: X=${x}, Y=${y}`);
    }
})