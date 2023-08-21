import './App.scss';

//Importing Components
import SearchPage from './pages/SearchPage';
import SearchPageBasic from './pages/SearchPageBasic/SearchPageBasic';
import SearchPageOptional from './pages/SearchPageOptional/SearchPageOptional';

//Importing Routes Settings
import { Routes, Route } from 'react-router-dom';
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(SearchPage, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/basic",
    element: /*#__PURE__*/React.createElement(SearchPageBasic, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/develop",
    element: /*#__PURE__*/React.createElement(SearchPageOptional, null)
  })));
}
export default App;
