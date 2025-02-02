/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(array) {

  let copy = [...array];

  copy.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    }
    else if (b.year < a.year) {
      return 1;
    }
    else {
      return 0;
    }
  })

  return copy;
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arrMovie) {
  let arrDrama = arrMovie.filter((movie) => {
    if (movie.genre.includes("Drama")) {
      return true;
    }
    else {
      return false;
    }
  });
  let howMany = arrDrama.reduce((a, b) => {
    return a + Number(b.director === "Steven Spielberg");
  }, 0);
  return howMany
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(matrix){

     
     let arrOrderMovie = matrix.map(function(movie){
       return movie.title;
     }).sort().filter(function(movie, index){

         if(index < 20) return movie;
     })
     return arrOrderMovie;
 }

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(matrix) {

     if (matrix.length) {

         let resutl = matrix.reduce(function (acc, e) {
             if (!e.rate || e.rate == ""){
                 return acc;
             }
             return acc + e.rate;
         }, 0) / matrix.length;

         resutl = resutl.toFixed(2);
         resutl = parseFloat(resutl);

         return resutl;
     }
     return 0;
 }



// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arrMovie) {

     let arrDrama = arrMovie.filter(function (movie) {
         if (movie.genre.includes("Drama")) {
             return true;
         } else {
return true;
         } else {
             return false;
         }
     });
     
     if (arrDramaWithRate.length === 0) {
         return 0;
     } else {
         let averageDrama =
             arrDramaWithRate.reduce(function (accumulator, value) {
                 return (accumulator += parseFloat(value.rate));
              
             }, 0) / arrDramaWithRate.length;

         return averageDrama;
     }
 }

 console.log(dramaMoviesRate(movies));
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
