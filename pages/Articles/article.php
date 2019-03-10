<html>
  <head>
    <title>Artikel - Der Eco-Club an der ESM</title>
    <link rel="stylesheet" type="text/css" href="../../css_tools/general_style.css">
    <link rel="stylesheet" type="text/css" href="../../css_tools/animate.css">
    <link rel="stylesheet" type="text/css" href="../../css_tools/article.css">
    <script type="text/javascript" src="../../js_tools/articles.js"></script>
    <meta charset="utf-8">
  </head>

  <body>
    <object class="menu animated fadeIn" type="text/html" data="../../html_tools/menu.html"></object>

    <div class="article animated fadeIn">
      <h2 id = "article_title"></h2>
      <i><p id = "author">Geschrieben von </p></i>

      <div id="article_text">
      </div>

      <br><br>

      <p>Für weitere Fragen und Kommentare: <a href="mailto:arturo.roberti@student.eursc.eu">arturo.roberti@student.eursc.eu</a></p>
    </div>

    <object class="bottom animated fadeIn" type="text/html" data="../../html_tools/bottom.html"></object>
  </body>

  <?php
    echo "<script type='text/javascript'>displayArticle(", $_GET['id'] ,")</script>"
  ?>
</html>
