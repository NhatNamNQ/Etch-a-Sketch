// create container
let squarePerSide = prompt("The number of squares per side for the new grid");

const container = document.createElement("div");
container.classList.add("container");

const body = document.querySelector("body");
body.appendChild(container);


// create square's container
const squareContainer = document.createElement("div");
squareContainer.classList.add("square-container");
container.appendChild(squareContainer);

// create grid
for (let i = 0; i < squarePerSide * squarePerSide; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.style.width = `${960 / squarePerSide}px`;
    div.style.height = `${960 / squarePerSide}px`;
    squareContainer.appendChild(div);
}

//add effect to the grid
squareContainer.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = randomColor();
});


//function random color
function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
