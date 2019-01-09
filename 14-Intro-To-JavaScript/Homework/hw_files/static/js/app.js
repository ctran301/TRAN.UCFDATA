// from data.js
var tableData = data;
console.log(tableData);

//Find the table body and reference it
var tbody = d3.select("tbody");

//Console Log 
tableData.forEach(function(sightingReport){
    console.log(sightingReport);
    var row = tbody.append("tr");
        Object.entries(sightingReport).forEach(function([key, value]) {
                console.log(key,value);
                var cell = tbody.append("td");
                cell.text(value);
        });
    
});


var filter = d3.select("#filter table");

 // function to take input and recreate table
 filter.on("click", function() {
   // stops page from refreshing
   d3.event.preventDefault();
 
   d3.select(".summary").html("");
 
   // user input as variable
   var inputElement = d3.select("#datetime");
   var inputValue = inputElement.property("value");
 
   // Filter Data
   var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
 
   // loop through
   filteredData.forEach((dateData) => {
     var row = tbody.append("tr");
     Object.entries(dateData).forEach(([key, value]) => {
       var cell = tbody.append("td");
       cell.text(value);
     });
   });
 });

dateInput.on("change", clickSelect);


//508875699
