import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "../Components/Base";
import Card from "../Components/Card";
import { getCrime } from "../Talker/talker";

export default function Crime() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  const loadAllMovies = () => {
    getCrime().then(data => {
      if (data.error)
        setError(data.error);
      else setMovies(data);
    });
  };

  useEffect(() => {
    loadAllMovies();
  }, []);

  return (
    <Base  description="Here are Crime Movies: ">
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