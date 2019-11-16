import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({
  year,
  rating,
  title,
  genres,
  summary,
  poster,
  trailer,
  runtime,
  description_full,
  large_image,
  url
}) {
  let youtube = `https://www.youtube.com/embed/${trailer}?autoplay=1`;
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <a target="_blank" href={youtube} rel="noopener noreferrer">
          <i className="fa fa-youtube-play" aria-hidden="true"></i>
        </a>
        <h5 className="movie__year">{year}</h5>
        {/* <h5 className="movie__genres">{genres}</h5> */}
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <h5 className="movie__rating">Rating: {rating}/10</h5>
        <a
          target="_blank"
          className="movie__more"
          href={url}
          rel="noopener noreferrer"
        >
          <p className="movie__summary">
            {summary.slice(0, 180)} <i class="fa fa-ellipsis-h"></i>
          </p>
        </a>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  // genres: PropTypes.string.isRequired, // added
  rating: PropTypes.number.isRequired, // added
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  trailer: PropTypes.string, // added
  runtime: PropTypes.number.isRequired, // added
  description_full: PropTypes.string.isRequired, // added,
  large_image: PropTypes.string.isRequired, // added,
  url: PropTypes.string.isRequired // added
};

export default Movie;
