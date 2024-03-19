const createSquare = () => {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    square.style.width = '50px';
    square.style.height = '50px';
    square.style.boxSizing = 'border-box';
    square.style.border = 'solid 3px black';
    return square;
}

const container = document.querySelector('#container');
for (let i = 0; i <= 256; i++) {
    let currentSquare = createSquare();
    container.appendChild(currentSquare);
}
