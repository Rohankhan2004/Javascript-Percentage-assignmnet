var TotalNum = 400;
var Username = prompt("Enter Your Name");
var RollNum = +prompt("Enter Your Roll No");

var ChemMarks = +prompt("Enter Your Marks");
var MatMarks = +prompt("Enter Your Marks");
var PhyMarks = +prompt("Enter Your Marks");
var SinMarks = +prompt("Enter Your Marks");
var obtainedMarks = ChemMarks + MatMarks + PhyMarks + SinMarks; 
var percentage = obtainedMarks / TotalNum * 100;
// console.log = (obtainedMarks);
console.log ("My Name is " + Username+ "My Roll num is" + RollNum + "My percentage is " + percentage + "%");