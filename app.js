const container = document.querySelector('.container')
const resetBtn = document.querySelector('#reset')
let gridSize = prompt("What do you want the dimensions of you grid to be?")


  function createGrid (size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("square");
        container.appendChild(cell);
        //cell.style = "background-color: white; border: 1px solid black";
    }
  }

  container.addEventListener('mouseover', function (e) {
    e.target.style.background = 'red'
  })

  createGrid(gridSize)
