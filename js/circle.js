var drawCircle = function(context, x, y, radius, fillcolor, strokestyle, push) {
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI, true);
  context.fillStyle = fillcolor;
  context.fill();
  context.strokeStyle = strokestyle;
  context.stroke();
  if (push) {
    var circle = new Circle(x, y, radius);
    circles.push(circle);
  }
};

var Circle = function(x, y, radius) {
  this.left = x - radius;
  this.top = y - radius;
  this.right = x + radius;
  this.bottom = y + radius;
};

var CircleCollision = function(circle,x,y){
  return x < circles[i].right && x > circles[i].left && y > circles[i].top && y < circles[i].bottom;
}
