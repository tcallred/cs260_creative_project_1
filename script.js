// var = new array();
var quotes = new array();
quotes.push("a");
quotes.push("a");
quotes.push("a");
quotes.push("a");
quotes.push("a");
quotes.push("a");
quotes.push("a");
quotes.push("a");

// names[0] = prompt("New member name?");
// localStorage.setItem("names", JSON.stringify(names));
//
// //...
// var storedNames = JSON.parse(localStorage.getItem("names"));
//
//

var response = "<p>";
var index;
//onClick() function
function get_quote() {
    index =  Math.floor(Math.random() * Math.floor(quotes.length));
    response += quotes[index] + "</p>";
}
document.getElementById("quote").innerHTML = response;
