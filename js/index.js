const baseURL="http://localhost:3000/films"
function getMovies(){
    fetch(baseURL)
    .then((response) => response.json())
    .then(data => data )
}