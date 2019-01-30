// EVENT LISTENER

// 1 - find the thing to do the event continue
// we actually don't need an element (the document will get the event listener)

// 2 - write the function that will happen when we do the thing

const moveDodgerLeft = () => {
  // get dodger first
  const dodger = document.getElementById('dodger')
  // next thing is changing layout / position of dodger, meaning we need css changes
  const currentLeft = dodger.style.left // '180px'
  currentLeft.replace('px', '')
  console.log(currentLeft)
}

const moveDodgerRight = () => {
  
}

const moveDodgerHelper = (event) => {
  // going to figure out if we moveDodgerLeft or moveDodgerRight
  if (event.keyCode === 37) {
    moveDodgerLeft()
  } else {
    
  }
}

// 3 - add event listener
document.addEventListener('keydown', moveDodgerHelper)