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
  quote: 'I pity the fool!' ,
  source: 'Mr. T' ,
  citation: 'Rocky III' ,
  year: 1982
  },
  {
  quote: 'I want some butts!' ,
  source: 'Duke Stroud' ,
  citation: 'Top Gun' ,
  year: 1986
  },
  {
  quote: "Son, your ego is writing checks your body can't cash." ,
  source: 'Stinger' ,
  citation: 'Top Gun' ,
  year: 1986
  },
  {
  quote: "That's right, Iceman. I am dangerous." ,
  source: 'Maverick' ,
  citation: 'Top Gun' ,
  year: 1986
  },
  {
  quote: 'Put the bunny, back in the box.' ,
  source: 'Cameron Poe' ,
  citation: 'Con Air' ,
  year: 1997
  },
  {
  quote: 'Courage is fear holding on a minute longer.' ,
  source: 'General George S. Patton' ,
  citation: '' ,
  year: 
  },
  {
  quote: 'Courage is being scared to death- but saddling up anyway.' ,
  source: 'John Wayne' ,
  citation: '' ,
  year:
  },
  {
  quote: 'If having a soul means being able to feel love and loyalty and gratitude, then animals are better off than a lot of humans.' ,
  source: 'James Herriot' ,
  citation: '' ,
  year:
  },
  {
  quote: 'The greatness of a nation and its moral progress can be judged by the way its animals are treated.' ,
  source: 'Mahatma Gandhi' ,
  citation: '' ,
  year:
  },
];
  

/***
 * `getRandomQuote` function
***/


function getRandomQuote (upper){
	return Math.floor( Math.random() + upper )+1;
	let counter = 0;
	counter += 1;
	}

console.log(6);

/***
 * `printQuote` function
***/


function printQuote(message){
	document.getElementById('load-quote');
	outputDiv.innerHTML = message;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);