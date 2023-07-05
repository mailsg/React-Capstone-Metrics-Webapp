import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';
import Meals from './components/Meals';
import MealsDetail from './components/MealsDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Meals />} />
        <Route path="/about/:categoryId" element={<MealsDetail />} />
      </Routes>
    </div>
  );
}

export default App;
