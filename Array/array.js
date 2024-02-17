const myArray = [1, 2, 3, 4, 5]
// console.log(myArray)

const newArray = new Array(1, 2, 3, 4, 5)

// newArray.push(2)
// newArray.pop()

// newArray.unshift(4)
// newArray.shift()

// console.log(newArray);

const newArr2 = newArray.slice(0, 4) //The slice() method returns the selected element(s) in an array, as a new array object

// console.log(newArr2);

const newArr3 = newArray.splice(0, 4) //The splice() method returns the removed items in an array
// console.log(newArr3);
// console.log(newArray);