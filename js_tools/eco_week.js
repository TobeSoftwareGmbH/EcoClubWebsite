function getContent(year) {
  var time, evntLoc, desc, aud;
  var output;
  var eventArr;
  var jsonDayObject;
  var json_object = JSON.parse(readTextFile("../../JSON/eco_week.json"));
  //console.log(json_object);

  for(var dayNum = 0; dayNum < 4; dayNum++) {
    jsonDayObject = json_object[dayNum];
    //console.log(dayNum);
    //console.log(jsonDayObject);

    console.log(jsonDayObject.day + ": ");
    eventArr = jsonDayObject.events;
    //console.log("\n")

    document.getElementById("year_programme").innerHTML += "<h2>" + jsonDayObject.day + "</h2>";

    for(var i = 0; i < eventArr.length; i++) {
      //console.log(eventArr[i]);

      aud = eventArr[i][0];
      time = eventArr[i][1];
      evntLoc = eventArr[i][2];
      desc = eventArr[i][3];

      console.log("For: " + aud + ",\n Time: " + time + ",\n Location: " + evntLoc + ",\n Beschreibung: " + desc + "\n");
      document.getElementById("year_programme").innerHTML += "For: " + aud + "<br> Time: " + time + "<br> Location: " + evntLoc + "<br> Beschreibung: " + desc + "<br><br>";
    }

  }


  /*
  for(var i = 0; i < 5; i++) {
    var jsonDayObject = json_object[i]; //get JSON Elements of that jsonDayObject
    //console.log(allClasses);

    var allClasses = jsonDayObject.all; //Getting Events for all class levels
    console.log("Allclasses ++++++++++++++++ " + i + " ++++++++++++++++");
    console.log(allClasses);
    console.log("++++++++++++++++ " + i + " ++++++++++++++++");

    if (allClasses != null) {
      for(var j = 0; j < allClasses.length; j++) {
        console.log("\n\n\n++++++++++++++++ " + j + " ++++++++++++++++");
        console.log(allClasses[j]);
        console.log("+++++++++++++++++++++++++++++++++++++++++++ \n\n\n");

        time = allClasses[j][0];
        eventLocation = allClasses[j][1];
        description = allClasses[j][2];
        //console.log("Year: s"+ year +", time: "+ time +", location: " + eventLocation + ", description: " + description);
      }
    }

    //var classSpecific = json_object["s"+year]; //Getting events of specific class level
  } */
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
