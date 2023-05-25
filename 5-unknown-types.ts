let myName: unknown = "Sunil";

// Type error: as myName is unknown type, not a string type
myName.toUpperCase();

if(typeof myName === 'string') {
    // type narrowing lets you use myName as a string
    myName.toUpperCase();
}