var page = 1;
var maxPage = 4;

function plusSlides(n) {
  page = page + n;
  showSlide();
}

function showSlide() {
  if(page > maxPage) page = 1;
  if(page < 1) page = maxPage;

  document.getElementById("number_indicator").innerHTML = page + " / " + maxPage; //Seitennummer wird aktualisiert
  document.getElementById("slideshow_img").src = "img/slideshow/slideshow_" + page + ".jpg"; //Bild wird geändert (Muster für Dateiname: slideshow_#.jpg)

  switch(page) { //Je nach Seite eine andere Beschreibung
    case 1:
      document.getElementById("img_heading_1").innerHTML = "Zweiter Stern für uns!";
      document.getElementById("img_heading_2").innerHTML = "Bild der Verleihung vom 22. Oktober 2018";
      break;
    case 2:
      document.getElementById("img_heading_1").innerHTML = "Bild 2";
      document.getElementById("img_heading_2").innerHTML = "Beschreibung 2";
      break;
    case 3:
      document.getElementById("img_heading_1").innerHTML = "Bild 3";
      document.getElementById("img_heading_2").innerHTML = "Beschreibung 3";
      break;
    case 4:
      document.getElementById("img_heading_1").innerHTML = "Bild 4";
      document.getElementById("img_heading_2").innerHTML = "Beschreibung 4";
      break;
  }
}
