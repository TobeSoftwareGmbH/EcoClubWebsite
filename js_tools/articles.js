function displayArticlePreview() {
  var title, author, description, image_file, file, pub_date, id;
  var articleObject;

  var output = "";
  var json_object = JSON.parse(readTextFile("../../JSON/articles.json"));

  var stringValues = setupAutomaticArticleLoading();

  //console.log(json_object.articles);
  for(var art = 0; art < json_object.articles.length; art++) { //Alle Artikel durchgehen
    articleObject = json_object.articles[art];

    title = articleObject.title;
    author = stringValues[0]+" " + articleObject.author;
    description = articleObject.description;
    image_file = (articleObject.picture == "placeholder") ? "placeholder.png" : articleObject[3];
    pub_date = stringValues[1]+" " + articleObject.pub_date //not used

    output += "<div class='article'><a href='article.html?id=" + art +"'><img class='art_img' src='../../img/articles_preview/"+image_file+"'></img>"
    output += "<div class='art_info'><h4 class='art_title'>" + title + "</h4><p class='art_author'>"+author+"</p><p class='art_description'>"+description+"</p></div>"
    output += "</a></div>"
    output += " <div style='clear: both;'></div> "
  }

  //console.log(output);
  document.getElementById("article-list").innerHTML = output; //output dem dafür vorgesehenem div hinzufügen
}

function displayArticle(id) {
  console.log(id);
  var title, author, description, output, paragraphs, email;

  var json_object = JSON.parse(readTextFile("../../JSON/articles.json"));
  var articleObject = json_object.articles[id];

  //console.log(json_object);

  title = articleObject.title;
  author = articleObject.author;
  description = articleObject.description;
  email = articleObject.email;

  paragraphs = articleObject.paragraphs;
  //console.log(articleObject);

  document.getElementById("article_text").innerHTML += "<p>" + description + "</p>";

  for(var i = 0; i < paragraphs.length; i++) {
    document.getElementById("article_text").innerHTML += "<p>" + paragraphs[i] + "</p>";
  }

  document.getElementById("article_title").innerHTML = title;
  document.getElementById("author").innerHTML += author;

  document.getElementById("article").innerHTML += "<p>Für weitere Fragen und Kommentare: <a href='mailto:" + email + "'>" + email + "</a></p>";
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
