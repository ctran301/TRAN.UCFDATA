// from data.js
const tableData = data;

//Find the table body and reference it
const tbody = d3.select("tbody");

// Select Submit button
const submit = d3.select("#filter-btn"); 

// Complete the clicker handler for the form
submit.on("click", function() {

  //prevents page from refreshing
  d3.event.preventDefault(); 

  //select input element and get raw html node
  var inputElement = d3.select("#datetime");

  //Get the value of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  //create filter by datetime
  var filteredData = tableData.filter(sighting => sighting.datetime ===inputValue);
    
  console.log(filteredData);

  filteredData.forEach((input_date) => {
      var row = tbody.append("tr");
      Object.entries(input_date).forEach(function([key, value]){
      
        var cell = tbody.append('td');
        cell.text(value);
        
      }
      )
    }
  )
})
