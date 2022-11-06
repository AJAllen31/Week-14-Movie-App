import './App.css';
import MovieList from './components/MovieList';

function App() {
  return (
    <div id='App'>
      <header className="welcome">
        <h1>Anime Movie Reviews</h1>
        <br />
        <h2>Review your favorite Anime films today!!!</h2>
      </header>
      <div className='app'>
        <MovieList />
      </div>
    </div>
  );
}

export default App;