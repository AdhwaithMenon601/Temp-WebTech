window.addEventListener('load',printCpu);
//Using global variables for now
var sockAr = [];
//
function printCpu() {
    const proc = localStorage.getItem('CPU');
    const domProc = document.getElementById("cpu");
    var qrstring = decodeURIComponent(window.location.search);
    qrstring = qrstring.substring(1);
    var tmp = qrstring.split("?");
    var nm;
    var sock;
    var typ;
    nm = tmp[1].split('=')[1];
    sock = tmp[2].split(' ')[2];
    typ = tmp[0].split('=')[1];
    //
    if (typ === 'CPU') {
        domProc.children[0].textContent = nm;
        sockAr.push(sock);
    }
}