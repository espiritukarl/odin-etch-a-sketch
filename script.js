//Grid Creation
const grid = document.getElementById("grid-number");

function gridCreator(gridNumber) {
    for (let i = 0; i < gridNumber; i++) {
        const gridColumn = document.createElement("div");
        gridColumn.classList.add("grid-column");
        container.appendChild(gridColumn);
        for (let j = 0; j < gridNumber; j++) {
            const gridRow = document.createElement("div");
            gridRow.classList.add("grid-row");
            gridColumn.appendChild(gridRow);
        }
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// COLORING PART
const color = document.getElementById("colorpicker");
let colorPicked = color.value;

color.addEventListener("input", () => {
    colorPicked = color.value;
});

//taken from https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let colors = '#';
    for (var i = 0; i < 6; i++) {
        colors += letters[Math.floor(Math.random() * 16)];
    }
    return colors;
}

//DRAWING PART
function drawPart() {
    const buttons = document.querySelectorAll("button");
    const colorRow = document.querySelectorAll(".grid-row");

    buttons.forEach(button => {
        button.addEventListener('click', e => {
            let buttonClicked = (e.target.textContent).toLowerCase();
            if (buttonClicked == "clear") {
                colorRow.forEach(square => {
                    square.style.backgroundColor = "white";
                })
            } else if (buttonClicked == "rainbow") {
                colorRow.forEach((squares) => {
                    squares.addEventListener("mouseover", () => {
                        squares.style.backgroundColor = getRandomColor();
                    });
                })
            } else if (buttonClicked == "color") {
                colorRow.forEach((square) => {
                    square.addEventListener("mouseover", () => {
                        square.style.backgroundColor = colorPicked;
                    });
                });
            }
        });
    });

}

//ETCH A SKETCH TIME
let gridNumber = grid.value;
const container = document.querySelector(".container");
gridCreator(gridNumber);
drawPart();
grid.addEventListener("input", () => {
    removeAllChildNodes(container);
    gridNumber = grid.value;
    gridCreator(gridNumber)
    drawPart();
});
