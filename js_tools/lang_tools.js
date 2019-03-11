function getString (var index, var page_name, var string_name) {

  var userLang = navigator.language || navigator.userLanguage;
  var lang = "en";

  if(userLang.contains("en")) lang = "en";
  if(userLang.contains("de")) lang = "de";

  (index) ? var json_object = JSON.parse(readTextFile("../../JSON/lang_" + lang + ".json")) : var json_object = JSON.parse(readTextFile("JSON/lang_" + lang + ".json"))

  var json_page_object = json_object[page_name];

  var string_object = json_page_object[string_name];

  return string_object;
}
