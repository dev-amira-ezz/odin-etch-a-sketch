import { Helpers } from './helpers.js';


const createSquare = (num) => {
    const container = document.querySelector('#container');
    const square = Helpers.createNode('square', 'div', '', container);
    styleSquare(square, num);
    return square;
}

const styleSquare = (square, num) => {
    square.style.boxSizing = 'border-box';
    square.style.border = 'solid 1px black';
    // flex basis based on the number of squares
    square.style.flex = `1 1 ${Helpers.percent(1, num)}%`;
    square.style.height = `${Helpers.percent(1, num)}%`;
}


// Choose square background color & opacity
const squareBackground = (squareOpacity, square, red, green, blue) => {

    square.style.backgroundColor = `rgba(${red}
                                       , ${green}
                                       , ${blue}
                                       , ${squareOpacity})`;
}

// square darkens by 10% after each hover
const darkenSquare = (square) => {
    let squareOpacity = 0.1;
    square.addEventListener('mouseout', () => {
        if (squareOpacity < 1) {
            squareOpacity += 0.1;
        }
        squareBackground(squareOpacity
            , square
            , Helpers.random(255)
            , Helpers.random(255)
            , Helpers.random(255));
    });
}

// square change color on hover
const squareHover = (square) => {
    square.addEventListener('mouseenter', () => {
        squareBackground(0.1, square);
    });
}

const createGrid = (num) => {
    for (let i = 0; i < Helpers.power(num, 2); i++) {
        let square = createSquare(num);
        squareHover(square);
        darkenSquare(square);
    }
}

createGrid(64);
