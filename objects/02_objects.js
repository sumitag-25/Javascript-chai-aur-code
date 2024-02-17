// singletone
// constructor objects

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sumit"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "sum@gmail.com",
    fullname: {
        userFullName: {
            fistName: "Sumit",
            LastName: "verma"
        }
    }
}

// console.log(regularUser.fullname.userFullName.fistName)
// console.log(regularUser.fullname.userFullName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign({}, obj1, obj2) //assign method to combine object

// console.log(obj3)

const obj4 = {...obj1, ...obj2} //spread method just like in array

// console.log(obj4);

const user = [
    {
        id: "123qwe",
        name: "sumit"
    },
    {
        id: "123qwe",
        name: "sumit"
    },
    {
        id: "123qwe",
        name: "sumit"
    },
    {
        id: "123qwe",
        name: "sumit"
    }
] // when multiple data comes from database in the form of array

console.log(user[1].id)


console.log(tinderUser)

const tinderUserKeys = Object.keys(tinderUser) //find any keys from the object
const tinderUserValues = Object.values(tinderUser) //find any value from the object

console.log(tinderUserKeys)
console.log(tinderUserValues)
console.log(tinderUser.hasOwnProperty('isLoggedIn')) //find any data from the object