function getContent(class_level) {
  var request = new XMLHttpRequest();
   request.open("GET", "../../JSON/eco_week.json", false);
   request.send(null);


  var json = request.responseText;
  var json_object = JSON.parse(json);

  console.log(json_object);
}
