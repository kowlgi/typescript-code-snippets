abstract class Fan {
    brand: string;
    isItOn: boolean = false;
    abstract toggle(): void;
    constructor(brand: string) {
        this.brand = brand;
    }
}

class TableFan extends Fan{
    price: number;
    constructor(brand: string, price: number) {
        super(brand);
        this.price = price;
    }
    toggle(): void {
        this.isItOn = this.isItOn === true ? false : true;
    }
}

let tablefan = new TableFan("usha", 1000);