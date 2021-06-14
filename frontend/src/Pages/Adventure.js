import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "../Components/Base";
import Card from "../Components/Card";
import { getAdventure } from "../Talker/talker";

export default function Adventure() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  const loadAllMovies = () => {
    getAdventure().then(data => {
      if (data.error)
        setError(data.error);
      else setMovies(data);
    });
  };

  useEffect(() => {
    loadAllMovies();
  }, []);

  return (
    <Base  description="Here are Adventure Movies: ">
      <div className="row text-center">
        <div className="row">
          {movies.map((movie) => {
            return (
              <div key={movie._id} className="col-4 mb-4">
                <Card movie = {movie} />
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
}