const directors = [
  {
    name: "Стивен Спилберг",
    career: "Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр",
    films:
      "https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0",
    top_rated_film: "Список Шиндлера",
  },
  {
    name: "Кристофер Нолан",
    career:
      "Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор",
    films:
      "https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu",
    top_rated_film: "Начало",
  },
  {
    name: "Мартин МакДона",
    career: "Сценарист, Режиссёр, Продюсер",
    films: "https://www.film.ru/person/martin-makdonah",
    top_rated_film: "Три билборда на границе Эббинга, Миссури",
  },
  {
    name: "Алексей Балабанов",
    career: "Режиссёр, Сценарист, Актёр, Продюсер",
    films: "https://www.film.ru/person/aleksey-balabanov",
    top_rated_film: "Брат",
  },
  {
    name: "Питер Фаррелли",
    career: "Продюсер, Режиссёр, Сценарист, Актёр",
    films: "https://www.film.ru/person/piter-farrelli",
    top_rated_film: "Зелёная книга",
  },
  {
    name: "Юрий Быков",
    career: "Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер",
    films: "https://www.film.ru/person/yuriy-bykov",
    top_rated_film: "Дурак",
  },
  {
    name: "Жан-Марк Валле",
    career: "Режиссер, Продюсер, Монтажёр, Актёр, Сценарист",
    films: "https://www.film.ru/person/zhan-mark-valle",
    top_rated_film: "Далласский клуб покупателей",
  },
];
let container = document.querySelector(".directors__container");
console.log(container);

directors.forEach((director) => {
  let div = document.createElement("div");
  div.classList.add("directors__director");
  container.appendChild(div);
  const directorNameElement = document.createElement("p");
  const directorCareerElement = document.createElement("p");
  const directorFilmsLinkElement = document.createElement("a");

  directorNameElement.textContent = director.name;
  div.appendChild(directorNameElement);

  directorCareerElement.textContent = director.career;
  div.appendChild(directorCareerElement);

  directorFilmsLinkElement.textContent = "фильмография";
  directorFilmsLinkElement.href = director.films;
  div.appendChild(directorFilmsLinkElement);

  directorNameElement.classList.add("director__name");
  directorCareerElement.classList.add("director__career");
  directorFilmsLinkElement.classList.add("director__films-link");
});

const topFilmsList = directors.map(function (director) {
  return director.top_rated_film;
});
console.log(topFilmsList);

const topFilmListDiv = document.querySelector(".directors__top-films");

topFilmsList.forEach((topFilm) => {
  const topListP = document.createElement("p");
  topListP.textContent = topFilm;
  topFilmListDiv.appendChild(topListP);
  topListP.classList.add("directors__top-list-item");
});
