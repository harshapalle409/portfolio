import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Comments from './components/Comments/Comments';
import Education from './components/Education/Education';

function App() {
  return (
    
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            {/*<Route path="/ai-creations" element={<AICreations />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/comments" element={<Comments />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;