'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB(showing) {
    if(!showing) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '')
    }
}

function rememberFilms() {
    for(let i = 0; i < 2; i++) {
        const filmName = prompt('Один из последних просмотренных фильмов?', ''),
            filmRating = prompt('На сколько оцените его?', '');

        if(filmName !== null && filmRating !== null && filmName !== '' && filmRating !== '' &&  filmName.length < 50) {
            personalMovieDB.movies[filmName] = filmRating;
        } else {
            i--
        }

    }
}
rememberFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}
detectPersonalLevel();

writeYourGenres()
showMyDB(personalMovieDB.privat);

