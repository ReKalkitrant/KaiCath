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
        console.log("a up!1");
        //ScrollUp(10);
    } 
    else if(e.key === "z"){
      
        //scroll down
        //window.scrollBy(0,80);
        window.scrollBy (0,35);
        console.log("z down!!");
        //ScrollDown(10);
    }
    else if(e.key ==="0"){
        //return to main screen

        window.location.replace("p1.html");

    }
    else if(e.key ==="k"){
        console.log("k1")

        getKaiAd({
            publisher: 'yourPublisherID',
            app: 'yourAppName',
            slot: 'yourSlotName',
            onerror: err => console.error('Custom catch:', err),
            onready: ad => {
                // Ad is ready to be displayed
                // calling 'display' will display the ad
                ad.call('display')
            }
        })
       
        console.log("k2")

    }
    else if(e.key ==="l"){
    getKaiAd({
        publisher: 'yourPublisherID',
        app: 'yourAppName',
        slot: 'yourSlotName',
        
        h: 264,
        w: 240,
    
        // Max supported size is 240x264
        // container is required for responsive ads
        container: document.getElementById('ad-container'),
        onerror: err => console.error('Custom catch:', err),
        onready: ad => {
    
            // Ad is ready to be displayed
            // calling 'display' will display the ad
            ad.call('display', {
    
                // In KaiOS the app developer is responsible
                // for user navigation, and can provide
                // navigational className and/or a tabindex
                tabindex: 0,
    
                // if the application is using
                // a classname to navigate
                // this classname will be applied
                // to the container
                navClass: 'items',
    
                // display style will be applied
                // to the container block or inline-block
                display: 'block',
            })
        }
    })
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