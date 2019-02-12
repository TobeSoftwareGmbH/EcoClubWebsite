function getContent(class_level) {
  var json = readTextFile("../../JSON/eco_week.json");

  var json_object = JSON.parse(json);

  console.log(json_object);

  for(var i = 0; i < 5; i++) {
    var jsonDayObject = json_object[i]; //get JSON Elements of that jsonDayObject
    console.log(allClasses);

    var allClasses = jsonDayObject.all; //Getting Events for all class levels
    console.log(allClasses);

    /*for(var j = 0; j < allClasses.length; j++) {
        time = allClasses[j][0];
        location = allClasses[j][1];
        description = allClasses[j][2];
        console.log("Class-Level: s"+class_level+", time: "+time+", location: "+location+", description: "+description);
    }

    var classSpecific = json_object["s"+class_level]; //Getting events of specific class level */
  }
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    var allText;
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);

    return allText;
}
