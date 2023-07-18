import './App.css';
import Header from './Components/Header';
import Cover from './Components/Cover';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import Menu from './Components/Menu';
import Contact from './Components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteSwitch from './RouteSwitch';

function App() {
  return (
    <div className="App">
      <Header />
      <Cover />
        <RouteSwitch />
      <Footer />
    </div>
  );
}

export default App;
