import React from "react";
import PropTypes from "prop-types";

function Movie({id, year, rating, title, genres, summary, poster}) {
  return <h4>{title}</h4>
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired, // added
  title: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired, // added
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
}

export default Movie;

