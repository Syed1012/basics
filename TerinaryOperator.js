
// Example 1
// let result = false; // If it's true it will print the first value.

// let option = result ? "It is true": "It is false";

// console.log(option); // It is true

//Example 2

let marks = document.getElementById("inputmarks");
let result_student;

let Pass = () => {

    result_student = marks.value > 50 ? "Passed" : "Failed";
    document.getElementById("result").innerText = result_student;
    // console.log(result_student);
}

// To fetch the user_marks as input there are 2 methods 1) using window prompt [ Implemented below ]-> simple way 
// 2)Using html txt box. [ Implemented above ]
// For this illustration we are using index.html


// //Example 3

// let user_marks = window.prompt("Enter Marks:");

// let clac = () =>{
//     let res = user_marks > 65 ? "PASS" : "FAIL90";
//     console.log(res);
// }

// clac();