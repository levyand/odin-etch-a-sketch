setupGrid(16);

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
