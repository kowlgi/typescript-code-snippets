interface deepObject {
    input: string;
    output: boolean;
}

type deepType = deepObject["input"];

let newObj = {
    time: "today",
    cost: 10000,
    maker: "Raj"
};

type newObjType = typeof newObj;

let time: keyof typeof newObj; // get union of property names in object

type makerType = typeof newObj["maker"]; // type indexed access

type SomeArrayType = [number, string, (x:number, y:number)=>number];
let someArray:SomeArrayType = [400, "name", (x,y)=>x+y];
type funcType = SomeArrayType[2]; // indexed array type

let someVar = {x: "100", y: "100"} as const; // const creates a literal type
type anotherVar = typeof someVar; 