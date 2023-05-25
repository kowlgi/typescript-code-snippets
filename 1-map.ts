function myCallback(name, index) {
    if(index % 2 === 0) {
        return name.toUpperCase();
    }
    return name;
}

let fruitNames = ["apple", "orange"];

const alternatedFruitNames = fruitNames.map(myCallback);

const typeCheckedAlternatedFruitNames = fruitNames.map((name, index) => {
    if(index % 2 === 0) return name.toUpperCase();
    return name;
})