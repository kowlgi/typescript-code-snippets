let messageInput = document.getElementById('messageHTML');
messageInput.innerText = "Hello, world";  //type error as it could be NULL

if(messageInput) messageInput.innerText = "hello world"; // type guard needed

let textInput = messageInput?.innerText; // optional chaining operator

let textInput2 = messageInput?.innerText || "Sunil"; // default value, if value is falsey or null or undefined

// if falsey values "0" or "" are expected, use the null-coalescing operator
let textInput3 = messageInput?.innerText ?? 'Sunil'; 

let textInput4 = messageInput!.innerText; // non-null assertion operator if you know for sure this can't be null

function indexArray(input: []) {
    
}