import './App.scss';

//Importing Components
import SearchPage from './pages/SearchPage';
import SearchPageBasic from './pages/SearchPageBasic/SearchPageBasic';
import SearchPageOptional from './pages/SearchPageOptional/SearchPageOptional';

//Importing Routes Settings
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/basic" element={<SearchPageBasic />} />
        <Route path="/develop" element={<SearchPageOptional />} />
      </Routes>
    </div>
  );
}

export default App;