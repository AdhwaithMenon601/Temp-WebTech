document.addEventListener('click',addItem);

//Given function stores the value of name and socket type
function addItem(event) {
    const obj = event.target;
    if (obj.tagName == 'I') {
        const img = obj.parentElement.parentElement.children[0];
        const card = obj.parentElement.parentElement.parentElement.children[1];
        const nm = card.children[0].textContent;
        const sock = card.children[1].textContent;
        const proc = {
            Name : nm,
            Socket : sock
        };
        console.log(proc);
        var qrstring = "?type=CPU" + "?name=" + nm + "?sock=" + sock;
        localStorage.setItem('CPU',proc);
        window.location.href = "mypc.html" + qrstring;
    }
}
