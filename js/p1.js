
// ELEMENTS =====================
const text = window.document.getElementById("printable_area")
const text2 = window.document.getElementById("printable_area2")
const box_0 = window.document.getElementById("box_0")
const box_1 = window.document.getElementById("box_1")
const box_2 = window.document.getElementById("box_2")
const box_3 = window.document.getElementById("box_3")
const box_4 = window.document.getElementById("box_4")
const box_5 = window.document.getElementById("box_5")
const box_6 = window.document.getElementById("box_6")
const box_7 = window.document.getElementById("box_7")
const box_8 = window.document.getElementById("box_8")
const box_9 = window.document.getElementById("box_9")

const buttons = [box_0, box_1, box_2, box_3, box_4, box_5, box_6, box_7, box_8, box_9]

var box_bool = [false, false, false, false, false, false, false, false, false, false];

var state = {
  buttonID: 0,
  contentCounter: 1,
}


//box_C.focus()













/* ***** My Stuff *************/




  // document.onclick = myFunction(event) {alert(event.target.id);}
 document.addEventListener('click', (event)=> { 
  //alert(event.target.id);
  document.getElementById("printable_area").innerHTML = event.target.id;

  if (event.target.id == "box_4"){
  document.getElementById("wrapper").style.display = 'none';
  }
  if (event.target.id == "box_5"){
    document.getElementById("wrapper").style.display = 'show';
    }
})
/*
    document.onclick(this.id) = function() {myFunction()};
    

    function myFunction() {
      document.getElementById("printable_area").innerHTML = "Post a thing";
    }
*/




//function myFunction() {
//  document.getElementById("printable_area").innerHTML = "Post a thing"; }



// *********  Navigation  *********************
function nav (move) {
  const currentIndex = document.activeElement.tabIndex;
  const next = currentIndex + move;
  const items = document.querySelectorAll('.items');
  const targetElement = items[next];
  targetElement.focus();
}


window.addEventListener("keyup", e => {
  
  //switch (e.key) {
    //case "ArrowUp":
    if(e.key === "1" && box_bool[1] === false) {
      //mainButton.focus()
        buttons[1].style.background = "green";
        text.innerHTML = "Arrow Up!";
        box_bool[1] = true;
    } 
    else if(e.key === "1" && box_bool[1] === true){
      buttons[1].style.background = rgb(444);
      box_bool[1] = false;
    }
    else if(e.key ==="9"){
        text2.innerHTML = "9 Selected";
    }
    else if(e.key==="2"){
      buttons[1].style.background = "dark-gray";
    }
    // Nav to other pages
    else if(e.key==="4"){
     
    window.location.replace("b4.html");
    alert("4");
    }    
    else if(e.key==="5"){
     
      window.location.replace("b5.html");
      alert("5");
      }

  
})
