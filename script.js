// Helper function: writes any HTML into the #out div
function render(html) {
  document.getElementById('out').innerHTML = html
}

/* 
  Function 1 — greet()
  ---------------------
  - Prompt the user for their name
  - If they type something, display "Hello, NAME!"
  - If they cancel or leave blank, show a friendly message
*/
function greet() {
  const name = prompt("What is your name?")
  if (!name) {
    render("<h1>ANSWER THE PROMPTS<h1>")
    return
  } else {
    render("<p>Hello, " + name + ". Nice to meet you!")
  }
}

/* 
  Function 2 — timeOfDay()
  -------------------------
  - Get the current hour from the computer clock
  - Decide whether it's morning, afternoon, or evening
  - Display a message like "Good morning!" 
*/
function timeOfDay() {
  const h = new Date().getHours()
  let msg = ''
  if (h < 12) {
    msg = 'Good Morning!'
  } else if (h < 18) {
    msg = 'Good Evening'
  } else {
    msg = 'Good Night'
  }
  render(`<p>${msg}<p>`)

}

/* 
  Function 3 — randomBetween()
  -----------------------------
  - Prompt the user for a minimum and maximum number
  - Generate a random number between them
  - Display the result
  - Handle invalid input (like blanks or min >= max)
*/
function randomBetween() {
  const min = parseInt(prompt("Enter a minimum number:"))
  const max = parseInt(prompt("Enter a maximum number:"))

  if (isNaN(min) || isNaN(max)){
    render("<h1>ANSWER THE PROMPTS<h1>")
    return
  }

  if (min >= max) {
    render("<p>MAKE YOUR MIN LESS THAN MORE MAX<p>")
    return
  }

  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
  render("Your random number between " + min + " and " + max + " is: " + randomNumber)
}

/* 
  Function 5 — clearOutput()
  ---------------------------
  - Clear whatever is inside #out
  - Replace it with a placeholder message like "Output cleared."
*/
function clearOutput() {
  render ("<p>Output will appear here…</p>")
  document.getElementById('titleID').innerHTML = ('🍂 JS Functions Demo')
}


function newTitle() {
let titleName = prompt("What is the new Title?")
document.getElementById('titleID').innerHTML = titleName
}

function txtColor() {

}

function bgColor() {

}

function numDouble() {
  let num1 = parseInt(prompt("What is your number?"))
  let num2 = num1 * 2

  if (isNaN(num1)) {
    render("<p>GIVE A NUMBER<p>")
    return
  } else {
    render (`<p>Your number doubled is: ${num2}<p>`)
  }
}

// ---- Event listeners for the demo buttons ----
document.getElementById('btnGreet').addEventListener('click', greet)
document.getElementById('btnTime').addEventListener('click', timeOfDay)
document.getElementById('btnRandom').addEventListener('click', randomBetween)
document.getElementById('btnTitle').addEventListener('click', newTitle)
document.getElementById('btnColor').addEventListener('click', txtColor)
document.getElementById('btnBGC').addEventListener('click', bgColor)
document.getElementById('btnDouble').addEventListener('click', numDouble)
document.getElementById('btnClear').addEventListener('click', clearOutput)

/* 
  ------------------------------------------
  Student Challenge Section 
  ------------------------------------------
  Add 4 new functions here, each with its own button in index.html:
  
  1) Change the page title text to something new.
  2) Each time you press the button, the output text color cycles through a few choices (red, green, orange, etc.).
  3) Press the button to change the background color of the output box to a random color.
  4) Ask the user for a number and display that number doubled.
  
  Write each function below, and don’t forget to connect each one 
  to a new button in index.html using addEventListener.
*/
