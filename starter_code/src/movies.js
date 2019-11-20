/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(array){

    let copy = [...array];

    copy.sort( (a, b) =>{
        if(a.year < b.year){
            return -1;
        }
        else if(b.year < a.year){
            return 1;
        }
        else{
            return 0;
        }
    })

    return copy;
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arrMovie){
    let arrDrama = arrMovie.filter((movie) => {
      if (movie.genre.includes("Drama")){
        return true;
      }
      else{
        return false;
      }
    });
    let howMany = arrDrama.reduce((a,b) =>{
      return a + Number(b.director === "Steven Spielberg");
     },0 );
     return howMany
 }

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
