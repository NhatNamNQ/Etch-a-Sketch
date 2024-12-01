// create container
const container = document.createElement("div");
container.classList.add("container");

const body = document.querySelector("body");
body.appendChild(container);

// create square's container
const squareContainer = document.createElement("div");
squareContainer.classList.add("square-container");
container.appendChild(squareContainer);

// create grid
for (let i = 0; i < 16 * 16; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    squareContainer.appendChild(div);
}

//add effect to the grid
const square = querySelector("#square");
