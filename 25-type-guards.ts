function typeFunc(name: unknown) {
    if(typeof name === "string") {
        return name.length;
    }
}

class Fruity {
    constructor(public name: string) {}
}

let fruit = new Fruity("Apple");

function typeFunc10(fruit: object | Fruity) {
    if("name" in fruit) {
        console.log(fruit.name);
    }
}

function typeFunc2(input: unknown) {
    if(input instanceof Fruity) {
        console.log(input.name);
    }
}

function typeFunc3(input: unknown) {
    if(Array.isArray(input)) {
        return input.length;
    }
}

function typeFunc4(input: unknown): number[] {
    if(Array.isArray(input)){
        let result = input.map((item) => {
            if(typeof item === "number") return item + 1;
            else return 0;
        });
        return result; // return number[]
    } else return [];
}

function typeFunc5(input: unknown): number[] {
    if(Array.isArray(input)) {
        let result = input.filter((item) => {
            if(typeof item === "number") return true; 
            else return false;
        });
        return result; // returns any[]
    } else return [];
}