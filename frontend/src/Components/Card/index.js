import React from "react";
const Card = ({movie}) => {

  const cardTitle = movie.Title;
  const cardGenre = movie.Genre.Name;
  const cardRating = movie.Rating;

  return (
    <div className="card text-white bg-dark border border-info ">
      <div className="card-header lead">{cardTitle}</div>
      <img src="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/03/13153742/RT_300EssentialMovies_700X250.jpg" alt="Movie poster" />
      <div className="card-body">
        <p className="btn btn-success rounded  btn-sm px-4">Rating : {cardRating}</p>
        <div className="row">
          <div className="col-12">
            <button
                onClick={() => {}}
              className="btn btn-block btn-outline-success mt-2 mb-2"
            >
              Genre : {cardGenre}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

