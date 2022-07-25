let employee={
    name:"Souvik",
    tech:"Js",
    'work exp':4  //work exp has a gap in between.So this needs to be in quotes
}

console.log(employee.name);
console.log(employee['work exp']);
let input="name";
console.log(employee[input])  // here we cannot use employee.input
console.log(employee.input)  // comes as undefined

//Complex objects -having an object inside object
