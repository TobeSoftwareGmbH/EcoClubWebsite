function getLang () {
  var userLang = navigator.language || navigator.userLanguage;
  var lang;

  if(userLang.includes("en")) lang = "en";
  else if(userLang.includes("de")) lang = "de";
  else lang = "en";

  return "de"; //TODO
}

function setupIndex() {
  var lang = getLang();

  var json_object = JSON.parse(readTextFile("JSON/lang_" + lang + ".json"));

  var json_page_object = json_object["home"];

  document.getElementById("heading_1").innerHTML = json_page_object["heading_1"];
  document.getElementById("paragraph_1").innerHTML = json_page_object["paragraph_1"];
  document.getElementById("paragraph_2").innerHTML = json_page_object["paragraph_2"];

  document.getElementById("heading_2").innerHTML = json_page_object["heading_2"];
  document.getElementById("paragraph_3").innerHTML = json_page_object["paragraph_3"];
}

function setupIndexSlideshow() {
  var lang = getLang();

  var json_object = JSON.parse(readTextFile("JSON/lang_" + lang + ".json"));

  var json_page_object = json_object["home"];

  var h1 = json_page_object["slideshow_h1"];
  var p1 = json_page_object["slideshow_p1"];

  var h2 = json_page_object["slideshow_h2"];
  var p2 = json_page_object["slideshow_p2"];

  var h3 = json_page_object["slideshow_h3"];
  var p3 = json_page_object["slideshow_p3"];

  var h4 = json_page_object["slideshow_h4"];
  var p4 = json_page_object["slideshow_p4"];

  return [h1, p1, h2, p2, h3, p3, h4, p4];
}

function setupMenu() {
  var lang = getLang();

  var json_object = JSON.parse(readTextFile("../JSON/lang_" + lang + ".json"));

  var json_page_object = json_object["menu"];

  document.getElementById("btn_start").innerHTML = json_page_object["home"];
  document.getElementById("btn_contribute").innerHTML = json_page_object["contribute"];
  document.getElementById("btn_articles").innerHTML = json_page_object["articles"];
  document.getElementById("btn_languages").innerHTML = json_page_object["languages"];
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
