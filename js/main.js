/*jshint esversion: 6 */

const quotes = [

    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    {
      quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
      author: "Oprah Winfrey"
    },
    {
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker"
    },
    {
      quote: "And, when you want something, all the universe conspires in helping you to achieve it.",
      author: "Paulo Coelho",
      citation: "The Alchemist",
      year: 1988
    },
    {
      quote: "The two most powerful warriors are patience and time.",
      author: "Leo Tolstoy",
      citation: "War and Peace",
      year: 1869
    },
    {
      quote: "All that we are is the result of what we have thought.",
      author: "Budhha"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
  
    },
    {
      quote: "If you think you are too small to make a difference, try sleeping with a mosquito.",
      author: "The Dalai Lama"
    },
    {
      quote: "People say nothing is impossible, but I do nothing every day.",
      author: "A. A. Milne"
    },
    {
      quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals",
      author: "J.K. Rowling",
      citation: "Harry Potter and the Goblet of Fire",
      year: 2000
    },
    {
      quote: "The only opponent you have to beat is yourself, the way you used to be",
      author: "Haruki Murakami",
      citation: " What I Talk About When I Talk About Running",
      year: 2017
    }
    
  ];
  
  const quoteButton = document.getElementById('load-quote');
  
  //function returns randomly selected quote from quotes array
  const getRandomQuote = array =>  array[Math.floor(Math.random() * quotes.length)];
   
  
  //function that generates random RGB value
  const generateRandomRGBValue = () => Math.floor(Math.random() *256);
  
  //function that takes 3 randomly generated RGBA values from generateRandomRGBValue, combine them and return a randomly generated RGB color
  
  const generateRandomColor = value => {
    return `rgba(${value()}, ${value()}, ${value()},0.9)`;
  };
  
  //function calls two other functions - getRandomQuote and generateRandomColor to simultanoiusly return quote object and display a random quote in a browser and change the background color randomly. 
  function printQuote(){
   
    const randomQuote = getRandomQuote(quotes);
    const quoteContainer = document.querySelector('#container');
    const quoteBox = document.querySelector('#quote-box');
    let html = ` <p class="quote">${randomQuote.quote}</p> <div class="quote-info"><span class="author">${randomQuote.author}</span>`;
    
    if(randomQuote.citation){
        html += `<span class="citation">${randomQuote.citation}</span>`;
      }
  
    if(randomQuote.year){
      html += `<span class="year">${randomQuote.year}</span>`;
      }
  
    html += `</div>`;
  
    quoteBox.innerHTML = html;
    quoteContainer.style.background = generateRandomColor(generateRandomRGBValue);
    
  }

  //timing function that prints random quote after every 10 seconds.
 const interval = setInterval(printQuote, 6000);
    
  quoteButton.addEventListener("click", function(){
    clearInterval(interval);
    printQuote();
  });

  