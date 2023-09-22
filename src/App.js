import './App.css';
import { Route, Routes } from 'react-router-dom';
import {Home, MovieDetails, PageNotFound,Popular,Search, Top, Upcoming} from './pages';
import Header from './components/Header';
function App() {
  return (
    <div>
      <Header />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movieDetails/:id' element={<MovieDetails />} />
      <Route path='*' element={<PageNotFound />} />
      <Route path='/search' element={<Search />} />
      <Route path='/popular' element={<Popular />} />
      <Route path='/top' element={<Top />} />
      <Route path='/upcoming' element={<Upcoming />} />
     </Routes>
    </div>
  );
}

export default App;
