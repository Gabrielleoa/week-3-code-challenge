const baseURL= "https://my-json-server.typicode.com/gabrielleoa/week-3-code-challenge/films"
getMovies()

function getMovies(){
    fetch (baseURL)
    .then((response) => response.json())
    .then(data => {
        displayMoviesShowing(data),
     console.log(data);
                
    })     
        }
function displayMoviesShowing(films){
    const movieListing= document.getElementById("movieListingArea");
    for(const film of films) {
        console.log(film)
        let movies = document.getElementById("name")
        let li = document.createElement('li')
        li.textContent= film.name 
        addEventListener('click', () => getMovieInfo(film));
        movies.appendChild(li)
        
    }
}
function getMovieInfo(film){
    const movieDetails = document.getElementById('movieInformation')
    movieDetails.innerHTML = `<h2> id="data"> ${film.name}</h2>
    <img src="${film.poster}" alt="${film.name} Image">
    <p>Tickets Sold: ${film.tickets_sold}</p>`;

}

