type myTuple = [string, (string) => string];

let tupps:myTuple = ["sunil", (x) => x.toUpperCase()];
console.log(tupps[0].toLowerCase());