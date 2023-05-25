type Fruit = {
    name: string;
    sweetness: number;
}

type Vegetable = {
    name: string;
    tartness: number;
}

function test(thing: Fruit | Vegetable) {
    thing.name = "tomato";
    thing.sweetness = 100; // type error
    if('sweetness' in thing) thing.sweetness = 5000; // no type error after type narrowing
}