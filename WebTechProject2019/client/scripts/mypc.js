window.addEventListener('load',printValue);
//Using global variables for now
let sockCpu = 0;
let sockGpu = 0;
let sockMoth = 0;
let sockDisk = 0;
let sockPow = 0;


//
function printValue() {
    const t = document.getElementById("ale");
    t.style.display = "none";
    var qrstring = decodeURIComponent(window.location.search);
    if (qrstring === '') {
        printCpu('test','test','test');
        printGpu('test','test','test');
        printMoth('test','test','test');
        printDisk('test','test','test');
        printPower('test','test','test');
        printRam('test','test','test');
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
        printRam(typ,nm,sock);
    }
}
//Functions for printing the cards
function printCpu(typ,nm,sock) {
    var new_nm;
    var new_sock;
    if (typ === 'CPU') {
        const domProc = document.getElementById("cpu");
        domProc.children[0].textContent = nm;
        sockCpu = sock;
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
        sockGpu = sock;
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
        sockMoth = sock;
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
        sockDisk = sock;
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
        sockPow = sock;
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

function checkComp() {
    let sock1 = sessionStorage.getItem('CPU-S');
    let sock2 = sessionStorage.getItem('GPU-S');
    let sock3 = sessionStorage.getItem('Moth-S');
    let sock4 = sessionStorage.getItem('Disk-S');
    let sock5 = sessionStorage.getItem('Power-S');
    let sock6 = sessionStorage.getItem('RAM-S');
    const t = document.getElementById("ale");
    const aler = t.children[1];
    var isComp = true;
    const al = document.getElementById("al");
    var ar = [sock1,sock2,sock3,sock4,sock5,sock6];
    var temp = ar[0];
    for (var i = 0; i < 6; i++) {
        console.log(ar[i]);
        if (temp !== ar[i]) {
            isComp = false;
            break;
        }
    }
    if(isComp) {
        t.style.backgroundColor = "#66CD00";
        t.style.display = "block";
        aler.textContent = "Congrats!! It is compatable!!";
    }
    else {
        t.style.display = "block";
        t.style.backgroundColor = "#f44336";
        aler.textContent = "Oops!! It is incompatable!!";
    }
}
function printRam(typ,nm,sock) {
    var new_nm;
    var new_sock;
    if (typ === 'RAM') {
        const domProc = document.getElementById("ram");
        domProc.children[0].textContent = nm;
        sockCpu = sock;
        sessionStorage.setItem('RAM-N',nm);
        sessionStorage.setItem('RAM-S',sock);
    }
    else {
        const domProc = document.getElementById("ram");
        new_nm = sessionStorage.getItem('RAM-N');
        new_sock = sessionStorage.getItem('RAM-S');
        console.log(new_nm);
        if (new_nm === 'undefined' || new_nm === null) {
            new_nm = "RAM";
        }
        domProc.children[0].textContent = new_nm;
    }
}
