// LET US CREATE A SIMPLE FUNCTION THAT PRINTS NUMBERS 1 TO n : 

function fxn(n) {
    for(let i = 1; i<=n; i++) {
        console.log(i);
    }
    console.log(); // THIS WILL PRINT A SPACE. SO THAT IF WE CALL THE FUNCTION REPEATEDLY FOR DIFFERENT VALUES, THERE IS A SPACE BETWEEN THE TWO CALLS.
}

fxn(10); //print 1 to 10.
fxn(7); //prints 1 to 7.

// HERE ALSO WE HAVE RETURN VALUE. EX: 

function eqn(a,b) {
    return (a*a + b*b);
}

console.log(eqn(3,4)); // THAT'S HOW WE DO IT.  