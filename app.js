document.addEventListener("DOMContentLoaded", () => {
    const userGrid = document.querySelector(".grid-user");
    const computerGrid = document.querySelector(".grid-computer");
    const displayGrid = document.querySelector(".grid-display");
    const ship = document.querySelectorAll(".ship");
    const destroyer = document.querySelector(".destroyer-container");
    const submarine = document.querySelector(".submarine-container");
    const cruiser = document.querySelector(".cruiser-container");
    const battleship = document.querySelector(".battleship-container");
    const carrier = document.querySelector(".carrier-container");
    const startButton = document.querySelector("#start");
    const rotateButton = document.querySelector("#rotate");
    const turnDisplay = document.querySelector("#whose-go");
    const infoDisplay = document.querySelector("#info");
    const userSquares = [];
    const width = 10;

    function creatrBoard() {
        for (let i = 0; i < width * width; i++) {
            let square = document.createElement("div");
            squares, (dataset.id = i);
            userGrid.appendChild(square);
            userSquares.push(square);
        }
    }

    creatrBoard();
});
