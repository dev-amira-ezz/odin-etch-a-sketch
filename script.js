const createSquare = () => {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    square.style.width = '35px';
    square.style.height = '35px';
    square.style.boxSizing = 'border-box';
    square.style.border = 'solid 3px black';
    // 6.25% is 1/16 which is what each square takes
    square.style.flex = '1 1 6.25%';
    return square;
}

// square darkens by 10% after each hover
const darkenSquare = (square) => {
    let squareOpacity = 0.1;
        square.addEventListener('mouseout', () => {
            squareOpacity += 0.1;
            square.style.backgroundColor = `rgba(0, 0, 0, ${squareOpacity}`;
        });
}

const createGrid = () => {
    const container = document.querySelector('#container');
    for (let i = 0; i < 256; i++) {
        let square = createSquare();
        container.appendChild(square);
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        });
       darkenSquare(square);
    }
}

createGrid();
