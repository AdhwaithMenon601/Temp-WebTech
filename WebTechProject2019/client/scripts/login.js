var but = document.getElementById("login");
but.addEventListener("click",login);

function login() {
    var qstring = "?user=1";
    window.location.href = "home.html" + qstring;
}