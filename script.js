const body = document.querySelector("body");

// create container
const container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);

//create the header
const header = document.createElement("div");
header.classList.add("header");
const h1 = document.createElement("h1");
h1.textContent = "Etch-a-Sketch";
header.appendChild(h1);
container.appendChild(header);

// create button prompt the user
const buttons = document.createElement("div");
buttons.classList.add("buttons");
container.appendChild(buttons);

const buttonSize = document.createElement("button");
buttonSize.id = "btn";
buttonSize.textContent = "Change size";
buttons.appendChild(buttonSize);

const buttonReset = document.createElement("button");
buttonReset.id = "btn";
buttonReset.textContent = "Reset grid";
buttons.appendChild(buttonReset);

// create square's container
const squareContainer = document.createElement("div");
squareContainer.classList.add("square-container");
container.appendChild(squareContainer);

squareContainer.dataset.squarePerSide = 0;
// grid 16 x 16
createSquares(16);
hovering();


buttonSize.addEventListener("click", () => {
    let squarePerSide = prompt("The number of squares per side for the new grid (0 - 100)");
    if (squarePerSide <= 0 || squarePerSide > 100) {
        alert("Please input the size from 1 to 100");
        return;
    }
    removeSquares(squarePerSide);
    createSquares(squarePerSide);
    hovering();
});

buttonReset.addEventListener("click", () => {
    removeSquares(squareContainer.dataset.squarePerSide);
    createSquares(squareContainer.dataset.squarePerSide);
    hovering();
})

function createSquares(size) {
    squareContainer.dataset.squarePerSide = size;
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.id = "square";
        div.style.width = `${480 / size}px`;
        div.style.height = `${480 / size}px`;
        squareContainer.appendChild(div);
    }
}

function hovering() {
    squareContainer.addEventListener("mouseover", (event) => {
        const square = event.target;
        if (!square.dataset.hovered) {
            square.style.backgroundColor = randomColor();
            square.style.opacity = 0.1;
            square.dataset.hovered = "true";
            square.dataset.hoverCount = 1;
        } else {
            let hoverCount = parseInt(square.dataset.hoverCount, 10);
            let newOpacity = Math.min(hoverCount * 0.1 + 0.1, 1);
            hoverCount++;
            square.dataset.hoverCount = hoverCount;
            square.style.opacity = newOpacity;
        }
    });
}

function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function removeSquares(size) {
    const div = document.querySelectorAll("#square");
    div.forEach(x => x.remove());
}
