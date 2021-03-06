function getLang () {
  var cookie = retrieve_cookie("lang"); //Wenn Sprache bereits gesetzt wurde, ist diese in einem Cookie gespeichert

  if(cookie === "") { //Kein Cookie vorhanden
    var userLang = navigator.language || navigator.userLanguage; //Browser-Sprache wird verwendet
    var lang;

    if(userLang.includes("en")) lang = "en"; //Format von Sprachen z.B. en-US, en-GB etc. alle werden zu en zusammengefasst
    else if(userLang.includes("de")) lang = "de";
    else lang = "en"; //Sprache nicht verfügbar? Englisch ist die Lösung! :)
  } else {
    lang = cookie; //Cookie vorhanden
  }

  return lang;
}

function setupLanguage(pageName, folderUp) {
  var lang = getLang();
  var path = "";

  for(var i1 = 0; i1 < folderUp; i1++) path += "../";
  path += "JSON/lang_" + lang + ".json";

  var text = readTextFile(path);
  var json_object = JSON.parse(text);
  var json_page_object = json_object[pageName];

  var objectsToTranslate = document.getElementsByClassName("translateable");
  console.log(objectsToTranslate);

  for (var i = 0; i < objectsToTranslate.length; i++) {
    var id = objectsToTranslate[i].id;
    console.log(id);

    document.getElementById(id).innerHTML = json_page_object[id];
  }
  document.title = json_page_object["title"];
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

function changeLanguage() {
  var languages = JSON.parse(readTextFile("../JSON/languages.json"));
  var div = document.getElementById('lang');
  var li, a;

  console.log("Language change");
  console.log(languages);

  div.removeChild(document.getElementById('languageButton'));

  for (var i = 0; i < languages.length; i++) {
    li = document.createElement("li");
    a = document.createElement("a");

    li.className = "menu_item item_right item_lang menu_link";

    a.className = "menu_link";
    a.setAttribute("onclick", "setLanguage('" + languages[i] + "')");
    a.innerHTML = languages[i].toUpperCase();

    div.appendChild(li);
    li.appendChild(a);
  }
}

function setLanguage(lang) {
  var current;

  current = retrieve_cookie("lang");
  //console.log(current);

  if (!(current === "")) {
    delete_cookie("lang");
  } else {
    console.log("Cookie not set")
  }

  create_cookie("lang", lang, 1, "/");

  window.top.location.reload();
}
/* from https://www.pontikis.net/blog/create-cookies-php-javascript
 * Create cookie with javascript
 *
 * @param {string} name cookie name
 * @param {string} value cookie value
 * @param {int} days2expire
 * @param {string} path
 */
function create_cookie(name, value, days2expire, path) {
  var date = new Date();
  date.setTime(date.getTime() + (days2expire * 24 * 60 * 60 * 1000));
  var expires = date.toUTCString();
  document.cookie = name + '=' + value + ';' +
                   'expires=' + expires + ';' +
                   'path=' + path + ';';
}

/*From https://www.pontikis.net/blog/create-cookies-php-javascript
 * Retrieve cookie with javascript
 *
 * @param {string} name cookie name
 */
function retrieve_cookie(name) {
  var cookie_value = "",
    current_cookie = "",
    name_expr = name + "=",
    all_cookies = document.cookie.split(';'),
    n = all_cookies.length;

  for(var i = 0; i < n; i++) {
    current_cookie = all_cookies[i].trim();
    if(current_cookie.indexOf(name_expr) == 0) {
      cookie_value = current_cookie.substring(name_expr.length, current_cookie.length);
      break;
    }
  }
  return cookie_value;
}

/*from https://www.pontikis.net/blog/create-cookies-php-javascript
 * Delete cookie with javascript
 *
 * @param {string} name cookie name
 */
function delete_cookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
}
