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


function setupFooter() {
  var lang = getLang();

  var json_object = JSON.parse(readTextFile("../JSON/lang_" + lang + ".json"));

  var json_page_object = json_object["footer"];

  document.getElementById("footer_message").innerHTML = json_page_object["message"];
}


function setupContribute() {
  var lang = getLang();

  var json_object = JSON.parse(readTextFile("../../JSON/lang_" + lang + ".json"));

  var json_page_object = json_object["contribute"];

  document.getElementById("heading_1").innerHTML = json_page_object["heading_1"];
  document.getElementById("paragraph_1").innerHTML = json_page_object["paragraph_1"];
}

function setupAutoGenerateCourses() {
  var lang = getLang();

  var json_object = JSON.parse(readTextFile("../../JSON/lang_" + lang + ".json"));

  var json_page_object = json_object["contribute"];

  var mon = json_page_object["monday"];
  var tue = json_page_object["tuesday"];
  var wed = json_page_object["wednesday"];
  var thu = json_page_object["thursday"];
  var fri = json_page_object["friday"];

  var when = json_page_object["when"];
  var where = json_page_object["where"];
  var who = json_page_object["who"];
  var email = json_page_object["e-mail"];

  return [mon, tue, wed, thu, fri, when, where, who, email];
}


function setupArticleHome() {
  var lang = getLang();

  var json_object = JSON.parse(readTextFile("../../JSON/lang_" + lang + ".json"));

  var json_page_object = json_object["articles"];

  document.getElementById("heading_1").innerHTML = json_page_object["heading_1"];
  document.getElementById("paragraph_1").innerHTML = json_page_object["paragraph_1"];
  document.getElementById("paragraph_2").innerHTML = json_page_object["paragraph_2"];
}

function setupAutomaticArticleLoading() {
  var lang = getLang();

  var json_object = JSON.parse(readTextFile("../../JSON/lang_" + lang + ".json"));

  var json_page_object = json_object["articles"];

  var by = json_page_object["by"];
  var published_at = json_page_object["published_at"];

  return [by, published_at];
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
