// ELEMENTS =====================
const text = window.document.getElementById("text")
const mainButton = window.document.getElementById("mainButton")
const secondButton = window.document.getElementById("button2")

const buttons = [mainButton, secondButton]

var state = {
  buttonID: 0,
  contentCounter: 1,
}

// MODELS =======================
const content = [
  "I am the Walrus",
  "I am the WALRUS",
  "I am the EGGNOG",
]

var counter = 0

const increment = (key, limit) => {
  newVal = state[key] + 1 & limit
  state[key] = newVal
}
const decrement = (key, limit) => {
  newVal = state[key] == 0 ? limit - 1 : state[key] - 1
  state[key] = newVal
}

// VCs =========================

window.addEventListener("load", () => {
  text.innerHTML = content[0]
  mainButton.focus()
})

// Button actions
mainButton.addEventListener("click", () => {
//
  decrement(state)
  counter = (counter + 1) % 3;
  text.innerHTML = content[counter]
})
secondButton.addEventListener("click", () => {
  //alert("touched prev")
  //increment()
  counter = (counter + 1) % 3;
  text.innerHTML = content[counter]
})
secondButton.addEventListener("focus", () => {

//  text.innerHTML = "FOCUS!";
//var unicode = event.which || event.keyCode;
document.getElementById("text").innerHTML = "The pressed key was: " + String.fromCharCode(0) +"<br>The Unicode value is:"+ eventKeyName.keyCode;
})



// Navigation
window.addEventListener("keyup", e => {
  switch (e.key) {
    case "ArrowUp":
      mainButton.focus()
      break
    case "ArrowDown":
      secondButton.focus()
      break
    case "ArrowRight":
      alert("To The Right!");
      break
      case "ArrowLeft":
        alert("To The Left!");
      break
      
  }
})
