const robot = require("robotjs");

const screenSize = robot.getScreenSize()
robot.setMouseDelay(50)

const PointsAmount = 50
const CoordinateX = []
const CoordinateY = []
const r = 325
const x0 = screenSize.width / 2
const y0 = screenSize.height / 2

let ArrIterator = 0;
for(let i = 0;i<=2*Math.PI; i+=(2*Math.PI)/PointsAmount){
    CoordinateX[ArrIterator] = x0 + r * Math.cos(i)
    CoordinateY[ArrIterator] = y0 + r * Math.sin(i)
    ArrIterator+=1;
}

robot.mouseToggle("down")

for (let i = 0; i < PointsAmount; i++) {
    robot.moveMouse(CoordinateX[i], CoordinateY[i]);
}