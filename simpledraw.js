function updateCanvas() {
    var x = document.getElementById("width").value;
    var y = document.getElementById("height").value;
    document.getElementById("widthOut").innerHTML = x;
    document.getElementById("heightOut").innerHTML = y;

    var c = document.getElementById("theCanvas");
    var ctx = c.getContext("2d");
    // clear
    ctx.clearRect(0, 0, c.width, c.height);
    // draw rectangle
    ctx.beginPath();
    ctx.rect(10, 10, x, y);
    ctx.stroke();
}