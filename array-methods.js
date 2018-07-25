const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

const body = document.querySelector("body");

const script = document.querySelector("script");

const mainContent = document.createElement("div");

mainContent.setAttribute("id", "planets");

body.insertBefore(mainContent, script);

const planetEl = document.getElementById("planets")

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

function addArrayToDOM(array){
    array.forEach(function(index){
        planetEl.innerHTML +=
            `<h3>${index}</h3>`
    })
}

addArrayToDOM(planets);

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

let importantPlanets = planets.map((planet) =>{
    return planet.charAt(0).toUpperCase() + planet.slice(1);
  });

console.log("Important Planets", importantPlanets);

newArray = planets.map(function(str){
    let upperCase = str.charAt(0).toUpperCase();
    let restOfWord = str.slice(1);
    return upperCase  + restOfWord;
});

addArrayToDOM(importantPlanets);


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const letterE = importantPlanets.filter(function(argument){
    return argument.includes("e") + argument.includes("E")
 })
 console.log("test", letterE);
 
addArrayToDOM(letterE);


// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const reducedWords = words.reduce(
    function (currentTotal, next) {
        return currentTotal + " " + next
        console.log("one", currentWord);
        console.log(next);
    }
 )
 console.log(reducedWords)
 planetEl.innerHTML += 
     `<div>
         <h2>${reducedWords}</h2>
     </div>`;



