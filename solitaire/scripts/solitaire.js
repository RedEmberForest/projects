class Card {

    hidden = true;

    constructor(suit, value) {
        this.value = value;
        this.suit = suit;
        if (this.suit === 'hearts' || this.suit === 'diamonds') {
            this.color = 'red';
        } else {
            this.color = 'black';
        }
    }

    flip() {
        this.hidden = !this.hidden;
    }
}

const columns = document.querySelectorAll('.column')

columns.forEach(column => {
    const img = document.createElement('img');
    img.setAttribute('src', 'https://placehold.co/125x175');
    column.appendChild(img);
})