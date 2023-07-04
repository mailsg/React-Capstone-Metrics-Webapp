import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<h1>Home</h1>} />
        <Route path="/meals" element={<h1>Meals</h1>} />
      </Routes>
    </div>
  );
}

export default App;
