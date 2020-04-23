/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

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
  
/***
 * `getRandomQuote` function
***/

let randomNumber;
let html;
let x;


function getRandomQuote (array) {
		randomNumber = Math.floor ( Math.random() * array.length);
		return quotes[randomNumber];
		}

/***
 * `printQuote` function
***/

function printQuote(random){
	 getRandomQuote(quotes);
	 let x = randomNumber;
	 let html = '<p class = "quote">' + quotes[x].quote + '</p>' + '<p class = "source">' + quotes[x].source + '';
  			if (quotes[x].citation > 0 || quotes[x].year > 0){
 		    html += '<span class = "citation">' + quotes[x].citation + '</span>'+'<span class = "year">' + quotes[x].year + '</span></p>';
 			 } 		
	let outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = html;
	return html;
}

printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
