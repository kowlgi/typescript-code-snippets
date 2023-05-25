function assertTrue(condition: boolean): asserts condition {
    if(!condition) throw new Error();
}

interface Fruit {
    name: string;
    sweetness: number;
}

let somefruit = ""
assertTrue(typeof somefruit === 'number'); // throws an error

function assertIsFruit(maybeFruit: any): asserts maybeFruit is Fruit{
    if(!("sweetness" in maybeFruit)) throw new Error();
}