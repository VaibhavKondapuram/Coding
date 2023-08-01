let fullName = "Vaibhav Kondapuram";
let age = 29;
let employee = true;

console.log("Hello", fullName);
console.log("You are", age, "years old");
console.log("Enrolled:", employee);


document.getElementById("p1").innerHTML = "Hello " + fullName;
document.getElementById("p2").innerHTML = "You are " +  age  + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + employee; 