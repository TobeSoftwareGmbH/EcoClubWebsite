function displayArticles() {
  var title, author, description, image_file, file, pub_date;
  var articleObject;

  var output = "";
  var json_object = JSON.parse(readTextFile("../../JSON/articles.json"));

  console.log(json_object.articles);
  for(var art = 0; art < json_object.articles.length; art++) { //Alle Artikel durchgehen
    articleObject = json_object.articles[art];

    title = articleObject[0];
    author = "von " + articleObject[1];
    description = articleObject[2];
    image_file = (articleObject[3] == "placeholder") ? "placeholder.png" : articleObject[3];
    file = articleObject[4];
    pub_date = "veröffentlicht am " + articleObject[5]; //not used

    output += "<div class='article'><a href='"+file+"'><img class='art_img' src='../../img/articles_preview/"+image_file+"'></img>"
    output += "<div class='art_info'><h4 class='art_title'>"+title+"</h4><p class='art_author'>"+author+"</p><p class='art_description'>"+description+"</p></div>"
    output += "</a></div>"
    output += " <div style='clear: both;'></div> "
  }

  console.log(output);
  document.getElementById("article-list").innerHTML = output; //output dem dafür vorgesehenem div hinzufügen
}

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    var allText;
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);

    return allText;
}
