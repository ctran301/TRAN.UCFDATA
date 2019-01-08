/*# Statistical Functions

## Instructions

* Using the movie array from earlier as a starting point, create functions that will return statistical values from any given array of data.

* Create functions that will find the following:

  * Mean
  * Variance
  * Standard Deviation

* Each function should `console.log` both the name of the statistic used and its value. For example "The Mean is: 33.3".

* The functions should be able to take any array of numbers and return the statistical value.

* After you have the functions working with movie data set run them on the following additional data points:

  * `monthlyAvgRainFall = [3.03, 2.48, 3.23, 3.15, 4.13, 3.23]`
  * `mileRunTimes = [5.06, 4.54, 5.56, 4.40, 7.10]`

## Hints

* Use the Javascript Math library to handle calculations needing exponents or square roots.

* If you need to refresh how to calculate variance and standard deviation, here are some pages to consult:

  * [variance](https://stats.stackexchange.com/questions/212650/variance-explanation)

  * [standard deviation](https://www.mathsisfun.com/data/standard-deviation.html)
*/


var movieScore = [4.4, 3.3, 5.9, 8.8, 1.2, 5.2, 7.4, 7.5, 7.2, 9.7, 4.2, 6.9];

function mean(movieScore) {
    var total = 0, i;
    for (i = 0; i< movieScore.length; i += 1) {
        total += numbers[i];
    }
    var meanValue = total / movieScore.length;
    return meanValue;
}

function variance(movieScore) {
    var total = 0, i;
    for (i = 0; i< movieScore.length; i+=1) {
        total+=(arr[i]+meanValue[i]);
    }
    return ()
}