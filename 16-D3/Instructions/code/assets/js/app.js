function makeResponsive() {  
  // if the SVG area isn't empty when the browser loads,
  // remove it and replace it with a resized version of the chart
  var svgArea = d3.select("body").select("svg");
    
  // clear svg is not empty
  if (!svgArea.empty()) {
    svgArea.remove();
  }

    // Define SVG area dimensions
    var svgWidth = 960;
    var svgHeight = 660;

    // Define the chart's margins as an object
    var chartMargin = {
        top: 30,
        right: 30,
        bottom: 30,
        left: 30
    };

    // Define dimensions of the chart area
    var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
    var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

    // Select body, append SVG area to it, and set the dimensions
    //Select element from index.html (div id="scatter")
    var svg = d3.select("#scatter")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth);

    // Append a group to the SVG area and shift ('translate') it to the right and down to adhere
    // to the margins set in the "chartMargin" object.
    var chartGroup = svg.append("g")
    .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

    //Import csv data
    d3.csv("assets/data/data.csv", function(error, healthData) {
        if (error) return console.warn(error);

        console.log(healthData);
    //Get values for healthcare and poverty in healthData
        var healthcarelvl = healthData.map(data => data.healthcare);
            
    //Cast values in healthData as number using the unary + operator    
        healthData.forEach(function(data) {
            data.healthcare = +data.healthcare2;
            console.log("Healthcare", healthcarelvl);
            console.log("Poverty Level", povertylvl);


        });
    });
};


//Scatter plot (healthcare vs poverty)

//Set dimensions for svg element

// When the browser loads, makeResponsive() is called.
makeResponsive();

// When the browser window is resized, makeResponsive() is called.
d3.select(window).on("resize", makeResponsive);
