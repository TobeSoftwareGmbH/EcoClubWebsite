function displayCourses() {
  var dayName, hour, teacher, email, room;
  var jsonDayObject;
  var coursesArr;
  var jsonLessonObject;
  var output="";
  var json_object = JSON.parse(readTextFile("../../JSON/courses.json"));

  for(var day = 0; day < 4; day++) {
    jsonDayObject = json_object[day];

    if(jsonDayObject != null) {
      dayName = jsonDayObject.day;
      //console.log(dayName);

      output += "<h3>"+dayName+":</h3>";

      for(var i = 0; i < jsonDayObject.courses.length; i++) {
        jsonLessonObject = jsonDayObject.courses[i];
        console.log(jsonLessonObject);

        hour = jsonLessonObject[0];
        room = jsonLessonObject[1];
        teacher = jsonLessonObject[2];
        email = jsonLessonObject[3];

        output += "<p>Wann: "+hour+"<br>Wo: "+room+"<br>Wer: "+teacher+"<br>E-Mail: <a href='mailto:"+email+"'>"+email+"</a></p>";
      }

      output += "<br>"
    }

  }

  console.log(output);
  document.getElementById("courses").innerHTML = output;
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
