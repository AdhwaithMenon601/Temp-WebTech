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
        printCpu('test','test','test','test');
        printGpu('test','test','test','test');
        printMoth('test','test','test','test');
        printDisk('test','test','test','test');
        printPower('test','test','test','test');
        printRam('test','test','test','test');
    }
    else {
        qrstring = qrstring.substring(1);
        var tmp = qrstring.split("?");
        var typ;
        //
        var nm;
        var sock;
        var chk = tmp[1];
        var img;
        nm = tmp[1].split('=')[1];
        sock = tmp[2].split(' ')[2];
        typ = tmp[0].split('=')[1];
        img = tmp[3].split('=')[1];
        //
        printCpu(typ,nm,sock,img);
        printGpu(typ,nm,sock,img);
        printDisk(typ,nm,sock,img);
        printMoth(typ,nm,sock,img);
        printPower(typ,nm,sock,img);
        printRam(typ,nm,sock,img);
    }
}
//Functions for printing the cards
function printCpu(typ,nm,sock,img) {
    var new_nm;
    var new_sock;
    if (typ === 'CPU') {
        const domProc = document.getElementById("cpu");
        const domImg = document.getElementById("cpu-im");
        domImg.src = img;
        domProc.children[0].textContent = nm;
        sockCpu = sock;
        sessionStorage.setItem('CPU-N',nm);
        sessionStorage.setItem('CPU-S',sock);
        sessionStorage.setItem('IMG-C',img);

    }
    else {
        const domProc = document.getElementById("cpu");
        const domImg = document.getElementById("cpu-im");
        new_nm = sessionStorage.getItem('CPU-N');
        new_sock = sessionStorage.getItem('IMG-C');
        console.log(new_nm);
        if (new_nm === 'undefined' || new_nm === null) {
            new_nm = "CPU";
            new_sock = "../public/images/cream_dust.png"
        }
        domImg.src = new_sock;
        domProc.children[0].textContent = new_nm;
    }
}
function printGpu(typ,nm,sock,img) {
    var new_nm;
    var new_sock;
    if (typ === 'GPU') {
        const domProc = document.getElementById("gpu");
        const domImg = document.getElementById("gpu-im");
        domImg.src = img;
        domProc.children[0].textContent = nm;
        sockGpu = sock;
        sessionStorage.setItem('GPU-N',nm);
        sessionStorage.setItem('GPU-S',sock);
        sessionStorage.setItem('IMG-G',img);

    }
    else {
        const domProc = document.getElementById("gpu");
        const domImg = document.getElementById("gpu-im");
        new_nm = sessionStorage.getItem('GPU-N');
        new_sock = sessionStorage.getItem('IMG-G');
        console.log(new_nm , new_sock);
        if (new_nm === 'undefined' || new_nm === null) {
            new_nm = "GPU";
            new_sock = "../public/images/cream_dust.png"
        }
        domImg.src = new_sock;
        domProc.children[0].textContent = new_nm;
    }
}

function printMoth(typ,nm,sock,img) {
    var new_nm;
    var new_sock;
    if (typ === 'Moth') {
        const domProc = document.getElementById("moth");
        const domImg = document.getElementById("moth-im");
        domImg.src = img;
        domProc.children[0].textContent = nm;
        sockMoth = sock;
        sessionStorage.setItem('Moth-N',nm);
        sessionStorage.setItem('Moth-S',sock);
        sessionStorage.setItem('IMG-M',img);
    }
    else {
        const domProc = document.getElementById("moth");
        const domImg = document.getElementById("moth-im");
        new_nm = sessionStorage.getItem('Moth-N');
        new_sock = sessionStorage.getItem('IMG-M');
        if (new_nm === 'undefined' || new_nm === null) {
            new_nm = "Motherboard";
            new_sock = "../public/images/cream_dust.png"
        }
        domImg.src = new_sock;
        domProc.children[0].textContent = new_nm;
    }
}
function printDisk(typ,nm,sock,img) {
    var new_nm;
    var new_sock;
    if (typ === 'Disk') {
        const domProc = document.getElementById("disk");
        const domImg = document.getElementById("disk-im");
        domImg.src = img;
        domProc.children[0].textContent = nm;
        sockDisk = sock;
        sessionStorage.setItem('Disk-N',nm);
        sessionStorage.setItem('Disk-S',sock);
        sessionStorage.setItem('IMG-D',img);
    }
    else {
        const domProc = document.getElementById("disk");
        const domImg = document.getElementById("disk-im");
        new_nm = sessionStorage.getItem('Disk-N');
        new_sock = sessionStorage.getItem('IMG-D');
        if (new_nm === 'undefined' || new_nm === null ) {
            new_nm = "Hard Disk";
            new_sock = "../public/images/cream_dust.png"
        }
        domImg.src = new_sock;
        domProc.children[0].textContent = new_nm;
    }
}
function printPower(typ,nm,sock,img) {
    var new_nm;
    var new_sock;
    if (typ === 'Power') {
        const domProc = document.getElementById("power");
        const domImg = document.getElementById("pow-im");
        domImg.src = img;
        domProc.children[0].textContent = nm;
        sockPow = sock;
        sessionStorage.setItem('Power-N',nm);
        sessionStorage.setItem('Power-S',sock);
        sessionStorage.setItem('IMG-P',img);
    }
    else {
        const domProc = document.getElementById("power");
        const domImg = document.getElementById("pow-im");
        new_nm = sessionStorage.getItem('Power-N');
        new_sock = sessionStorage.getItem('IMG-P');
        console.log(new_nm);
        if (new_nm === 'undefined' || new_nm === null) {
            new_nm = "Power";
            new_sock = "../public/images/cream_dust.png"
        }
        domImg.src = new_sock;
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
    if (sock1 === sock3) {
        isComp = true;
    }
    else {
        isComp = false;
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
function printRam(typ,nm,sock,img) {
    var new_nm;
    var new_sock;
    if (typ === 'RAM') {
        const domProc = document.getElementById("ram");
        const domImg = document.getElementById("ram-im");
        domImg.src = img;
        domProc.children[0].textContent = nm;
        sockCpu = sock;
        sessionStorage.setItem('RAM-N',nm);
        sessionStorage.setItem('RAM-S',sock);
        sessionStorage.setItem('IMG-R',img);
    }
    else {
        const domProc = document.getElementById("ram");
        const domImg = document.getElementById("ram-im");
        new_nm = sessionStorage.getItem('RAM-N');
        new_sock = sessionStorage.getItem('IMG-R');
        console.log(new_nm);
        if (new_nm === 'undefined' || new_nm === null) {
            new_nm = "RAM";
            new_sock = "../public/images/cream_dust.png"
        }
        domImg.src = new_sock;
        domProc.children[0].textContent = new_nm;
    }
}
