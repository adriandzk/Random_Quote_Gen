// Quotes array:

var quotes = [
    {
        quote : 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
        source : 'Ralph Waldo Emerson',
		tag: 'Awareness',
		wiki: 'https://en.wikipedia.org/wiki/Ralph_Waldo_Emerson'
    },
    
    {
        quote : 'What we think, we become.',
        source : 'Buddha',
		tag: 'Awareness',
		year: '500-400 BCE',
		wiki: 'https://en.wikipedia.org/wiki/Gautama_Buddha'
    },
    
    {
        quote: 'Conquer anger with love, evil with good, meanness with generosity, and lies with truth.',
        source: 'Buddha',
		tag: 'Awareness',
        citation: 'Verse 223',
		year: '500-400 BCE',
		wiki: 'https://en.wikipedia.org/wiki/Gautama_Buddha',
    },
	
	{
		quote : 'I would kill everyone in this room for a drop of sweet beer.',
        source : 'Homer Simpson',
		tag: 'Simpsons',
		citation: 'Episode: Duffless',
		year: 1993,
		wiki: 'https://en.wikipedia.org/wiki/Homer_Simpson'	
	},
	
	{
		quote : "You will have to speak up. I'm wearing a towel",
        source : 'Homer Simpson',
		tag: 'Simpsons',
		citation: 'Episode: Bart Gets Famous',
		year: 1994,
		wiki: 'https://en.wikipedia.org/wiki/Homer_Simpson'	
	},
	
		{
		quote : "I didn't think it was physically possible, but this both sucks and blows.",
        source : 'Homer Simpson',
		tag: 'Simpsons',
		citation: 'Episode: Screaming Yellow Honkers',
		year: 1999,
		wiki: 'https://en.wikipedia.org/wiki/Homer_Simpson'	
	},
    
    {
        quote : 'It is not how much we give but how much love we put into giving.',
        source : 'Mother Teresa',
		tag: 'Awareness',
		wiki: 'https://en.wikipedia.org/wiki/Mother_Teresa'
    },
    
    {
        quote : 'If we have no peace, it is because we have forgotten that we belong to each other.',
        source : 'Mother Teresa',
		tag: 'Awareness',
        citation: 'Essay, Santa Clara University',
        year: 2012,
		wiki: 'https://en.wikipedia.org/wiki/Mother_Teresa'
    },
    
    {
        quote : 'I am not particularly interested in saving time, I prefer to enjoy it.',
        source : 'Eduardo Galeano',
		tag: 'Awareness',
		wiki: 'https://en.wikipedia.org/wiki/Eduardo_Galeano'
    },
        
    {
        quote : 'The journey of a thousand miles begins with a single step.',
        source : 'Lao Tzu',
		tag: 'Awareness',
		wiki: 'https://en.wikipedia.org/wiki/Laozi'
    },
	
	{
        quote : "I'm not a great programmer; I'm just a good programmer with great habits.",
        source : 'Kent Beck',
		tag: 'Coding',
		wiki: 'https://en.wikipedia.org/wiki/Kent_Beck'
    },
    
    {
        quote : 'If you are depressed you are living in the past. If you are anxious you are living in the future. If you are at peace you are living in the present.',
        source : 'Lao Tzu',
		tag: 'Awareness',
		wiki: 'https://en.wikipedia.org/wiki/Laozi'
    },
	 
    {
       	quote : 'Grant me the serenity to accept what I can not change, the courage to change what I can, and the wisdom to tell the difference.',
        source : 'Epictectus',
		tag: 'Awareness',
		year: '90-100 AD',
		wiki: 'https://en.wikipedia.org/wiki/Epictetus'
    },	
    
    {
        quote: 'The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.',
        source: 'Martin Luther King',
		tag: 'Awareness',
        citation: 'Strength to Love',
        year: 1963,
		wiki: 'https://en.wikipedia.org/wiki/Martin_Luther_King_Jr.'
    },
	
	{
        quote : 'Talk is cheap. Show me the code.',
        source : 'Linus Torvalds',
		tag: 'Coding',
		wiki: 'https://en.wikipedia.org/wiki/Linus_Torvalds'
    },
    
    {
        quote: 'Darkness cannot drive out darkness, only light can do that. Hate cannot drive out hate, only love can do that.',
        source: 'Martin Luther King',
		tag: 'Awareness',
        citation: 'Strength to Love',
        year: 1963,
		wiki: 'https://en.wikipedia.org/wiki/Martin_Luther_King_Jr.'
    },
	
	{
        quote : 'The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.',
        source : 'Mark Twain',
		tag: 'Life',
		wiki: 'https://en.wikipedia.org/wiki/Mark_Twain'
    },
	
	{
        quote : "I don't like to commit myself about heaven and hell - you see, I have friends in both places.",
        source : 'Mark Twain',
		tag: 'Life',
		wiki: 'https://en.wikipedia.org/wiki/Mark_Twain'
    },
	
	{
        quote : "A person who won't read has no advantage over one who can't read.",
        source : 'Mark Twain',
		tag: 'Life',
		wiki: 'https://en.wikipedia.org/wiki/Mark_Twain'
    },
	
	{
        quote : "Those who dare to fail miserably can achieve greatly.",
        source : 'John F. Kennedy',
		tag: 'Life',
		wiki: 'https://en.wikipedia.org/wiki/John_F._Kennedy'
    },
	
	{
        quote : "It always seems impossible until it's done.",
        source : 'Nelson Mandela',
		tag: 'Life',
		wiki: 'https://en.wikipedia.org/wiki/Nelson_Mandela'
    }
	
];

var html = '';
var randomQuote = '';
var randomBackground = '';

// Generate a random number between 0 and quotes.length, and using it as the index, and retrieve the object:

function getRandomQuote() {
  var i = Math.floor(Math.random() * quotes.length);
  return quotes[i];
}




/*
RANDOM-1:
One way to generate randomBackground, less random but we eliminate unwanted colors. Still a lot of colors.
*/

var cssColors = ["Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DeepPink","DeepSkyBlue","DimGray","DodgerBlue","FireBrick","ForestGreen","Fuchsia","Gold","GoldenRod","Grey","Green","GreenYellow","HotPink","IndianRed","Indigo","LawnGreen","LightCoral","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","Lime","LimeGreen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","Navy","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleVioletRed","Peru","Pink","Plum","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","Sienna","SkyBlue","SlateBlue","SlateGray","SlateGrey","SpringGreen","SteelBlue","Tan","Teal","Tomato","Turquoise","Violet","Yellow","YellowGreen"];


function getBackground() {
  var j = Math.floor(Math.random() * cssColors.length);
  return cssColors[j];
}


/*
RANDOM-2:
Or this way, more possibilies, but needs a workaround in case of unwanted colors.


function getBackground() {
  	var keys = '0123456789ABCDEF';
  	var color ='#';
  	for (var i = 0; i < 6; i++) {
	  color += keys[Math.floor(Math.random() * 16)];
  	}
	return color;
}

*/

function printQuote() {
    
	// call the getRandomQuote function and stores the returned quote object in randomQuote:
	// same principle for random background color:
	
	randomQuote = getRandomQuote();
    randomBackground = getBackground();
    
	// constructs a string containing the different properties of the quote object:
    
	html = '<p class="quote">' + randomQuote.quote + '</p>';
    
    /*
    I didnt quite understand this: "printQuote doesn't add a for a missing citation or a if the year property is missing",
    so I did it like this (whith conditional), but it can be done differently of course.
    */
	
    if (randomQuote.citation !== undefined && randomQuote.year !== undefined) {
        html += '<p class="source">' + randomQuote.source + '<span class="citation">' + randomQuote.citation + '</span><span class="year">' + randomQuote.year + '</span></p>';
		html += '<p class="tag">' + randomQuote.tag + '</p>';
		html += '<a class="wiki" href="' + randomQuote.wiki + '">| wiki</a>';
		
    } else {
        html += '<p class="source">' + randomQuote.source + '</p>';
		html += '<p class="tag">' + randomQuote.tag + '</p>';
		html += '<a class="wiki" target="_blank" href="' + randomQuote.wiki + '">| wiki</a>';
    }
    
    // print the html string in the DOM:
	
    var quoteBox = document.getElementById("quote-box");
    document.body.style.backgroundColor = randomBackground;
    document.getElementById("loadQuote").style.backgroundColor = randomBackground;
	
	/*
	If by any chance the randomBackground is white, the letters and borders are black.
	Still, I know that besides #FFFFFF you have others unwanted colors. Working on it.
	Or just use RANDOM-1.
	*/
	
	if (randomBackground === '#FFFFFF') {
		document.body.style.color = '#1a1a1a';
		document.getElementById("loadQuote").style.color = '#1a1a1a';
		document.getElementById("loadQuote").style.border = "2px solid #000";
	}
	
    quoteBox.innerHTML = html;
}


function main() {
	window.clearInterval(timerID);
	printQuote();
	timerID = setInterval(printQuote, 30000);	
}

// Print a random quote when the page is loaded:

printQuote();

// Set timer to refresh every 30 seconds:

var timerID = setInterval(printQuote, 30000);

// Functions to generate the btn hover effect:

function stylebtn1() {
	document.getElementById("loadQuote").style.backgroundColor = 'rgba(255,255,255,.25)';
}

function stylebtn2() {
	document.getElementById("loadQuote").style.backgroundColor = randomBackground;
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the main function is called:

document.getElementById('loadQuote').addEventListener("click", main, false);

// events listener for hover effect
document.getElementById('loadQuote').addEventListener("mouseenter", stylebtn1, false);
document.getElementById('loadQuote').addEventListener("mouseleave", stylebtn2, false);
