let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);

// let createNewDate = new Date(2023, 1, 4)
// console.log(createNewDate.toLocaleString());

let myNewDate = new Date("02-12-2024")
// console.log(myNewDate.toLocaleString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myNewDate.getTime());

// console.log(Math.floor(Date.now()/1000))

let newDate = new Date();
console.log(newDate.getDate())
console.log(newDate.toLocaleString('default',{
    weekday: "narrow"
}))