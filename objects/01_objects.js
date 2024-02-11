// singgleton
//object.create()

//object literals

// const mySym = Symbol(cake)

const JsUser = {
    name: "sumit",
    "age": "21",
    // [mySym]:  Symbol(cake), //symbol datatype
    email: "sumit@gmail.com",
    "gender": "male", // name age gender all are strings basically
    isLoggedIn: false,
    whenLoggedIn: ["monday", "saturday"]
}

// console.log(JsUser.age);
// console.log(JsUser['age']);
// console.log(JsUser)

// console.log(JsUser.name);

// Object.freeze(JsUser)


// JsUser.name = "Sumit_verma"

// console.log(JsUser.name);

JsUser.greetings = function(){
    console.log("Hello")
}

JsUser.greetingsTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greetings())
console.log(JsUser.greetingsTwo())



// what i learn here is
// first, use Symbol in js Object
// Second, freeze object
// third, use function in a object
// fifth, two ways to extract js objects