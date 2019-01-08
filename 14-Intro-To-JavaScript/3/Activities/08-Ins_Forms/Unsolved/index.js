var submit = d3.select("#submit");

submit.on("click", function() {

    d3.event.preventDefault();

    var inputElement =d3.select("#example-form-input");

    var inputValue =inputElement.property("value");

    console.log(inputValue);

    d3.select("h1>span").text(inputValue);

});