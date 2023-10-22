const baseURL="http://localhost:3000/films"
getMovies()
function getMovies(){
    fetch(baseURL)
    .then((response) => response.json())
    .then(data => {
        
    });    
}
getMovies()
function displayMoviesShowing(films){
    const movieListing= document.getElementById("movieListingArea");
    for(const film of films) {
        console.log(film)
        let movies = document.getElementById("name")
        let li = document.createElement('li')
        li.textContent= film.name 
        li.addEventListener('click', () => getFilmInfo(film));
        movies.appendChild(li)
    }
}

