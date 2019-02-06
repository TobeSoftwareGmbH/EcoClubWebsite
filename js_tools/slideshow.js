var page = 1;
var maxPage = 4;

function plusSlides(n) {
  page = page + n;
  showSlide();
}

function showSlide() {
  if(page > maxPage) page = 1;
  if(page < 1) page = maxPage;

  document.getElementById("number_indicator").innerHTML = page + " / " + maxPage;
  document.getElementById("slideshow_img").src = "img/slideshow/slideshow_" + page + ".jpg";

  switch(page) {
    case 1:
      document.getElementById("img_heading_1").innerHTML = "Bild 1";
      document.getElementById("img_heading_2").innerHTML = "Beschreibung 1";
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
