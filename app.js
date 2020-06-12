  const container = document.querySelector('.container')
  const resetBtn = document.querySelector('#reset')
  const eraseBtn = document.querySelector('#erase')
  const blackColor = document.querySelector('#black-paint')
  let paint_color = 'yellow'
  let size

  function createGrid () {
    size = prompt("What do you want the dimensions of you grid to be?")
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("square");
        container.appendChild(cell);
    }
  }

  function eraseGrid() {
    paint_color = 'white'
  }

  function draw(e) {
    e.target.style.background = paint_color
  }

  function resetGrid() {
    while (container.firstChild) {
      container.removeChild(container.firstChild)
    }
    container.style.background = 'white'
    createGrid()
  }

  resetBtn.addEventListener('click', resetGrid)
  eraseBtn.addEventListener('click', eraseGrid)
  container.addEventListener('mouseover', draw)
  blackColor.addEventListener('click', function() {
    paint_color = 'black'
  })

  /*container.addEventListener('mouseover', function (e) {
    e.target.style.background = paint_color
  })*/

  createGrid()
