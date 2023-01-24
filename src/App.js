
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
// import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Services from './components/services/Services';

function App() {
  return (
    <BrowserRouter>
      <Header />

      {/* <Services /> */}

      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/" element={<Home />} />
      </Routes>

      {/* home */}
      {/* services */}
      {/* testimornial */}
      {/* order */}

      <Footer />

    </BrowserRouter>
  );
}

export default App;
