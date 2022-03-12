const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterURL');
const movieDate = document.querySelector('.userInputDate');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');
const movieDateToDisplay = document.querySelector('.favoriteMovieDate');

let titleInStorage = localStorage.getItem('title');
let imageUrlStorage = localStorage.getItem('imageUrl');
let filmDate = localStorage.getItem('date');

if(titleInStorage && imageUrlStorage && filmDate){
    movieTitleToDisplay.textContent = titleInStorage
    movieDateToDisplay.textContent = filmDate
    container.style.backgroundImage = `linear-gradient(rgba(38, 38, 107, 0.616), rgba(49, 37, 37, 0.459)), 
    url('${imageUrlStorage}')`;
}

btn.addEventListener('click',() =>{
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let movieDateInput = movieDate.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('date', movieDateInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    movieDateToDisplay.textContent = movieDateInput;
    container.style.backgroundImage = `linear-gradient(rgba(38, 38, 107, 0.616), rgba(49, 37, 37, 0.459)),
    url('${posterUrlInput}')`;
    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieDate.value = '';
});