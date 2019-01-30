// EVENT LISTENER

// 1 - find the thing to do the event continue
// we actually don't need an element (the document will get the event listener)

// 2 - write the function that will happen when we do the thing

const moveDodgerLeft = () => {
  // get dodger first
  const dodger = document.getElementById('dodger')
  // next thing is changing layout / position of dodger, meaning we need css changes
  const currentLeft = dodger.style.left // '180px'
  let currentLeftNumber = currentLeft.replace('px', '') // '180'
  currentLeftNumber = parseInt(currentLeftNumber, 10) // 180
  dodger.style.left = currentLeftNumber - 15 + 'px' // '179px' 
}

const moveDodgerRight = () => {

  const dodger = document.getElementById('dodger')
  const currentRight = dodger.style.left // '180px'
  let currentRightNumber = currentRight.replace('px', '') // '180'
  currentRightNumber = parseInt(currentRightNumber, 10) // 180
  dodger.style.left = currentRightNumber + 15 + 'px' // '185px' 
}

const moveDodgerHelper = (event) => {
  // going to figure out if we moveDodgerLeft or moveDodgerRight
  if (event.keyCode === 37) {
    moveDodgerLeft()
  } if (event.keyCode === 39) {
    moveDodgerRight()
  } 
    
}

// 3 - add event listener
document.addEventListener('keydown', moveDodgerHelper)