//If using StreamLabs, enable Custom HTML/CSS
//Don't include lines with double slashes, they don't do anything

//This is just a giant jar, for people who get TONS of bits.
//The bits still glitch out though, but the idea of having a larger jar is cool, right?

jarEl.src = `https://github.com/Ironfacebuster/twitch-stuff/blob/master/Custom%20Jars/SimianFlips%20Jar/glass-pint%20(1).png?raw=true`;
cupBase[1] += 35;
boxBody = new p2.Body({ mass: 0, position: [cupBase[0], cupBase[1]] });
boxShape = new p2.Box({ width: 220, height: 30 });
boxShape.material = this.materials.wall;
boxBody.addShape(boxShape);
this.world.addBody(boxBody);
this.world.addBody(this.createRectangleBody([cupBase[0] + 110, cupBase[1] + 266], 600, 30, 85));
this.world.addBody(this.createRectangleBody([cupBase[0] - 110, cupBase[1] + 266], 600, 30, -85));
