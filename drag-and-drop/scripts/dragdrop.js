const listItems = document.querySelectorAll('.list-item');
const containers = document.querySelectorAll('.container');

listItems.forEach(item => {
    item.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.id);
    });
});

containers.forEach(container => {
    container.addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    container.addEventListener('drop', (event) => {
        event.preventDefault();
        const draggedId = event.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(draggedId);

        container.appendChild(draggedElement);
    })
});