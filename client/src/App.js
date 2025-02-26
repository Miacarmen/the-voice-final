import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages & Components
import backgroundImg from './assets/stars5.jpg';
import Nav from './components/navigation/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Author from './pages/Author';
import ArtistBio from './pages/ArtistBio';
import BookPreview from './pages/BookPreview';
import Media from './pages/Media';
import NotFound from './pages/NotFound';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Router>
        <div
          className='App bg-base-content'
          style={{
            backgroundImage: `url(${backgroundImg})`,
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          alt='Background Image Alt Text'
        >
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/author' element={<Author />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/artistbio' element={<ArtistBio />} />
            <Route path='/bookexcerpt' element={<BookPreview />} />
            <Route path='/media' element={<Media />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
