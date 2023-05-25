function addThings<T>(x: T, y: T): T {
    return x + y; // TS won't allow this, as not all types can be added
    }
    
addThings(4, 5);
addThings("hello", "world");

function getFirstItem<ItemType>(list: ItemType[]): ItemType {
    return list[0];
}

let newList = [1,2,3];
getFirstItem(newList); // TS infers ItemType based on the type of newList

type Tree<T>{
    value: T;
    left?: Tree<T>;
    right?: Tree<T>
}

let stringTree:Tree<string>;
let numberTree:Tree<number>;