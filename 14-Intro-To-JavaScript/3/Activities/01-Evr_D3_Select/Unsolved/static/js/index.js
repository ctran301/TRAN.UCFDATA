//Select text of an HTML element

//using a .text1 highlights the div class
let text1 = d3.select(".text1").text();
console.log("text1 says: ", text1);
//using a #text2 highlights the div id
let text2 = d3.select("#text2").text();
console.log("text2 says: ", text2);

d3.select(".text1").text("Hey I changed this; Goodbye 2018!");
//accesses the "my-link" part of the class
console.log(d3.select(".my-link").html());
//shows the a object and its properties incase you wanted to modify it
console.log(d3.select(".my-link>a"));


let myLinkAnchor = d3.select(".my-link>a");
console.log(myLinkAnchor.attr("href"));
myLinkAnchor.attr("href", "https://nytimes.com");

myLinkAnchor.text("this is now a link to NYtimes!");

d3.select(".my-link").style("color", "blue");

var jsli = d3.select("ul").append("li");
jsli.text("This is a new bulletpoint");