const API_KEY = "d0e55427-666c-4bc4-8068-7ffce5026bd8";
const API_URL_POPULAR = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1';
const API_URL_SEARCH =
  "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

getMovies(API_URL_POPULAR);

async function getMovies(url) {
    const resp = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY,
      },
    });
    const respData = await resp.json();
    console.log(respData);
    showMovies(respData);
    
  }

  function getClassByRate(vote)
  {

    if (vote.slice(-1) == '%')
    {
        vote = vote[1] + '.' + vote[3];
    }

    if(vote >= 7)
    {
        return "green"

    }

    else if(vote > 5)
    {
        return "orange"
    }

    else return "red"
  }

  function checkMovieRate(vote)
  {
    if (vote.slice(-1) == '%')
    {
        return vote[1] + '.' + vote[3];
    }
    else
    return vote;

  }

  function showMovies(data) {
    const moviesEl = document.querySelector(".movies");
  
     // Очищаем предыдущие фильмы
    document.querySelector(".movies").innerHTML = "";
  
    data.films.forEach((movie) => {
      const movieEl = document.createElement("div");
      movieEl.classList.add("movie");
        movieEl.innerHTML = 
        ` <div class="movie">
        <div class="movie_cover_inner">
            <img src="${movie.posterUrlPreview}" class="movie_cover">
            <div class="movie_cover_darkened"></div>
        </div>
        <div class="movie_info">
            <div class="movie_title">${movie.nameRu}</div>
            <div class="movie_category">${movie.genres.map(
            (genre) => ` ${genre.genre}`
            )}</div>
            <div class="movie_average movie_average_${getClassByRate(movie.rating)}">${checkMovieRate(movie.rating)}</div>
        </div>
    </div>`;
    moviesEl.appendChild(movieEl);
    })
}

const form = document.querySelector("form");
const search = document.querySelector(".header_search");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const apiSearchUrl = `${API_URL_SEARCH}${search.value}`;
  if (search.value) {
    getMovies(apiSearchUrl);

    search.value = "";
  }
});