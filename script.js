setupGrid(16);

const resetBtn = document.querySelector('#reset-btn');
resetBtn.addEventListener('click', handleReset);

function setupGrid(dimension) {
  const blockCount = dimension ** 2;
  const container = document.querySelector('.container');
  container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
  
  for (let i = 0; i < blockCount; i++) {
    const block  = document.createElement('div');
    block.classList.add('block');
    block.addEventListener('mouseover', (e) => {
      const block = e.target;

      if (block.classList.contains('active')) return;

      block.classList.add('active');
    });

    container.appendChild(block);
  }
}

function handleReset() {
  // clear old grid
  const oldBlocks = document.querySelectorAll('.block');
  oldBlocks.forEach(block => block.remove());

  // prompt user for grid size
  let size;
  do {
    size = prompt('Grid size (min: 10, max: 100)', 16);
  } while (size > 100 || size < 10);

  // create grid
  setupGrid(size);
}
