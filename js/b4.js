

var PrayerCounter = 0;










/* ***** My Stuff ***************/




  // document.onclick = myFunction(event) {alert(event.target.id);}
 document.addEventListener('click', (event)=> { 
  //alert(event.target.id);
  //document.getElementById("printable_area").innerHTML = event.target.id;
  //document.getElementById("printable_area2").innerHTML = event.target.id;
})
/*
    document.onclick(this.id) = function() {myFunction()};
    

    function myFunction() {
      document.getElementById("printable_area").innerHTML = "Post a thing";
    }
*/




//function myFunction() {
//  document.getElementById("printable_area").innerHTML = "Post a thing"; }






window.addEventListener("keyup", e => {

    if((e.key === "3" && PrayerCounter < 8) ||(e.key === 39 && PrayerCounter < 8)) {
        PrayerCounter = PrayerCounter + 1;
    } 
    else if((e.key === "1" && PrayerCounter > 0) || (e.key === 37 && PrayerCounter > 0)){
      PrayerCounter = PrayerCounter - 1;
    }

    else if(e.key === "a"|| e.key === 38) {
        //scroll up
        window.scrollBy(0,-50);
    } 
    else if(e.key === "z" || e.key === 40)
    {
      
        //scroll down
        window.scrollBy(0,50);
    }
    else if(e.key==="2"){
      buttons[1].style.background = "dark-gray";
    }
    else if(e.key===8 || e.key==="Backspace"){  //Backkey
        PrayerCounter = 0;
      }
      else if(e.key ==="0"){
        PrayerCounter = 0;
        window.location.replace("p1.html");
    }  
    PrintPrayer(PrayerCounter);

  
})
function PrintPrayer(P_num) {
    document.getElementById("bottom_error_code").innerHTML = P_num;
    if(P_num === 0) {
        document.getElementById("printable_area").innerHTML = "Penitential Act";
        document.getElementById("printable_area2").innerHTML = "I confess to almighty God<br/>and to you, my brothers and sisters,<br/>that I have greatly sinned,<br/>in my thoughts and in my words,<br/>in what I have done and in what I have failed to do,<br/>through my fault, through my fault,<br/>through my most grievous fault; <br/>therefore I ask blessed Mary ever-Virgin,<br/>all the Angels and Saints,<br/>and you, my brothers and sisters,<br/>to pray for me to the Lord our God<br/>";

    }
    else if(P_num === 1) {

        document.getElementById("printable_area").innerHTML = "Gloria";
        document.getElementById("printable_area2").innerHTML = "Glory to God in the highest <br/>and on earth peace to people of good will. <br/>We praise you, we bless you, we adore you, we glorify you, <br>we give you thanks for your great glory, <br/>Lord God, heavenly King, O God, almighty Father.<br/>Lord Jesus Christ, Only Begotten Son, <br/>Lord God, Lamb of God, Son of the Father, </br>you take away the sins of the world, </br>have mercy on us; <br/>you take away the sins of the world, <br/>receive our prayer; <br/>you are seated at the right hand of the Father, <br/>have mercy on us.<br/>For you alone are the Holy One,<br/>you alone are the Lord,<br/>you alone are the Most High,<br/>Jesus Christ,with the Holy Spirit,<br/>in the glory of God the Father. <br/>Amen.";
    }
    else if(P_num === 2) {

        document.getElementById("printable_area").innerHTML = "Nicene Creed";
        document.getElementById("printable_area2").innerHTML = "I believe in one God, the Father almighty,<br/>maker of heaven and earth,<br/>   of all things visible and invisible. </br>I believe in one Lord Jesus Christ,<br />the Only Begotten Son of God,<br />born of the Father before all ages.<br />God from God, Light from Light,<br/>true God from true God,begotten, not made, consubstantial with the Father;<br/> through him all things were made.<br/>For us men and for our salvation<br/>he came down from heaven, <br/>and by the Holy Spirit was incarnate of the Virgin Mary, and became man.<br/>For our sake he was crucified under Pontius Pilate,<br/>He suffered death and was buried,<br/>and rose again on the third day<br/>in accordance with the Scriptures.<br/>He ascended into heaven <br/>and is seated at the right hand of the Father.<br/>He will come again in glory<br/>to judge the living and the dead<br/>and his kingdom will have no end.<br/> I believe in the Holy Spirit, <br/>the Lord, the giver of life,<br/>who proceeds from the Father and the Son,<br/>who with the Father and the Son <br/>is adored and glorified, <br/>who has spoken through the prophets.<br/>I believe in one, holy, catholic and apostolic Church. <br/>I confess one Baptism for the forgiveness of sins <br/>and I look forward to the resurrection of the dead <br/>and the life of the world to come. Amen";
    }
    else if(P_num === 3) {

        document.getElementById("printable_area").innerHTML = "Invitation to Prayer";
        document.getElementById("printable_area2").innerHTML = "<b>PRIEST</b>: Pray, brethren ... acceptable to God, the almighty Father.<br/><b>PEOPLE</b>: May the Lord accept the sacrifice at your hands <br>for the praise and glory of his name, for our good<br/> and the good of all his holy Church";
    }
    else if(P_num === 4) {

        document.getElementById("printable_area").innerHTML = "Preface Acclamation";
        document.getElementById("printable_area2").innerHTML = "Holy, Holy, Holy Lord God of hosts.<br/>Heaven and earth are full of your glory.<br/>Hosanna in the highest.<br/>Blessed is he who comes in the name of the Lord.<br/>Hosanna in the highest.";
    }
    else if(P_num === 5) {

        document.getElementById("printable_area").innerHTML = "Invitation to Prayer";
        document.getElementById("printable_area2").innerHTML = "<b>PRIEST</b>: The mystery of faith.<br/><b>PEOPLE</b>: A - We proclaim your Death, O Lord, and profess your Resurrection until you come again<br /><br />B - When we eat this Bread and drink this Cup, we proclaim your Death, O Lord, until you come again.<br /><br />C – Save us, Savior of the world, for by your Cross and Resurrection, you have set us free";
    }
    else if(P_num === 6) {

        document.getElementById("printable_area").innerHTML = "Lamb of God";
        document.getElementById("printable_area2").innerHTML = "Lamb of God, you take away the sins of the world, have mercy on us.<br/>       Lamb of God, you take away the sins of the world, have mercy on us. <br/>Lamb of God, you take away the sins of the world, grant us peace";
    }
    else if(P_num === 7) {

        document.getElementById("printable_area").innerHTML = "Invitation to Communion";
        document.getElementById("printable_area2").innerHTML = "<b>PRIEST</b>: Behold the Lamb of God, behold him who takes away the sins of the world.  Blessed are those called to the supper of the Lamb.<br /><b>ALL</b>: Lord, I am not worthy that you should enter under my roof,  but only say the word and my soul shall be heale";
    }
    const currentIndex = document.activeElement.tabIndex;
    const next = currentIndex + move;
    const items = document.querySelectorAll('.items');
    const targetElement = items[next];
    targetElement.focus();
  }
