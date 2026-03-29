// ============================================================
//  MY MOVIE LIST — index.js
//  We write ALL of this together across 3 video lectures.
// ============================================================

const movies = [
    {
        id:1,
        title:"Inception",
        year:2010,
        genre:"scifi",
        rating:5,
        watched:true,
        },
    {
        id:2,
        title:"The Dark Knight",
        year:2008,
        genre:"action",
        rating:5,
        watched:false,
    },
    {
        id:3,
        title:"Parasite",
        year:2019,
        genre:"thriller",
        rating:5,
        watched:true,
    },
    {
        id:4,
        title:"The Grand Budapest Hotel",
        year:2014,
        genre:"comedy",
        rating:4,
        watched:true,
    },
        {
        id:5,
        title:"Interstellar",
        year:2014,
        genre:"scifi",
        rating:5,
        watched:false,
    },
        {
        id:6,
        title:"Spirit Away",
        year:2001,
        genre:"animation",
        rating:5,
        watched:true,
    },
        {
        id:7,
        title:"Whiplash",
        year:2014,
        genre:"drama",
        rating:4,
        watched:false,
    },
        {
        id:8,
        title:"Everything Everyone All at Once",
        year:2022,
        genre:"scifi",
        rating:5,
        watched:false,
    },
];
// VIDEO 1 ── Arrays & Objects
// We'll define the movies array, explore objects, and
// render cards to the page using a for...of loop + map.


function starsFromRating(rating){
    return "★".repeat(rating) + "☆".repeat(5-rating);

}

function buildCard(movie){
    const card = document.createElement("div");
    card.className ="movie-card";

    card.innerHTML = `
        <span class='genre-tag'>${movie.genre}</span>
        <h3>${movie.title}</h3>
        <p class="year">${movie.year}</p>
        <span class="stars">${starsFromRating(movie.rating)}</span>
        <div class="card-footer">
            <span class="watched-badge" ${movie.watched ? "watched": "not-watched"}">
            ${movie.watched ? "watched" : "Unwatched"}
            </span>
        </div>    
    `;

    return card;
}

function renderMovies(movieList)
{
    const app = document.getElementById("app");
    app.innerHTML="";

    const grid= document.createElement("div");
    grid.className="movie-grid";
    
    // for(const movie of movieList){
    //     const card = buildCard(movie);
    //     grid.appendChild(card);
    // }

    const cards = movieList.map((movie)=> buildCard(movie));
    cards.forEach((card) => grid.appendChild(card));

    app.appendChild(grid);
}

renderMovies(movies);


// VIDEO 2 ── Destructuring, Spread & Immutability
// We'll refactor using destructuring, add/delete movies
// without ever mutating the original array.

// VIDEO 3 ── map / filter / reduce
// We'll build genre filters, a watchlist toggle,
// and a live stats bar.
