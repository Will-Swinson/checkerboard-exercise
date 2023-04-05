<<<<<<< HEAD
=======
// create a checker board
let checkerBoard = document.createElement("div");
// CLASS NAME FOR CHECKERBOARD
checkerBoard.className = "checkerboard";
// set checkerboard settings
checkerBoard.style.display = "flex";
checkerBoard.style.width = "800px";
checkerBoard.style.height = "800px";
checkerBoard.style.flexWrap = "wrap";
// checkerBoard.style.gridTemplateColumns = "1fr 1fr 1fr";
// add enough divs to the board
let size = 64;

// variable for the current tile to define its red or black
for (let i = 1; i < size; i++) {
  // randomNum fot color changing

  let r = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let gra = Math.random();

  // tiles for the checker board
  let tile = document.createElement("div");
  // set tile name
  tile.className = "tile";
  tile.style.width = "12.5%";
  tile.style.height = "12.5%";

  if (i + (Math.floor(i / 8) % 2) === 0) {
    // tile.style.backgroundColor = `rgba(${r} ,${g} ,${b} ,${gra})`;
    // tile.style.backgroundImage = `linear-gradient(90deg, cyan, green`;
    // tile.style.backgroundImage = `radial-gradient(green, red)`;
  } else {
    // tile.style.backgroundColor = `rgba(${r} ,${g} ,${b} ,${gra})`;
    // tile.style.backgroundImage = `linear-gradient(90deg, cyan, green`;
    // tile.style.backgroundImage = `radial-gradient(green, red)`;
  }
  console.log(tile);
  checkerBoard.append(tile);
}
//append to the document body
document.body.append(checkerBoard);
console.log(checkerBoard);

// create the checkerboard to be a grid
// assign the grid values so the tiles line up
// add the color to each tile
// return the board
>>>>>>> c70cb56 (🎭🎭)
