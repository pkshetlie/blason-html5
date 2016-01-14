var c = document.getElementById("blason");
var ctx = c.getContext("2d");

var circles = [];
var point = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function redraw(x) {

  var y = x;
  var rayon = x / 10;
  var ecart = rayon - 1;
  ctx.lineWidth = 1;

  drawCircle(ctx, x, y, rayon + ecart * 9, "white", "black", true);
  drawCircle(ctx, x, y, rayon + ecart * 8, "white", "black", true);
  drawCircle(ctx, x, y, rayon + ecart * 7, "black", "white", true);
  drawCircle(ctx, x, y, rayon + ecart * 6, "black", "white", true);
  drawCircle(ctx, x, y, rayon + ecart * 5, "#01a7db", "black", true);
  drawCircle(ctx, x, y, rayon + ecart * 4, "#01a7db", "black", true);
  drawCircle(ctx, x, y, rayon + ecart * 3, "#de4034", "black", true);
  drawCircle(ctx, x, y, rayon + ecart * 2, "#de4034", "black", true);
  drawCircle(ctx, x, y, rayon + ecart, "#ffed45", "black", true);
  drawCircle(ctx, x, y, rayon, "#ffed45", "black", true);
  drawCircle(ctx, x, y, rayon - (1 / 2 * ecart), "#ffed45", "black", false);

  //cross
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(x, y - 2.5);
  ctx.lineTo(x, y + 2.5);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x - 2.5, y);
  ctx.lineTo(x + 2.5, y);
  ctx.stroke();
}

$(document).on("click", "#blason", function(evt, ui) {
  var x = evt.offsetX;
  var y = evt.offsetY;
  ctx.beginPath();
  ctx.lineWidth = 0.5;
  ctx.fillStyle = "white";
  ctx.strokeStyle = "black";
  ctx.arc(x, y, 3, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.stroke();
  done = false;
  for (var i = circles.length - 1; i >= 0; i--) {
    if (CircleCollision(circle,x,y)) {
      addPoints(point[i]);
      done = true;
      break;
    }
  }
  if (!done) {
    addPoints(0);
  }
})
