import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';n
import Home from './pages/home';
import About from './pages/about';
import Error from './pages/error';
import Header from './components/header';
import Footer from './components/footer';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
