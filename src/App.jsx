import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
 // Import the new Home layout component
import ComparePage from './pages/ComparePage';
import WishlistPage from './pages/WishlistPage';
import { CompareProvider } from './context/CompareContext';
import { WishlistProvider } from './context/WishlistContext';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <CompareProvider>
      <WishlistProvider>
        <BrowserRouter>
          {/* Header stays outside Routes because it shows up everywhere */}
          <Header /> 
          
          <Routes>
            {/* The root page now cleanly encapsulates the Hero and all sub-sections */}
            <Route path="/" element={<Home />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
          </Routes>
          
          {/* If you have a global Footer component, place it here outside <Routes> */}
          {/* <Footer /> */}

        </BrowserRouter>
      </WishlistProvider>
    </CompareProvider>
  );
}

export default App;