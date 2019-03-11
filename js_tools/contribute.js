function displayCourses() {
  var dayName, hour, teacher, email, room;
  var jsonDayObject;
  var coursesArr;
  var jsonLessonObject;
  var output="";
  var json_object = JSON.parse(readTextFile("../../JSON/courses.json"));

  var stringData = setupAutoGenerateCourses();

  for(var day = 0; day < 4; day++) { //Alle Tage durchgehen
    jsonDayObject = json_object[day];

    if(jsonDayObject != null) { //Wenn Tag nicht eingetragen ist, überspringe alles
      dayName = stringData[day];

      output += "<h3>"+dayName+":</h3>"; //Überschrift hinzufügen

      for(var i = 0; i < jsonDayObject.courses.length; i++) { //Alle Kurse an diesem Tag durchgehen
        jsonLessonObject = jsonDayObject.courses[i];

        //Variablen auslesen
        hour = jsonLessonObject[0];
        room = jsonLessonObject[1];
        teacher = jsonLessonObject[2];
        email = jsonLessonObject[3];

        //Text hinzufügen, alles in ein <p>-Element mit Zeilensprüngen
        output += "<p>"+stringData[5]+": "+hour+"<br>"+stringData[6]+": "+room+"<br>"+stringData[7]+": "+teacher+"<br>"+stringData[8]+": <a href='mailto:"+email+"'>"+email+"</a></p>";
      }

      output += "<br>"//Am Ende des Tages einen Absatz hinzufügen
    }

  }

  document.getElementById("courses").innerHTML = output; //output dem dafür vorgesehenem div hinzufügen
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
