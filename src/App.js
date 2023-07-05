import { Route, Routes } from 'react-router-dom';
// import Image from 'react-bootstrap/Image';
// import './header_img.png';
import Navigation from './components/Navigation';
import './App.css';
import Meals from './components/Meals';
import MealsDetail from './components/MealsDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="header" />
      <Routes>
        <Route exact path="/" element={<Meals />} />
        <Route path="/about/:categoryId" element={<MealsDetail />} />
      </Routes>
    </div>
  );
}

export default App;
