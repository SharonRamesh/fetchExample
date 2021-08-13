import React,{useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [moviesData, setMovies] = useState([]);
  const [loading, loadingUpdate] = useState(false);

  const moviesFetchHandler = () => {
    loadingUpdate(true);
    fetch("https://swapi.dev/api/films/").then(response => {return response.json()}).then(data => {setMovies(data.results);console.log(data.results);loadingUpdate(false);});
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={moviesFetchHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={moviesData} loading={loading}/>
      </section>
    </React.Fragment>
  );
}

export default App;
