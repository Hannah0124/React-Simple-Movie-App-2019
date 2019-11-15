import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  // We need to tell JS that componentDidMount might take a bit to finish, so we want to wait for it.
  // To wait for it in JS, we need to add "async() ~ await"
  // The function is asynchronous (비동기) which means you have to wait for it.
  // Inside of the function, "what do you want me to wait for? axios". So, wait for axios to finish. (await axios.get("https://~~""))

  getMovies = async () => {
    // AS IS: const movies =
    // To get "movies.data.data.movies, change it to the below:
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    // Update movies in state
    // setState({stateMovies: axiosMovies})
    // setState({movies: movies})
    this.setState({ movies, isLoading: false });
  };
  // When component did mount, we are going to get movies
  componentDidMount() {
    this.getMovies();
  }

  render() {
    // Not to use "this.state.isLoading", we can use this below instead
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map(movie => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.id}
                  rating={movie.id}
                  title={movie.title}
                  genres={movie.genres.join(",")}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              );
            })}
      </div>
    );
  }
}

export default App;
