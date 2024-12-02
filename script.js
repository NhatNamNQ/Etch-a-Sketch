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

// create grid
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


//add effect to the grid
function hovering() {
    squareContainer.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = randomColor();
    });
}

//function random color
function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//function remove web
function removeSquares(size) {
    const div = document.querySelectorAll("#square");
    div.forEach(x => x.remove());
}
