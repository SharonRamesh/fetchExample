import React,{useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [moviesData, setMovies] = useState([]);
  const [loading, loadingUpdate] = useState(false);
  const [error, setError] = useState(null);

  const moviesFetchHandler = () => {
    loadingUpdate(true);
    setError(null);
    fetch("https://swapi.dev/api/films/")
    .then(response => {
      if(response.ok)
        return response.json()
      else
        throw new Error('Something Went Wrong!!');
    })
    .then(data => {
      setMovies(data.results);
      console.log(data.results);
      loadingUpdate(false);
    }).catch(error => {
      setError(error.message);
    });
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={moviesFetchHandler} disabled={error ? false : ( loading ? true : false)   }>Fetch Movies</button>
      </section>
      <section>
        {error ? <h3>{error}</h3> : 
        <MoviesList movies={moviesData} loading={loading}/> }
      </section>
    </React.Fragment>
  );
}

export default App;
