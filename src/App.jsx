import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Members } from './pages/Members';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<Members />} />
          <Route path="/about" element={<Projects />} />
          <Route path="/about" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;


