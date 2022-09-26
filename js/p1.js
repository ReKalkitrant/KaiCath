
// ELEMENTS =====================
const text = window.document.getElementById("printable_area")
const text2 = window.document.getElementById("printable_area2")
const box_0 = window.document.getElementById("box_0")
const box_1 = window.document.getElementById("box_1")
const box_2 = window.document.getElementById("box_2")
const box_3 = window.document.getElementById("box_3")
const box_4 = document.getElementById("button_4")
const box_5 = document.getElementById("button_5")
const box_6 = document.getElementById("button_6")
const box_7 = document.getElementById("button_7")
const box_8 = document.getElementById("button_8")
const box_9 = document.getElementById("button_9")

const buttons = [box_0, box_1, box_2, box_3, box_4, box_5, box_6, box_7, box_8, box_9]

var box_bool = [false, false, false, false, false, false, false, false, false, false];

var state = {
  buttonID: 0,
  contentCounter: 1,
}

var cursor = 5;


//box_C.focus()













/* ***** My Stuff *************/




  // document.onclick = myFunction(event) {alert(event.target.id);}
 document.addEventListener('click', (event)=> { 
  //alert(event.target.id);
  //document.getElementById("printable_area").innerHTML = event.target.id;

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




function buttonSelected (btn)
{
 
  btn.className="selected";
  cursor = 5;
  console.log(btn)
}


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
    /*if(e.key === "1" && box_bool[1] === false) {
      //mainButton.focus()
        buttons[1].style.background = "green";
        text.innerHTML = "Arrow Up!";
        box_bool[1] = true;
    } 
    else if(e.key === "1" && box_bool[1] === true){
      buttons[1].style.background = rgb(444);
      box_bool[1] = false;
    } */
    if (e.key ==="s" && cursor < 7) {
      buttons[cursor].className="deselected";
      //buttons[cursor].style.backgroundColor="gray";
      //console.log(cursor);
      cursor = cursor + 3;
      //console.log(buttons[cursor]);
      //console.log(buttons[cursor].className);
      buttons[cursor].className="selected";
      //buttons[cursor].style.backgroundColor="blue";
      //console.log(cursor);
      //console.log(buttons[cursor].className);
      //console.log(buttons[cursor].style.backgroundColor);

    }
    else if(e.key==="w" && cursor > 6) {
      buttons[cursor].className="deselected";
      //buttons[cursor].style.backgroundColor="gray";

      cursor = cursor - 3;
      buttons[cursor].className="selected";
      //buttons[cursor].style.backgroundColor="blue";
    }
    else if(e.key==="d" && cursor != 9 && cursor != 6) {
      buttons[cursor].className="deselected";
      //buttons[cursor].style.backgroundColor="gray";
      cursor = cursor + 1;
      buttons[cursor].className="selected";
      //buttons[cursor].style.backgroundColor="blue";
    }
    else if(e.key==="a" && cursor != 4 && cursor != 7) {
      buttons[cursor].className="deselected";
      //buttons[cursor].style.backgroundColor="gray";
      cursor = cursor - 1;
      buttons[cursor].className="selected";
      //buttons[cursor].style.backgroundColor="blue";
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

    }    
    else if(e.key==="5"){
     
      window.location.replace("b5.html");
      }
    else if(e.key==="6"){
     
        window.location.replace("b6.html");
      }

  
})
