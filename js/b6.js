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

//Using feednami to fetch RSS feeds
//https://toolkit.sekando.com/docs/en/feednami

//Feeds from BBC News
//https://www.bbc.com/news/10628494#userss