window.addEventListener('load',printValue);
//Using global variables for now
var sockAr = [];
//
function printValue() {
    var qrstring = decodeURIComponent(window.location.search);
    if (qrstring === '') {
        printCpu('test','test','test');
        printGpu('test','test','test');
        printMoth('test','test','test');
        printDisk('test','test','test');
        printPower('test','test','test');
    }
    else {
        qrstring = qrstring.substring(1);
        var tmp = qrstring.split("?");
        var typ;
        //
        var nm;
        var sock;
        var chk = tmp[1];
        nm = tmp[1].split('=')[1];
        sock = tmp[2].split(' ')[2];
        typ = tmp[0].split('=')[1];
        //
        printCpu(typ,nm,sock);
        printGpu(typ,nm,sock);
        printDisk(typ,nm,sock);
        printMoth(typ,nm,sock);
        printPower(typ,nm,sock);
    }
}
//Functions for printing the cards
function printCpu(typ,nm,sock) {
    var new_nm;
    var new_sock;
    if (typ === 'CPU') {
        const domProc = document.getElementById("cpu");
        domProc.children[0].textContent = nm;
        sockAr.push(sock);
        sessionStorage.setItem('CPU-N',nm);
        sessionStorage.setItem('CPU-S',sock);
    }
    else {
        const domProc = document.getElementById("cpu");
        new_nm = sessionStorage.getItem('CPU-N');
        new_sock = sessionStorage.getItem('CPU-S');
        console.log(new_nm);
        if (new_nm === 'undefined' || new_nm === null) {
            new_nm = "CPU";
        }
        domProc.children[0].textContent = new_nm;
    }
}
function printGpu(typ,nm,sock) {
    var new_nm;
    var new_sock;
    if (typ === 'GPU') {
        const domProc = document.getElementById("gpu");
        domProc.children[0].textContent = nm;
        sockAr.push(sock);
        sessionStorage.setItem('GPU-N',nm);
        sessionStorage.setItem('GPU-S',sock);
    }
    else {
        const domProc = document.getElementById("gpu");
        new_nm = sessionStorage.getItem('GPU-N');
        new_sock = sessionStorage.getItem('GPU-S');
        if (new_nm === 'undefined' || new_nm === null) {
            new_nm = "GPU";
        }
        domProc.children[0].textContent = new_nm;
    }
}

function printMoth(typ,nm,sock) {
    var new_nm;
    var new_sock;
    if (typ === 'Moth') {
        const domProc = document.getElementById("moth");
        domProc.children[0].textContent = nm;
        sockAr.push(sock);
        sessionStorage.setItem('Moth-N',nm);
        sessionStorage.setItem('Moth-S',sock);
    }
    else {
        const domProc = document.getElementById("moth");
        new_nm = sessionStorage.getItem('Moth-N');
        new_sock = sessionStorage.getItem('Moth-S');
        if (new_nm === 'undefined' || new_nm === null) {
            new_nm = "Motherboard";
        }
        domProc.children[0].textContent = new_nm;
    }
}
function printDisk(typ,nm,sock) {
    var new_nm;
    var new_sock;
    if (typ === 'Disk') {
        const domProc = document.getElementById("disk");
        domProc.children[0].textContent = nm;
        sockAr.push(sock);
        sessionStorage.setItem('Disk-N',nm);
        sessionStorage.setItem('Disk-S',sock);
    }
    else {
        const domProc = document.getElementById("disk");
        new_nm = sessionStorage.getItem('Disk-N');
        new_sock = sessionStorage.getItem('Disk-S');
        if (new_nm === 'undefined' || new_nm === null ) {
            new_nm = "Hard Disk";
        }
        domProc.children[0].textContent = new_nm;
    }
}
function printPower(typ,nm,sock) {
    var new_nm;
    var new_sock;
    if (typ === 'Power') {
        const domProc = document.getElementById("power");
        domProc.children[0].textContent = nm;
        sockAr.push(sock);
        sessionStorage.setItem('Power-N',nm);
        sessionStorage.setItem('Power-S',sock);
    }
    else {
        const domProc = document.getElementById("power");
        new_nm = sessionStorage.getItem('Power-N');
        new_sock = sessionStorage.getItem('Power-S');
        console.log(new_nm);
        if (new_nm === 'undefined' || new_nm === null) {
            new_nm = "Power";
        }
        domProc.children[0].textContent = new_nm;
    }
}
