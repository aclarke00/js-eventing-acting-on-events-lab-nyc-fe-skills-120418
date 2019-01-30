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
  if (currentLeftNumber > 0) {
    dodger.style.left = currentLeftNumber - 15 + 'px' // '179px'
  }
}

const moveDodgerRight = () => {
  const dodger = document.getElementById('dodger')
  const currentRight = dodger.style.left // '180px'
  let currentRightNumber = currentRight.replace('px', '') // '180'
  currentRightNumber = parseInt(currentRightNumber, 10) // 180
  if (currentRightNumber < 360) {
    
  }
  dodger.style.left = currentRightNumber + 15 + 'px' // '185px' 
}

const moveDodgerUp = () => {
  const dodger = document.getElementById('dodger')
  const currentUp = dodger.style.bottom // '180px'
  let currentUpNumber = currentUp.replace('px', '') // '180'
  currentUpNumber = parseInt(currentUpNumber, 10) // 180
  dodger.style.bottom = currentUpNumber + 15 + 'px' // '185px' 
}

const moveDodgerDown = () => {
  const dodger = document.getElementById('dodger')
  const currentDown = dodger.style.bottom // '180px'
  let currentDownNumber = currentDown.replace('px', '') // '180'
  currentDownNumber = parseInt(currentDownNumber, 10) // 180
  dodger.style.bottom = currentDownNumber - 15 + 'px' // '185px' 
}

const moveDodgerHelper = (event) => {
  // going to figure out if we moveDodgerLeft or moveDodgerRight
  if (event.keyCode === 37) {
    moveDodgerLeft()
  } if (event.keyCode === 39) {
    moveDodgerRight()
  } if (event.keyCode === 38)
    moveDodgerUp()
    if (event.keyCode === 40)
    moveDodgerDown()
}

// 3 - add event listener
document.addEventListener('keydown', moveDodgerHelper)