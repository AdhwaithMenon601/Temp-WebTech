window.addEventListener('load',check);
document.addEventListener('click',change);

function change(event) {
    var myobj = event.target;
    if (myobj.textContent == "add") {
        myobj.textContent = "edit";
        localStorage.setItem('PC_check',true);
    }
}
function check() {
    var chk = localStorage.getItem('PC_check');
    console.log(chk);
    if (chk) {
        var ob = document.getElementById('bt');
        ob.textContent = "edit";
        var pg = document.getElementById('txt');
        pg.textContent = "PC";
    }
}