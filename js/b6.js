//let url = 'http://feeds.bbci.co.uk/news/technology/rss.xml';
//let url = 'https://bible.usccb.org/readings.rss';
//let url = 'https://abibleverse.org/faith.xml'; //This one kind of works
//let url = 'https://www.vaticannews.va/en/word-of-the-day.rss.xml';  //sort of works
//let url = 'https://www.catholic.org/xml/rss_dailyreadings.php'; //just tells you what daily readings are
//let url = 'https://catholic-daily-reflections.com/feed/'; //Catholic Reflections
//let url = 'https://www.catholicgallery.org/mass-readings-today-njb/feed/'; //Another Mass Readings Site
let url = 'https://universalis.com/atommass1.xml';  // https://universalis.com/n-feed.htm service


const title_area =  document.getElementById("printable_area");
const textarea =   document.getElementById("printable_area");

 // const date = new Date();
 // document.querySelector('#date').innerHTML = date.toDateString();
 
    feednami.load(url)
    .then(feed => {
      textarea.value = ''
     // console.log(feed.entries[0]);
      entry = feed.entries[0];
      //for(let entry of feed.entries){
          //create a list element
          let li = document.createElement('li');
          //add HTML content to list items
          //li.innerHTML = `<h4><a href="${entry.link}">${entry.title}</a></h4>${entry.description}`;
          li.innerHTML = `<h4>${entry.title}</h4><br />${entry.description}`;
          //append HTML content to list 
          textarea.appendChild(li);
      //}
    });

//Using feednami to fetch RSS feeds
//https://toolkit.sekando.com/docs/en/feednami

window.addEventListener("keyup", e => {
    
  
    //case "ArrowUp":
    if(e.key === "a"|| e.key== 38) {
        //scroll up
        window.scrollBy(0,-50);
    } 
    else if(e.key === "z" || e.key== 40)
    {
      
        //scroll down
        window.scrollBy(0,50);
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