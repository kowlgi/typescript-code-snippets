interface Fruit {
    nutrients: string;
    name: string;
    price: number;
 }
 
 let tomato = {nutrients: "vitamins", name: "tomato", price: 100, sweetness: "tart"};
 let fruit:  Fruit;
 fruit = tomato; // no error
 
 let anotherFruit: Fruit;
 anotherFruit = {nutrients: "vitamins", name: "tomato", price: 100, sweetness: "tart"}; 
 // type error: more properties in object literal than on the interface