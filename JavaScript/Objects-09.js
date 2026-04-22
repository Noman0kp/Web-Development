// READ ABOUT OBJECTS FROM NOTES.

let student = {
    name : "Khan",
    age : 21,
    percent : 91.20,
    isMarried : false
};

// TO PRINT THE VALUES, EITEHR WE CAN PRINT THE ENTIRE OBJECT OR WE CAN ACCESS EACH VALUE USING A DOT(.)
console.log(student);

console.log(student.name);
console.log(student.isMarried);

student.age = 25; // THAT'S HOW WE CAN UPDATE VALUES INSIDE OUR OBJECT.
console.log(student.age);

// IF WE HAVE AN OBJECT AND WE WANT TO SEE EVERY KEY AND VALUE INSIDE IT, WE USE THE (FOR..IN) LOOP.

console.log("PRINTING OBJECT'S CONTENT USING A FOR...IN LOOP: ")

for (const key in student) {
    
    console.log(key, student[key]);    
    
}