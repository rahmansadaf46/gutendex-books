import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookPage from './pages/BookPage';
import Home from './pages/Home';
import WishlistPage from './pages/WishlistPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/book/:id" element={<BookPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;