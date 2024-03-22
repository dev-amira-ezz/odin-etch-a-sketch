import { Helpers } from './helpers.js';

let container = document.querySelector('#container');

// ======= Square Creation and Styling =======
// Create one square
const createSquare = (num) => {
    const square = Helpers.createNode('square', 'div', '', container, 'class');
    styleSquare(square, num);
    return square;
}

// Apply style to one square
const styleSquare = (square, num) => {
    square.style.boxSizing = 'border-box';
    square.style.border = 'solid 1px white';
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

// square change color on hover
const squareHover = (square) => {
    square.addEventListener('mouseenter', () => {
        squareBackground(0.1, square);
    });
}

// square darkens by 10% after each hover
const darkenSquare = (square, red, green, blue) => {
    let squareOpacity = 0.1;
    square.addEventListener('mouseout', () => {
        if (squareOpacity < 1) {
            squareOpacity += 0.1;
        }
        return squareBackground(squareOpacity
            , square
            , red
            , green
            , blue);
    });
}

// ======= Button Event listeners and related functions =======
// === Choose Pen Color ===
const blackPen = () => {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        squareBackground(1, square, 255, 255, 255);
        darkenSquare(square, 0, 0, 0);
    });
}

const colorPen = () => {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        squareBackground(1, square, 255, 255, 255);
        darkenSquare(square, Helpers.random(255), Helpers.random(255), Helpers.random(255));
    });
}

// Use black pen
document.querySelector('#black-pen').addEventListener('click', blackPen);

// Use color pen
document.querySelector('#color-pen').addEventListener('click', colorPen);


// === Create a new grid ===
// New grid function
const newGrid = () => {
    let num = prompt('Select a number less than or equals 100');
    Helpers.clearNode(container);
    if (num != null) {
        while (isNaN(num) || num > 100) {
            num = prompt('Select a number less than or equals 100');
        }
    } else {
        createGrid(16);
    }
    createGrid(num);
}

// Create a new grid with number of squares specified by user
document.querySelector('#new-grid').addEventListener('click', newGrid);


// === Clear Grid ===
// A function to clear grid
const clearGrid = () => {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => squareBackground(1, square, 255, 255, 255));
}

// An event listener to the button used to clear the grid colors
document.querySelector('#clear-grid').addEventListener('click', clearGrid);


// === Toggle Gridlines ===
const toggleGridlines = () => {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.borderColor = square.style.borderColor == 'white'
            ? 'black'
            : 'white';
    });
}

// An event listener to the button that shows/hides gridlines
document.querySelector('#toggle-grid').addEventListener('click', toggleGridlines);

// ======= Create and call the Default Grid =======
const createGrid = (num) => {
    for (let i = 0; i < Helpers.power(num, 2); i++) {
        let square = createSquare(num);
        squareHover(square);
        darkenSquare(square, Helpers.random(255), Helpers.random(255), Helpers.random(255));
    }
}

// Call the function to create a default grid 
createGrid(16);
