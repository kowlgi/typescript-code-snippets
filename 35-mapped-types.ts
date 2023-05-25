interface MyFruit {
    name: string;
    color: string;
    readonly sweetness: number;
}

type Properties<T> = keyof T;
type MyFruitProperties = Properties<MyFruit>;

type Values<T> = T[Properties<T>];
type MyFruitValues = Values<MyFruit>;

type ReadOnlyFruit<T> = {    
    readonly [P in Properties<T>]: T[P];
}

let readonlyfruit: ReadOnlyFruit<MyFruit>;
readonlyfruit.sweetness = 1000;