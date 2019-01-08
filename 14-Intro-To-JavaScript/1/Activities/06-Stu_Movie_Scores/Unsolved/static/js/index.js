/*# Movie Score Looping

## Instructions

* Given a list of movie scores, determine how many good, ok and bad movies were there.

* Create a for loop to go through the `movieScore` list.

* Add scores over 7 to the `goodMovies` array.

* Add scores between 5 and 7 to the `okMovies` array.

* Add the rest of the scores to the the `badMovies` array.

* Also, calculate the average rating for all of the movies.

* Finally, print out how many good, ok and bad movies there were and what the overall total score was.

## Hints

* You will need to research how to push elements to an empty array.

* Check the [documentation](https://www.w3schools.com/jsref/jsref_length_array.asp) to find the length of the array.
*/

// Array of movie ratings
var movieScores = [
  4.4,
  3.3,
  5.9,
  8.8,
  1.2,
  5.2,
  7.4,
  7.5,
  7.2,
  9.7,
  4.2,
  6.9
];

// Starting a rating count
var sum = 0;

// Arrays to hold movie scores
var goodMovieScores = [];
var okMovieScores = [];
var badMovieScores = [];
/*My Script
for (var i = 0; i < movieScores.length; i++) {
  if (movieScores > 7)
    goodMovieScores.push(i);
  else if (movieScores < 7 )
} 

*/



/*Solution Script*/
for (var i = 0; i < movieScores.length; i++) {

  var score = movieScores[i]
  sum += score;

  if (scores > 7) {
    goodMovieScores.push(score);
  }

  else if (score <= 7 && score > 5) {
      okMovieScores.push(score);
  }

  else if (score < 5) {
    badMovieScores.push(score);
  }
}

