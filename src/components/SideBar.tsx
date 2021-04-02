import React from "react"
import { Button } from "./Button";


interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

type TransactionInput = Omit<GenreResponseProps, 'name' | 'title' >

interface texto {
  genreMovie:  GenreResponseProps[] ;
  functionClick: (genre: number) => void
 
}


export function SideBar({genreMovie, functionClick}:texto) {
 const genres = genreMovie
 const handleClickButton = functionClick
 
 
 return (
  <nav className="sidebar">
        <span>Watch<p>Me</p></span>
        
        
        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={genre.id === genre.id}
            />
          ))}
        </div>

      </nav>
 )
}

