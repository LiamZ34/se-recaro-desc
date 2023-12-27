// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
// import Services from './Services';
// import Contact from './Contact';
// import Testimonials from './Testimonials';
// import Footer from './Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
