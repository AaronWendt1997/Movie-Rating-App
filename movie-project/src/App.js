import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import { MovieListProvider } from './hooks/useMovieList';

function App() {
  return (
    <MovieListProvider>
      <NavBar />
      <MovieList />
    </MovieListProvider>
  );
}

export default App;
