/*
//While loop
let kleuren = ['yellow', 'blue', 'red', 'orange'];
i = 0;
while (i < kleuren.length ) {
    console.log (kleuren[i]);
    i++
}
*/

/* 
//For loop
let kleuren = ['yellow', 'blue', 'red', 'orange'];
for (i = 0; i < kleuren.length; i++ ) {
    console.log (kleuren[i]);
    
}
*/

/*
//Array method
let kleuren = ['yellow', 'blue', 'red', 'orange'];
kleuren.forEach(element => console.log(element));
*/

// 1 Mijn for loop neemt 6 regels in beslag en mijn for loop maar 3. 
// 2 Mijn foreach loop neemt maar 2 regels in beslag.
// 3 Met een array method heb je minder code nodig t.o.v. een for of een whileloop.
    // Ik vind de for loop echter beter leesbaar en beter te begrijpen.
// 4 Kun je een array method gebruiken op een object? Het antwoord is nee.
//  Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
//  Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?





// 
var obj = {
    name: "Bianca",
    age: "46",
    clothing: {
        style: "classic",
        hipster: false
        study: "speech language pathologist"
    }
    
}

for(var propt in obj){
    console.log(propt + ': ' + obj[propt]);
}