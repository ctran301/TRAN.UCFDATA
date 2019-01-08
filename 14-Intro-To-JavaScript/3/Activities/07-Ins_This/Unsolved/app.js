d3.selectAll("button").on("click", function() {
  // What will be logged out? What is `this` in this case?
  console.log(this);
});

d3.selectAll("li").on("click", fuction() {
  var listItem = d3.select(this);
  listItem.style("color", "blue");

  var listItemText = listItem.text();
  console.log(listItemText);

});