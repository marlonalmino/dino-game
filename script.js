const dino = document.querySelector('.dino')

function handleKeyUp(event) {
  if (event.keyCode === 32) {
    console.log('Pressionou Espaço!')
  }
}

document.addEventListener('keyup', handleKeyUp)
