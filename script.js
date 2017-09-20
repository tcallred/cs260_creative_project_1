// var = new array();
var quotes;
var response;
var index = -1;
window.onload = function() {
	quotes = ["a","b","c"];
	quotes.push("d");
	quotes.push("e");
	quotes.push("f");
	quotes.push("g");
	quotes.push("h");
	quotes.push("i");
	quotes.push("j");
	quotes.push("k");

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
