type vowels = "a" | "e" | "i" | "o" | "u";
type name = "s" | "u" | "n" | "i" | "l";

type extract<T, U> = T extends U ? T : never;
let x:extract<vowels, name>;

// excludes types in T that are in U
type excludeType<T,U> = T extends U ? never : T;

// extracts types in T that are in U
type extractType<T, U> = T extends U ? T : never;

// get a function's return argument type
function justAFunc(arg1: vowels, arg2: boolean): name { return "s";}
type getReturnArgumentType<T extends (...args:any) => any> = T extends (args:any) => infer R ? R : never;
type returnType = getReturnArgumentType<typeof justAFunc>;

// get function's first argument's type
type getFirstArgumentType<T extends (...args: any) => any> = T extends (arg1: infer P, ...args:any) => any ? P : never;
type firstArgumentType = getFirstArgumentType<typeof justAFunc>;

// get function's second argument's type
type getSecondArgumentType<T extends (...args:any) => any> = T extends (arg1: any, arg2: infer P, ...args: any) => any ? P : never;
type secondArgumentType = getSecondArgumentType<typeof justAFunc>;

// unwrap the type of an array
let listOfNames: string[];
type getArrayType<T> = T extends (infer R)[] ? R : T;
type arrayType = getArrayType<typeof listOfNames>;

// unwrap the type of a Promise
let networkRequestPromise = new Promise<symbol>( (resolve, reject) => {});
type unwrapPromiseType<T> = T extends Promise<infer R> ? R : never;
type promiseType = unwrapPromiseType<typeof networkRequestPromise>;