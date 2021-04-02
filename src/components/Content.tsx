import React from "react";
import { MovieCard } from "./MovieCard";

interface GenreResponseProps {
  title: string;
}
interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface text {
  genre: GenreResponseProps,
  selectId: MovieProps[],
}




export function Content({genre, selectId}:text) {
  const selectedGenre = genre;
  const movies = selectId;


return(
  <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
)}