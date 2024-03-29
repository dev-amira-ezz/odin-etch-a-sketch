import { Helpers } from './helpers.js';

let container = document.querySelector('#container');

// ======= Square Creation, Handling and Styling =======
// Create one square
const createSquare = (num) => {
    const square = Helpers.createNode('square', 'div', '', container, 'class');
    square.classList.add('square');
    styleSquare(square, num);
    return square;
}

// Apply style to one square
const styleSquare = (square, num) => {
    // flex basis & height based on the number of squares
    square.style.setProperty('flex', `1 1 ${Helpers.percent(1, num)}%`);
    square.style.setProperty('height', `${Helpers.percent(1, num)}%`);
}


// Choose square background color & opacity
const squareBackground = (squareOpacity, square, red, green, blue) => {
    square.style.setProperty('background-color'
        , `rgba(${red}, ${green}, ${blue}, ${squareOpacity})`);
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

// Select all squares and apply functions
const handleSquares = (callBack) => {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => callBack(square));
}

// ======= Button Event listeners and related functions =======
// === Choose Pen Color ===
const blackPen = (square) => {
    darkenSquare(square, 0, 0, 0);
}

const colorPen = (square) => {
    darkenSquare(square
        , Helpers.random(255)
        , Helpers.random(255)
        , Helpers.random(255));
}

const eraser = (square) => {
    darkenSquare(square, 255, 255, 255);
}

// Use black pen
document.querySelector('#black-pen').addEventListener(
    'click', () => handleSquares(blackPen)
);

// Use color pen
document.querySelector('#color-pen').addEventListener(
    'click', () => handleSquares(colorPen)
);

// User eraser
document.querySelector('#eraser').addEventListener(
    'click', () => handleSquares(eraser)
);

// === Create a grid ===
const createGrid = (num) => {
    for (let i = 0; i < Helpers.power(num, 2); i++) {
        let square = createSquare(num);
        squareHover(square);
        darkenSquare(
            square,
            Helpers.random(255)
            , Helpers.random(255)
            , Helpers.random(255));
    }
}

// New grid with number of squares specified by user
const newGrid = () => {
    let num = prompt('Select a number less than or equals 100');
    if (num != null && !isNaN(num) && num <= 100 && num > 0) {
        Helpers.clearNode(container);
        createGrid(num);
    } else {
        alert(`You didn't select a number between 1 and 100`);
    }
}

// Event listener to the New Grid button
document.querySelector('#new-grid').addEventListener('click', newGrid);


// === Clear Grid Colors ===
// A function to clear grid
const clearGrid = (square) => {
    squareBackground(0.1, square, 255, 255, 255);
    darkenSquare(square
        , Helpers.random(255)
        , Helpers.random(255)
        , Helpers.random(255));
}

// An event listener to the button used to clear the grid colors
document.querySelector('#clear-grid').addEventListener(
    'click', () => handleSquares(clearGrid)
);


// === Toggle Gridlines ===
const toggleGridlines = (square) => {
    square.style.setProperty('border-color'
        , square.style.borderColor == 'white' ? '#555' : 'white');
}

// An event listener to the button that shows/hides gridlines
document.querySelector('#toggle-grid').addEventListener(
    'click', () => handleSquares(toggleGridlines)
);

// Create a default grid 
createGrid(16);
