class Fruitness {
    constructor(public name: string) {}
}

class Banana extends Fruitness {
    constructor(){
        super("Banana");
    }
}

class Apple extends Fruitness {
    constructor(){
        super("Apple");
    }
}

let banana: Apple = new Banana(); 
// this works although lhs and rhs are different types, 
// because JS is structurally typed. 
// the structure or shape of the object matters rather than
// its name. Because Apple and Banana have the same shape, 
// TS does not complain. To have truly unique classes that
// you cannot mix in assignments, add a branded property. This
// is called duck typing

class UniqueBanana extends Fruitness {
    type: "Banana";
    constructor(){
        super("Banana");
    }
}

class UniqueApple extends Fruitness {
    type: "Apple";
    constructor(){
        super("Apple");
    }
}

// Adding branded type to each class ensures uniqueness
let uniqueApple: UniqueApple = new UniqueBanana(); 

// branded primitives
type USD = number & {_brand: "USD"};
type EUR = number & {_brand: "EUR"};

function convertToUSD(input: EUR): USD {
    return (input * 1.18) as USD;
}

let money = 100 as EUR; // assertion necessary to assign as branded primitive type
let result = convertToUSD(money);
console.log(result);