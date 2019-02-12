function getContent(year) {
  document.getElementById("year_programme").innerHTML = "";
  var time, evntLoc, desc, aud, output, count;
  var output;
  var eventArr;
  var jsonDayObject;
  var json_object = JSON.parse(readTextFile("../../JSON/eco_week.json"));
  //console.log(json_object);


  for(var dayNum = 0; dayNum < 4; dayNum++) {
    jsonDayObject = json_object[dayNum];
    //console.log(dayNum);
    //console.log(jsonDayObject);

    //console.log(jsonDayObject.day + ": ");
    eventArr = jsonDayObject.events;
    //console.log("\n")

    output = "<h3>" + jsonDayObject.day + "</h3>";

    for(var i = 0; i < eventArr.length; i++) {
      //console.log(eventArr[i]);

      aud = eventArr[i][0];
      console.log(aud);

      if (aud.localeCompare("all") == 0 || aud.localeCompare(year) == 0) {
        //console.log("   Check.")
        count++;

        aud = (aud.localeCompare("all") == 0) ? "Alle" : ("S" + year);

        time = eventArr[i][1];
        evntLoc = eventArr[i][2];
        desc = eventArr[i][3];

        //console.log("For: " + aud + ",\n Time: " + time + ",\n Location: " + evntLoc + ",\n Beschreibung: " + desc + "\n");
        output += "Für: " + aud + "<br> Zeit: " + time + "<br> Ort: " + evntLoc + "<br> Beschreibung: " + desc + "<br><br>";
      }
    }

    if(count != 0) {
      document.getElementById("year_programme").innerHTML += output;
      count = 0;
    }
  }
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
