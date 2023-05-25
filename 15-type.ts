type Clinic = {
    in: string,
    out: string,
    count: number
}

type Company = [Clinic, Clinic];

var uselessVar = {
    in: "todo",
    out: "asdsad",
    count: 100
}

var anotherVar:Company = [uselessVar, uselessVar];

var partialVar = {
    in: "crp",
    out: "crt",
    count: 10000,
    bizarre: false
}

anotherVar = partialVar; // type error: shape needs to be exact