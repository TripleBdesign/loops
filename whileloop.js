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
    // je kunt niet meer verstrikt raken in een infinite loop.
    //  je hoeft niet meer bij te houden met een i, bij welke iteratie je bent.
    // je hebt direct toegang tot het item waar je overheen loopt dmv het argument en de callback-functie die je de array-method geeft als argument.
    // de naam "forEach" zegt ook meteen wat je gaat doen en is semantischer dan een while of for loop.
// 4 Kun je een array method gebruiken op een object? Het antwoord is nee.//  Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
//  Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?

/* 
const object = {
    name: "Bianca",
    age: "46",
    clothing: {
        style: "classic",
        hipster: false
        }
    study: "speech language pathologist"
    };
    

for(x in object){
    console.log(object[x]);
}
*/

const myColors = {
    colorWall: "blue",
    colorFruit: "orange",
    colorCar: "red",
    colorHair: "white",
    colorGras: "green",
  };
  
  for (x in myColors) {
    console.log(myColors[x]);
  }

// Ja, je bent nu aan het itereren. Echter ben je aan het itereren over een OBJECT.
// Array Methods zijn NIET beschikbaar op een object.