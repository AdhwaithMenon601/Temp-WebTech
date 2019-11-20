<?php
    $user = $_POST['user'];
    $pass = $_POST['password1'];
    //Database connection
    $servername = "localhost";
    $username = "id11632512_adhu601";
    $password = "xxkxx212";
    $databasename = "id11632512_userinfo";
    $con = mysqli_connect($servername,$username,$password,$databasename);
    if(!$con) {
        die("Error : ".mysqli_connect_error);
    }
    $sql = "INSERT INTO `UserInfo` (`UserName`, `Password`) VALUES ('$user', '$password');";
    if(mysqli_query($con,$sql)) {
        echo "Registration Done";
    }
?>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="../client/public/styles.css" />
    <link
      href="https://fonts.googleapis.com/css?family=Aclonica"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css"
    />
    <link
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
      crossorigin="anonymous"
    />
    <title>PC Picker</title>
  </head>
  <body>
    <header>
      <nav class="black lighten-1">
        <div class="container">
          <div class="nav-wrapper">
            <a href="home.html" class="brand-logo right"
              >PC-PARTS<i class="material-icons medium">computer</i></a
            >

            <a
              href="#"
              data-activates="main-menu"
              class="button-collapse show-on-large"
              ><i class="fa fa-bars small"></i
            ></a>
            <!-- RIGHT NAV -->
            <ul class="right hide-on-small-only">
              <li></li>
            </ul>
            <!-- SIDE MENU -->
            <ul class="side-nav" id="main-menu">
              <li>
                <a id="login" class="btn red darken-1" href="../client/views/login.html"
                  ><i class="fa fa-google left"></i> Login With Google</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <br />
    <div class="container-narrow">
      <main>
        <div class="center">
            <h1>User Registered</h1>
        </div>
        <br />
        <br />
      </main>
      <footer
      class="grey-text page-footer black darken-3"
      style="position:relative;bottom:0;left:0;width:100%;"
    >
      <div class="container"></div>
      <div class="footer-copyright black darken-3">
        <div class="container">
          © 2019
        </div>
      </div>
    </footer>
    </div>
    <script
      src="https://code.jquery.com/jquery-3.2.1.js"
      integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
      crossorigin="anonymous"
    ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
    <script src="https://cdn.ckeditor.com/4.7.3/standard/ckeditor.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-backstretch/2.0.4/jquery.backstretch.min.js"></script>
    <script>
      $.backstretch("../client/public/images/game.jpeg");
    </script>
    <script>
      $(document).ready(() => {
        $(".button-collapse").sideNav();
      });
    </script>
  </body>
</html>
