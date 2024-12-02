// create container
const container = document.createElement("div");
container.classList.add("container");
const body = document.querySelector("body");
body.appendChild(container);

// create button prompt the user
const button = document.createElement("button");
button.id = "btnSize";
button.textContent = "Change size of the grid";
container.appendChild(button);


// create square's container
const squareContainer = document.createElement("div");
squareContainer.classList.add("square-container");
container.appendChild(squareContainer);

// grid 16 x 16
createSquares(16);
hovering();

button.addEventListener("click", () => {
    let squarePerSide = prompt("The number of squares per side for the new grid");
    removeSquares(squarePerSide);
    createSquares(squarePerSide);
    hovering();
});

function createSquares(size) {
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.id = "square";
        div.style.width = `${960 / size}px`;
        div.style.height = `${960 / size}px`;
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
