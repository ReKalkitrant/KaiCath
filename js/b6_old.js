let getXMLFile = function(path, callback) {
    let request = new XMLHttpRequest();
    request.open("GET", path);
    request.setRequestHeader("Content-Type", "text/xml");
    request.onreadystatechange = function() {
        if(request.readyState === 4 && request.status === 200) {
            callback(request.responseXML);
        }
    };
    request.send();
};

getXMLFile("http://www.vaticannews.va/en/word-of-the-day.rss.xml", function(xml) {
    console.log(xml);
});


//getXMLFile("https://www.catholic.org/xml/rss_dailyreadings.php", function(xml) {
    
 //   https://www.vaticannews.va/en/word-of-the-day.rss.xml
 // https://bible.usccb.org/readings.rss