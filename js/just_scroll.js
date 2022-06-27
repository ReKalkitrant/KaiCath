
window.addEventListener("keyup", e => {
    
  
    //case "ArrowUp":
    if(e.key === "a"|| e.key === 38) {
        //scroll up
        //window.scrollBy(0,-50);
        document.getElementById("printable_area2").scrollBy(0,-50);
        console.log("up");
    } 
    else if(e.key === "z" || e.key === 40)
    {
      
        //scroll down
        //window.scrollBy(0,50);
        document.getElementById("printable_area2").scrollBy(0,50);
        console.log("down");
    }
    else if(e.key ==="0"){
        //return to main screen

        window.location.replace("p1.html");

    }
    else if(e.key===8 || e.key==="Backspace"){  //Backkey
      window.location.replace("p1.html");
    }

    //Code anytime key is pressed

})