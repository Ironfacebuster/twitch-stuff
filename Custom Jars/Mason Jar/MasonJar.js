//This image didn't turn out as well as the StreamLabs one, so I'd use it on a bright(er) background

jarEl.src = `https://github.com/Ironfacebuster/twitch-stuff/blob/master/Custom%20Jars/Mason%20Jar/masonJar.png?raw=true`;
cupBase[1] += 1;
boxBody = new p2.Body({ mass: 0, position: [cupBase[0], cupBase[1]] });
boxShape = new p2.Box({ width: 155, height: 15 });
boxShape.material = this.materials.wall;
boxBody.addShape(boxShape);
this.world.addBody(boxBody);
this.world.addBody(this.createRectangleBody([cupBase[0] + 85, cupBase[1] + 105], 210, 15, 90));
this.world.addBody(this.createRectangleBody([cupBase[0] - 85, cupBase[1] + 105], 210, 15, -90));
this.world.addBody(this.createRectangleBody([cupBase[0] + 73, cupBase[1] + 225], 60, 15, -68));
this.world.addBody(this.createRectangleBody([cupBase[0] - 75, cupBase[1] + 225], 60, 15, 68));
this.world.addBody(this.createRectangleBody([cupBase[0] + 65, cupBase[1] + 260], 28, 15, 90));
this.world.addBody(this.createRectangleBody([cupBase[0] - 65, cupBase[1] + 260], 28, 15, 90));

//Jar image from google
