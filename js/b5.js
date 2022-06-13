//Cleaner way to get Prayer#, Decade#, Mystery#
const PrayerPointerArray = [100,100,200,300,400,401,402,500,710,310,410,411,412,413,414,415,416,417,418,419,510,610,720,310,420,421,422,423,424,425,426,427,428,429,520,620,730,330,430,431,432,433,434,435,436,437,438,439,530,630,740,340,440,441,442,443,444,445,446,447,448,449,540,640,750,350,450,451,452,453,454,455,456,457,458,459,550,650,850,950,150]
const todayDate = new Date();
const MysteriesArray = ["Rosary Prayers", "The Anunciation", "The Visitation", "The Nativity", "The Presentation", "Finding the Lord, in the Temple", "Agony in the Garden", "Scouraging at the Pillar", "Crowning of Thorns", "Carrying of the Cross", "Crucifiction of our Lord", "The Resurrection", "Christ's Assension", "Coming of the Holy Spirit", "Mary's Assumption", "Mary's Crowning", "Baptism of our Lord", "Miracle at the Wedding at Cana", "Proclomation", "The Transfiguration", "Institution of the Eucharist"]

var PrayerCounter = 0;
var DecadeCounter = 0;
var MysteryCounter = 0;
// var PrayerPounterArray = [0,1,2,3,4,4,4,5,7,3,4,4,4,4,4,4,4,4,4,4,5,6,7,3,4,4,4,4,4,4,4,4,4,4,5,6,7,3,4,4,4,4,4,4,4,4,4,4,5,6,7,3,4,4,4,4,4,4,4,4,4,4,5,6,7,3,4,4,4,4,4,4,4,4,4,4,5,6,8,9,10,1]

const MysteryOffsetArray = [10,0,5,10,15,5,0];
const DayOfWeek = todayDate.getDay();
var MysOffSet = 0;
MysOffSet = MysteryOffsetArray[DayOfWeek];








/* ***** My Stuff *************/




  // document.onclick = myFunction(event) {alert(event.target.id);}
 document.addEventListener('click', (event)=> { 
})







window.addEventListener("keyup", e => {
    
  
  //switch (e.key) {
    //case "ArrowUp":
    if(e.key === "3" && PrayerCounter < 80) {
        PrayerCounter += 1;
    
    } 
    else if(e.key === "1" && PrayerCounter > 0){
      
        PrayerCounter -= 1;
    }
    else if(e.key ==="0"){
        PrayerCounter = 0;

        window.location.replace("p1.html");

    }
//    console.log(PrayerCounter + "  -  " + PrayerPointerArray[PrayerCounter]);
    //console.log(MysteryOffsetArray[PrayerCounter])
    console.log(MysOffSet + "   " + DayOfWeek)


    PrintPrayer(PrayerPointerArray[PrayerCounter]);
    if (PrayerCounter === 80) {
        document.getElementById("printable_area2").innerHTML = "Rosary is Concluded, <b>press 0</b> to return to main menu"
    }
    document.getElementById("bottom_error_code").innerHTML = PrayerCounter + "  " + DecadeCounter + " " + MysteryCounter;  // Print Prayer Number at bottom
  
})
function PrintPrayer(Prayer_Decode_num) {
    let P_num = Math.trunc(Prayer_Decode_num / 100);
    //console.log(Prayer_Decode_num);
    DecadeCounter = (Prayer_Decode_num % 10);
    MysteryCounter = Math.floor(Prayer_Decode_num / 10 % 10);
    //document.getElementById("bottom_error_code").innerHTML = P_num;  // Print Prayer Number at bottom
    if(P_num === 0) {
        document.getElementById("printable_area").innerHTML = "Rosary Prayers";
        document.getElementById("printable_area2").innerHTML = "This will guide you through a Rosary.<br/>Press '3' to move to next prayer.<br /> Press '1' to move back.<br/>Press '0' to go back to the home screen.";
    }
    if(P_num === 1) {
        document.getElementById("printable_area").innerHTML = "Sign of the Cross";
        document.getElementById("printable_area2").innerHTML = "In the name of The Father<br/>and The Son,<br/>and The Holy Spirit<br/><br />(Cross yourself Head, Abdomen Shoulder, Shoulder<br/>using 5 fingers to Signify the Wounds of Christ, or 3 together to signify the Holy Trinity<br /> and 2 out to signify Christ's 2 natures.)";

    }
    else if(P_num === 2) {

        document.getElementById("printable_area").innerHTML = "Apostles Creed";
        document.getElementById("printable_area2").innerHTML = "Glory to God in the highest <br/>and on earth peace to people of good will. <br/>We praise you, we bless you, we adore you, we glorify you, <br>we give you thanks for your great glory, <br/>Lord God, heavenly King, O God, almighty Father.<br/>Lord Jesus Christ, Only Begotten Son, <br/>Lord God, Lamb of God, Son of the Father, </br>you take away the sins of the world, </br>have mercy on us; <br/>you take away the sins of the world, <br/>receive our prayer; <br/>you are seated at the right hand of the Father, <br/>have mercy on us.<br/>For you alone are the Holy One,<br/>you alone are the Lord,<br/>you alone are the Most High,<br/>Jesus Christ,with the Holy Spirit,<br/>in the glory of God the Father. <br/>Amen.";
    }
    else if(P_num === 3) {

        document.getElementById("printable_area").innerHTML = "Lord's Prayer";
        document.getElementById("printable_area2").innerHTML = "Our Father, Who art in heaven, hallowed by Thy name.<br />Thy kingdom come, thy will be done, on earth as it is in heaven.<br />Give us this day our daily bread, and forgive us our trespasses as we forgive those who tress pass against us.<br />  Lead us not into temptation, but deliver us from evil.<br /> Amen";
    }
    else if(P_num ===4)
         {
        document.getElementById("printable_area").innerHTML = "Hail Mary";
        document.getElementById("printable_area2").innerHTML = "Hail Mary, full of grace.  The Lord is with thee.<br/>Blessed art thou among women.  And blessed is the fruit of thy womb Jesus<br/>Holy Mary, Mother of God,<br/>Pray for us sinners, now and at the hour of our death.<br/>Amen";
        DecadeCounter += 1;
    }
    else if(P_num === 5) {
        document.getElementById("printable_area").innerHTML = "Glory be,";
        document.getElementById("printable_area2").innerHTML = "Holy, Holy, Holy Lord God of hosts.<br/>Heaven and earth are full of your glory.<br/>Hosanna in the highest.<br/>Blessed is he who comes in the name of the Lord.<br/>Hosanna in the highest.";
        DecadeCounter = 0;
    }
    else if(P_num === 6) {
        document.getElementById("Top_Row").innerHTML = MysteriesArray[MysteryCounter + MysOffSet];
        document.getElementById("printable_area").innerHTML = "Fatima Prayer";
        document.getElementById("printable_area2").innerHTML = "Oh my Jesus, forgive us our sins.  Save us from the fires of hell.<br />Lead all souls to heaven, especially those in most need of thy mercy.";
    }
    else if(P_num === 7) { //&& MysteryCounter === 1) {

        document.getElementById("Top_Row").innerHTML = MysteriesArray[MysteryCounter + MysOffSet];  //"The Annunciation";
        document.getElementById("printable_area").innerHTML = MysteryCounter + " Mystery";
        document.getElementById("printable_area2").innerHTML = MysteriesArray[MysteryCounter + MysOffSet];//"The Annunciation";
    }
    else if(P_num === 7 && MysteryCounter === 2) {

        document.getElementById("printable_area").innerHTML = "2nd Mystery";
        document.getElementById("printable_area2").innerHTML = "The Visitation";
        document.getElementById("Top_Row").innerHTML = "The Visitation";
    }
    else if(P_num === 7 && MysteryCounter === 3) {

        document.getElementById("printable_area").innerHTML = "3rd Mystery";
        document.getElementById("printable_area2").innerHTML = "The Nativity";
        document.getElementById("Top_Row").innerHTML = "The Nativity";
    }
    else if(P_num === 7 && MysteryCounter === 4) {

        document.getElementById("printable_area").innerHTML = "4th Mystery";
        document.getElementById("printable_area2").innerHTML = "The Presentation at the Temple";
        document.getElementById("Top_Row").innerHTML = "The Presentation at the Temple";
    }
    else if(P_num === 7 && MysteryCounter === 5) {

        document.getElementById("printable_area").innerHTML = "5th Mystery";
        document.getElementById("printable_area2").innerHTML = "Finding the Lord, in the Temple";
        document.getElementById("Top_Row").innerHTML =  "Finding the Lord Jesus, in the Temple";
    }
    else if(P_num === 8) {

        document.getElementById("printable_area").innerHTML = "Hail Holy Queen";
        document.getElementById("printable_area2").innerHTML = "Hail Holy Queen, Mother of Mercy, our life, our sweetness and our hope.<br />To the do we cry, poor banished children of Eve.<br />To thee do we send up our sighs, mourning and weeping in this vaale of tears.<br />Turn then, most gracious advocate, thine eyes of mercy toward us, and afther this our exile, show unto us the Blessed Fruit of thy Womb Jesus.<br />  Oclement, O loving, Oh Sweet Virgin Mary.<br />Pray for Us, O Holy Mother of God, that we may be made worthy of the Promises of Christ.<br />Amen";
    }
    else if(P_num === 9) {
        document.getElementById("printable_area").innerHTML = "Saint Michael, Defend Us";
        document.getElementById("printable_area2").innerHTML = "Saint Michael, the ArchAngel, defend us in battle.<br />Be our protection against the whickedness and snares of the Devil.<br />May God rebuke him, we humbly pray.<br />And do thou, o Prince of the Heavenly Hosts,<br />By the power of God, cast into hell Satan and all the evil spirits who prowl about the world for the ruin of souls.<br />Amen";
    }
    else if(P_num === 10) {
        document.getElementById("printable_area").innerHTML = "Closing Prayer";
        document.getElementById("printable_area2").innerHTML = "Closing Prayer";
    }
    if (P_num === 80) {
        document.getElementById("Top_Row").innerHTML = "Rosary Concluded"
    }
    /* 
    const currentIndex = document.activeElement.tabIndex;
    const next = currentIndex + move;
    const items = document.querySelectorAll('.items');
    const targetElement = items[next];
    targetElement.focus();
    */
  }
