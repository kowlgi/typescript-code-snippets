function stringOrArrayLength(input: Array<unknown>)
function stringOrArrayLength(input: string)
function stringOrArrayLength(input: {length: number}) {
    return input.length;
}

// In the function signature, the last signature is just implementation 
// detail common to all signatures

stringOrArrayLength([1,2,3]);
stringOrArrayLength("helo");
stringOrArrayLength({length: 100}); // Type error