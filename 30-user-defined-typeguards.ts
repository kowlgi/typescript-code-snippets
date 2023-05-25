interface Fruit {
    color: string;
    name: string;
    sweetness: number;
}

interface Vegetable {
    color: string;
    name: string;
    tenderness: number;
}

function isFruit(
    maybeFruit: any
): maybeFruit is Fruit {
    if("sweetness" in maybeFruit) return true;
    else return false;
}
// maybeFruit is Fruit is a type predicate

let fruit:Fruit = {
    color: "Red",
    name: "Fuji",
    sweetness: 100
};

console.log(isFruit(fruit));