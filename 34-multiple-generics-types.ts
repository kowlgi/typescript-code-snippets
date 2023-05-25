function getProperty<T, K extends keyof T>(object: T, key: K){
    return object[key];
}

let color = getProperty({color: "blue", tint: "gray"}, "color"); // TS automatically figures out return type of function

let name = getProperty({color: "blue", tint: "gray"}, "name"); // TS Error