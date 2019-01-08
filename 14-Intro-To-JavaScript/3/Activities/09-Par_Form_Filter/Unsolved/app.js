// Assign the data from `data.js` to a descriptive variable
var people = data;

// Select the submit button
d3.select("submit");

// Complete the click handler for the form
var submit = submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("patient-form-input");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  // Use the form input to filter the data by blood type
  var filteredData = people.filter(person => person.bloodType===inputValue);
  // BONUS: Calculate summary statistics for the age field of the filtered data
  var mean = math.mean(ages);
  var median = math.median(ages);
  var mode = math.mode(ages);
  var variance = math.var(ages);
  var standardDeviation = math.std(ages);


  // First, create an array with just the age values

  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages

  // Finally, add the summary stats to the `ul` tag
});
