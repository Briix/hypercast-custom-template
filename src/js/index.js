function makeDraggable(el) {
  var winX = 0, winY = 0, clientX = 0, clientY = 0

  document.getElementById(el.id + "-draggable").onmousedown = dragMouseDown

  function dragMouseDown(e) {
    e = e || window.event
    e.preventDefault()

    clientX = e.clientX;
    clientY = e.clientY;
    document.onmouseup = closeDragElement;

    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    winX = clientX - e.clientX;
    winY = clientY - e.clientY;
    clientX = e.clientX;
    clientY = e.clientY;

    el.style.top = (el.offsetTop - winY) + "px";
    el.style.left = (el.offsetLeft - winX) + "px";
    el.style.bottom = "unset"
    el.style.right = "unset"
  }

  function closeDragElement() {

    document.onmouseup = null;
    document.onmousemove = null;
  }
}

makeDraggable(document.getElementById("video-container"));
makeDraggable(document.getElementById("socials"));

