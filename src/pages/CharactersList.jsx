import React, { useState } from "react";
import marvelCharacters from "../data/marvelCharacters";
import SearchBar from "../Components/SearchBar";

const CharacterList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCharacters = marvelCharacters.filter((char) =>
    char.character.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <div className="row">
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map((c) => (
            <div key={c.id} className="col-md-4 mb-4 d-flex">
              <div className="card h-100 w-100">
                <img
                  src={c.image}
                  className="cardImage card-img-top"
                  alt={c.character}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{c.character}</h5>
                  <p className="card-text">
                    <em>Actor: {c.actor}</em>
                  </p>
                  <p className="card-text">{c.description}</p>
                  <div className="mt-auto">
                    <h6>Appearances:</h6>
                    <ul>
                      {c.movies.map((m, i) => (
                        <li key={i}>{m}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No characters found.</p>
        )}
      </div>
    </div>
  );
};

export default CharacterList;
