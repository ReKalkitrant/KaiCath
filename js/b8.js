/*

//let url = 'http://feeds.bbci.co.uk/news/technology/rss.xml';
//let url = 'https://bible.usccb.org/readings.rss';
//let url = 'https://abibleverse.org/faith.xml'; //This one kind of works
let url = 'https://www.vaticannews.va/en/word-of-the-day.rss.xml';  //sort of works
//let url = 'https://www.catholic.org/xml/rss_dailyreadings.php'; //just tells you what daily readings are
const title_area =  document.getElementById("printable_area");
const textarea =   document.getElementById("printable_area");

  const date = new Date();
  document.querySelector('#date').innerHTML = date.toDateString();
 
    feednami.load(url)
    .then(feed => {
      textarea.value = ''
      console.log(feed);
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

    */

//Using feednami to fetch RSS feeds
//https://toolkit.sekando.com/docs/en/feednami

window.addEventListener("keyup", e => {
    
  
  //switch (e.key) {
    //case "ArrowUp":
    if(e.key === "a") {
        //scroll up
        //window.scrollBy(0,-80);
        window.scrollBy (0,-15);
        console.log("a up!");
        //ScrollUp(10);
    } 
    else if(e.key === "z"){
      
        //scroll down
        //window.scrollBy(0,80);
        window.scrollBy (0,35);
        console.log("z down!");
        //ScrollDown(10);
    }
    else if(e.key ==="0"){
        //return to main screen

        window.location.replace("p1.html");

    }

    //Code anytime key is pressed

})

function ScrollUp(UP_num) {

    window.scrollBy(0, UP_num);
    console.log("Called Up");
}


function ScrollDown(Down_num) {

    window.scrollBy(0, Down_num);
    console.log("Called Down");
}