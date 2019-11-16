document.addEventListener('click',addItem);

//Given function stores the value of name and socket type
function addItem(event) {
    const obj = event.target;
    if (obj.tagName == 'I') {
        var sock;
        const img = obj.parentElement.parentElement.children[0];
        const card = obj.parentElement.parentElement.parentElement.children[1];
        const my_im = obj.parentElement.parentElement.parentElement.children[0];
        const sent_im = my_im.children[0].src;
        console.log(sent_im);
        const nm = card.children[0].textContent;
        const proc = {
            Name : nm,
            Socket : sock
        };
        console.log(proc);
        var qrstring = "?type=GPU" + "?name=" + nm + "?sock=" + 0 + "?img=" + sent_im;
        window.location.href = "mypc.html" + qrstring;
    }
}