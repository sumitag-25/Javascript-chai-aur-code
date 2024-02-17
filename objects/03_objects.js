// JSON Intro

// Destructure

const course = {
    courseName: 'JS for biggners',
    amount: 999,
    courseInstructor: 'Hitesh Chodhary'
}

// console.log(course.courseInstructor) //General way

// const {courseInstructor} = course;  //Destructured way

// console.log(courseInstructor);

const {courseInstructor: instructor} = course; //change name

console.log(instructor);


// We got info in object or array formate when we call api from json 

// {
//     "name": "hitesh",
//     "courseName": "js in hindi",
//     "price": "free",
// }

// [
//     {
//         "name": "hitesh",
//         "courseName": "js in hindi",
//         "price": "free", 
//     },
//     {
//         "name": "hitesh",
//         "courseName": "js in hindi",
//         "price": "free", 
//     },
//     {
//         "name": "hitesh",
//         "courseName": "js in hindi",
//         "price": "free", 
//     },
//     {
//         "name": "hitesh",
//         "courseName": "js in hindi",
//         "price": "free", 
//     },
//     {
//         "name": "hitesh",
//         "courseName": "js in hindi",
//         "price": "free", 
//     }
// ]