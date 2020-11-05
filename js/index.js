const rects = document.getElementsByClassName("rect");
for (let i = 0; i < rects.length; i++) {
  rects[i].onclick = function(e) {
    e.stopPropagation();
    const divName = rects[i].firstElementChild.innerHTML
    alert(divName);
  }
}