class Fruit {
    constructor(
        public name: string, 
        protected price: number, 
        private variety: string, 
        readonly farm: string) { }

    getVariety(){
        return this.variety;
    }

    public get fruitname(){
        return this.name;
    }
}

class Apple extends Fruit {
    constructor(name, price, variety, farm) {
        super(name, price, variety, farm);
    }

    getVariety(): string {
        return this.getVariety; // type error: private to super class
    }

    getName(){
        return this.name;
    }

    getPrice(){
        return this.price;
    }
}

let apple = new Apple("Fuji", 100, "Gold", "Marantha");
apple.name = "Braeburn";
apple.price = 2000; // type error: protected
apple.farm = "plumbrun"; // type error: readonly
