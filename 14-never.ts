function myThrower():never{
    throw new DOMException("hello");
}

var someVar = myThrower();
console.log(someVar);