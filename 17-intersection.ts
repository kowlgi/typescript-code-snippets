type AnotherFruit = {
    name: string;
    sweetness: string;
}

type Edible = {
    name: string;
    sweetness: number;
}

type SweetThing = {
    name: string;
    sweetness: string;
    price: number;
}

var fruit:AnotherFruit  & SweetThing = {
    name: 'apple',
    sweetness: "high",
    price: 500
}

var starFruit: AnotherFruit & Edible = {
    name: "star",
    sweetness: 50 // type error: never due to type mismatch
};