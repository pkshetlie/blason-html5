var drawCircle = function(context, x, y, radius, fillcolor, strokestyle, push) {
  
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI, true);
  context.fillStyle = fillcolor;
  context.fill();
  context.strokeStyle = strokestyle;
  context.stroke();

  if (push) {
    var circle = new Circle(x, y, radius+context.lineWidth);
    circles.push(circle);
  }

};

var Circle = function(x, y, radius) {

  this.x = parseInt(x);
  this.y = parseInt(y);
  this.radius = parseInt(radius);

  this.left = x - radius;
  this.top = y - radius;
  this.right = x + radius;
  this.bottom = y + radius;

};

var CircleCollision = function(circle1,circle2){

  var dx = circle1.x - circle2.x;
  var dy = circle1.y - circle2.y;
  var distance = Math.sqrt(dx * dx + dy * dy);

  return distance < circle1.radius + circle2.radius;

}
