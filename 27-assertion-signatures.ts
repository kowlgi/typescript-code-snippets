let canvasElement = document.getElementById('canvas');
canvasElement.getContext(); // type error 

let canvasElement2 = document.getElementById('canvas') as HTMLCanvasElement;
canvasElement2.getContext("2d"); // assertion signature above makes it work

class Fruit {

}

class Car {

}

let car = new Car();
let myFruit = (car as unknown) as Fruit; // the double-assertion overrides type checker
