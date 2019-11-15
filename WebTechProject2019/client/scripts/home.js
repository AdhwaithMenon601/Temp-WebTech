window.addEventListener('load',check);
document.addEventListener('click',change);

var temp = document.getElementById("login");
temp.addEventListener('click',logout);

function change(event) {
    var myobj = event.target;
    if (myobj.textContent == "add") {
        myobj.textContent = "edit";
        sessionStorage.setItem('PC_check',true);
    }
}
function check() {
    var qrstring = decodeURIComponent(window.location.search);
    var nm;
    var tmp;
    var log = document.getElementById("login");
    if (qrstring !== '') {
        qrstring = qrstring.substring(1);
        tmp = qrstring.split("?");
        console.log(tmp[0]);
        nm = tmp[0].split('=')[0];
        console.log(nm);
        if (nm === "user") {
            log.textContent = "Logout";
            log.href = "home.html"+"?nuser=1";
            sessionStorage.setItem('isUser',true);
        }
    }
    var chk = sessionStorage.getItem('PC_check');
    var us = sessionStorage.getItem('isUser');
    console.log(chk);
    if (chk && us) {
        var ob = document.getElementById('bt');
        ob.textContent = "edit";
        var pg = document.getElementById('txt');
        pg.textContent = "PC";
    }
}
function logout() {
    sessionStorage.setItem('isUser',false);
    sessionStorage.setItem('PC_check',false);
    temp.textContent = "Login With";
    var ob = document.getElementById('bt');
    ob.textContent = "add";
    var pg = document.getElementById('txt');
    pg.textContent = "New PC";
}