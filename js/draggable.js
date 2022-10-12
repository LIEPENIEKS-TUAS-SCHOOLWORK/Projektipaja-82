function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var dockId = ev.target.getAttribute('for');
    var dock = document.getElementById(dockId);
    if (dock.firstChild == null) {
        dock.appendChild(document.getElementById(data));
    }
}

function dropBack(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    document.getElementById('m-dock').appendChild((document.getElementById(data)));
}
