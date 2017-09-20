// var = new array();
var quotes;
var response;
var index = -1;
window.onload = function() {
	quotes = ["Do not take life too seriously. You will never get out of it alive.",
	"A day without sunshine is like, you know, night.",
	"People who think they know everything are a great annoyance to those of us who do.",
	"Procrastination is the art of keeping up with yesterday."];

}
function get_quote() {
	var new_index = index;
	while(new_index == index) {
		new_index = Math.floor(Math.random() * Math.floor(quotes.length));
	}
	index = new_index;
	response = "<p>" + quotes[index] + "</p>";
	document.getElementById("quote").innerHTML = response;
}
