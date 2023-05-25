let someVar: number;
console.log(someVar); // TS complains

let nonNullVar!: number;
console.log(nonNullVar); // TS does not complain even if object is undefined. we're overriding TS saying 'we know this is not null'