/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array 
***/


let quotes = [
  {
  quote: "I pity the fool!" ,
  source: 'Mr. T' ,
  citation: 'Rocky III' ,
  year: 1982
  },
  {
  quote: "I want some butts!" ,
  source: 'Duke Stroud' ,
  citation: 'Top Gun' ,
  year: 1986
  },
  {
  quote: "Son, your ego is writing checks your body can't cash." ,
  source: 'Stinger' ,
  citation: 'Top Gun ' ,
  year: 1986
  },
  {
  quote: "That's right, Iceman. I am dangerous." ,
  source: 'Maverick' ,
  citation: 'Top Gun' ,
  year: 1986
  },
  {
  quote: "Put the bunny, back in the box." ,
  source: 'Cameron Poe' ,
  citation: 'Con Air' ,
  year: 1997
  },
  {
  quote: "Courage is fear holding on a minute longer." ,
  source: 'General George S. Patton' 
  },
  {
  quote: "Courage is being scared to death- but saddling up anyway." ,
  source: 'John Wayne' 
  },
  {
  quote: "If having a soul means being able to feel love and loyalty and gratitude, then animals are better off than a lot of humans." ,
  source: 'James Herriot' 
  },
  {
  quote: "The greatness of a nation and its moral progress can be judged by the way its animals are treated." ,
  source: 'Mahatma Gandhi' 
   },
];
  
/*** Declared this variable in the global scope once I realized I'd be needing
 * it in the second function as well
***/



/***
 * `getRandomQuote` function
***/

function getRandomQuote () {
		const randomNumber = Math.floor ( Math.random() * quotes.length);
		return quotes[randomNumber];
		}

/***
 * `printQuote` function
***/

function printQuote(random){

/*** Called the getRandomQuote function above in order to allow button functionality 
 * by running a single function called printQuote. 
***/

	 

/*** Since getRandomQuote "returns" a random number, I simplified the terminology 
 * and called it "x" for the below code 
***/

	 const x = getRandomQuote();

/*** Strung together the first two properties of each object since every quote has 
 * a "quote" and "source"
***/

	 let html = '<p class = "quote">' + x.quote + '</p>' + '<p class = "source">' + x.source + '';

/*** Use of conditional "if" here since not all quotes have "citation" and/or "year"
***/


  			if (x.citation) {
 		    html += '<span class = "citation">' + x.citation + '</span>';
 			 } 		

 			if (x.year){
 			html += '<span class = "year">' + x.year + '</span>';
 			} 

 			html += '</p>';
	
/*** Standard print location selection
***/

	let outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = html;
	return html;
}

/*** Called the function in order to make it run
***/

printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
