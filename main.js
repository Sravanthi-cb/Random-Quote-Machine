var quotes = [
      'Your Learn from Failure Than From Success. Don\'t Let It stop You. Failure Builds Character.',
      'Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.-Buddha',
      'Life isn\'t about finding yourself. Life is about creating yourself. -George Bernard Shaw',
      'If the only tool you have is a hammer, you tend to see every problem as a nail. -Abraham Maslow',
      'To succeed in life, you need two things: ignorance and confidence. -Mark Twain',
      'The road to success is always under construction. -Lily Tomlin',
      'Striving for success without hard work is like trying to harvest where you haven\'t planted. -David Bly',
      'Don\'t Let yesterday take up too much of today. -Will Rogers'
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}



function currentDate(){
    var currentDate = new Date(),
    day = currentDate.getDate(),
    month = currentDate.getMonth() + 1,
    year = currentDate.getFullYear();
    var presentDate = day + "-" + month + "-" + year;
    return presentDate;
}
  document.getElementById('date').innerHTML = currentDate();

function currentTime(){
	var currentTime = new Date(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes();
  if (minutes < 10) {
	    minutes = "0" + minutes;
   }
  var suffix = "AM";
  if (hours >= 12) {
      suffix = "PM";
      hours = hours - 12;
	 }
	if (hours == 0) {
	   hours = 12;
	}
  var presentTime = hours + ":" + minutes + " " + suffix;
  return presentTime;
}
document.getElementById('time').innerHTML = currentTime();
