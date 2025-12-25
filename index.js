// Handle Button Clicks

function changeBackgroundColor() {
  const r = Math.floor(Math.random() *256)
  const g = Math.floor(Math.random() *256)
  const b = Math.floor(Math.random() *256)

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}
function resetBackgroundColor() {
  document.body.style.backgroundColor = ""
}

function displayKeyPress(event) {
  const keyPressDisplay = document.getElementById("keyPressDisplay")

  let key = ""
  
if (typeof event === "string") {
    key = event
} else if (event && event.key) {
  key = event.key
}
  keyPressDisplay.textContent = `Key pressed: ${key}`
}

function displayUserInput() {
  const textInput = document.getElementById("textInput")
  const textInputDisplay = document.getElementById("textInputDisplay")

  if (textInput && textInputDisplay) {
     textInputDisplay.textContent = `You typed: ${textInput.value}`
  }
}

// Listeners
function setupEventListeners() {
const changeColorButton = document.getElementById("changeColorButton")
const resetColorButton = document.getElementById("resetColorButton")
const textInput = document.getElementById("textInput")

if (changeColorButton) {
  changeColorButton.addEventListener("click", changeBackgroundColor)
}
 
if (resetColorButton) {
  resetColorButton.addEventListener("dblclick", resetBackgroundColor)
}

if (textInput){
  textInput.addEventListener("input", displayUserInput)
}

  document.addEventListener("keydown", displayKeyPress)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== "undefined") {
       setupEventListeners()
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}