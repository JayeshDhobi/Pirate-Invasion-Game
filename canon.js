class Canon {
    constructor(x, y, width, height, angle) {
      var options = {
        isStatic: true
      };
      this.image = loadImage("assets/canon.png");
      this.width = width;
      this.height = height;
      this.angle = angle;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  