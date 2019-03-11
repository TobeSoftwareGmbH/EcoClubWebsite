var page = 1;
var maxPage = 4;

function plusSlides(n) {
  page = page + n;
  showSlide();
}

function showSlide() {
  var strings = setupIndexSlideshow();

  if(page > maxPage) page = 1;
  if(page < 1) page = maxPage;

  document.getElementById("number_indicator").innerHTML = page + " / " + maxPage; //Seitennummer wird aktualisiert
  document.getElementById("slideshow_img").src = "img/slideshow/slideshow_" + page + ".jpg"; //Bild wird geändert (Muster für Dateiname: slideshow_#.jpg)

  switch(page) { //Je nach Seite eine andere Beschreibung
    case 1:
      document.getElementById("img_heading_1").innerHTML = strings[0];
      document.getElementById("img_heading_2").innerHTML = strings[1];
      break;
    case 2:
      document.getElementById("img_heading_1").innerHTML = strings[2];
      document.getElementById("img_heading_2").innerHTML = strings[3];
      break;
    case 3:
      document.getElementById("img_heading_1").innerHTML = strings[4];
      document.getElementById("img_heading_2").innerHTML = strings[5];
      break;
    case 4:
      document.getElementById("img_heading_1").innerHTML = strings[6];
      document.getElementById("img_heading_2").innerHTML = strings[7];
      break;
  }
}
