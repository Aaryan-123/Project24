class Paper {
    constructor() {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body=Bodies.circle(100,648.8,30,options);
        this.radius = 20;
        World.add(world, this.body);
    } display() {
        var pos = this.body.position;
        fill("pink");
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius, this.radius);
    }
}