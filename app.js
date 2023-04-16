// IIFE Immediately invoked function Expressions
(async function () {
  const response = await fetch("./data.json");
  const movies = await response.json();

  const searchMovieBtnElement = document.getElementById("searchMovieBtn");

  const yearInputElement = document.getElementById("year");
  //const ratingInputElement = document.getElementById("rating");
  

  const displayMoviesElement = document.getElementById("displayMovies");

  

  

  //////// display Movie Fuction;

  function displayMovieResults (requestedMoviesResult) {
    displayMoviesElement.innerHTML = "";
    requestedMoviesResult.forEach(function (movies) {
      const div = document.createElement("div");
      const displayMoviesList =
           `
           <div class="movieList">
           <div class="movieDate">${movies.release_date}</div>
          <div class="movieTitle">${movies.title}</div>
          <div class="movieLanguage">${movies.original_language}</div>
          <div class="moviveVoting">${movies.vote_average}</div>

          
          </div>
      `;

      div.innerHTML = displayMoviesList;

      displayMoviesElement.appendChild(div);
    })
  }

//////// Searh Movie Fuction;

  function searchMoviesFunc() {
    const requestedMoviesByYear = yearInputElement.value.toLowerCase();
    //const requestedMoviesByRating = ratingInputElement.value.toLowerCase();

    
    const requestedMoviesResult = movies.filter(function (movies) {
      return movies.release_date.toLowerCase().includes(requestedMoviesByYear)

      //return movies.vote_average.valueOf().includes(requestedMoviesByRating)
    });
    
    displayMovieResults(requestedMoviesResult)
    
  }

  searchMovieBtnElement.addEventListener("click", searchMoviesFunc);

  

})();