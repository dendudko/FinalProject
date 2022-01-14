function setFocus()
{
    document.getElementById("in").focus();
}

function lastMessageScroll(b) {
    let e = document.querySelector('.wrapper_ScrollBottom');
    if (!e) return;

    e.scrollIntoView({
        behavior: b || 'auto',
        block: 'end',
    });
}

function sendMessage(){
    let date = new Date()
    let pole = document.getElementById('in')
    let text = document.createTextNode(pole.value)
    let mb = document.getElementById('messagebox')
    if (text.data.length>0) {
        text.data = text.data + "&nbsp&nbsp&nbsp&nbsp&nbsp" + date.toLocaleTimeString().slice(0, 5).bold()
        mb.innerHTML += text.data + "<br>"
        count++
        localStorage.setItem('count', count)
        localStorage.setItem(count, text.data)
    }
    pole.value = ""
    lastMessageScroll()
}

addEventListener('keydown', function(key) {
    if (key.keyCode === 13)
        sendMessage()
})

if (localStorage.length>0) {
    count = localStorage.getItem('count')
}
else {
    count = 0
}

document.addEventListener("DOMContentLoaded", function(){
    restoreFromLocalStorage();
})

function restoreFromLocalStorage(){
    if (localStorage.length>0) {
        for (let i = 1; i <= localStorage.getItem('count'); i++) {
            document.getElementById('messagebox').innerHTML += localStorage.getItem(i.toString()) + "<br>"
        }
        lastMessageScroll()
    }
}

function clearHistory(){
    document.getElementById('messagebox').innerHTML=""
    localStorage.clear()
    count = 0
}

function deleteLastMessage(){
    document.getElementById('messagebox').innerHTML=""
    localStorage.removeItem(count)
    if (count!=0){count--}
    localStorage.setItem('count', count)
    if (count==0){
        localStorage.removeItem('count')
    }
    restoreFromLocalStorage()
}



