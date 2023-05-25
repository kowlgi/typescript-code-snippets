class Fruit {
    constructor(public name: string) { }
}

class Apple extends Fruit {
    type: "Apple" = "Apple"
    constructor() {
        super("Apple");
    }
}

class Banana extends Fruit {
    type: "Banana" = "Banana"
    constructor() {
        super("Banana");
    }
}

class FruitBasket<T extends Fruit = Apple>{
    items: T[] = []
    constructor() { }
    add(item: T) {
        this.items.push(item);
    }
}

let apple: Apple = new Apple();
let appleBasket = new FruitBasket<Apple>();
let bananaBasket = new FruitBasket<Banana>();
bananaBasket.add(apple); /// TS error


