import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import Products from './pages/Products';
import Contact from './pages/Contact';
import External from './pages/External';

function App() {
  // Simple routing based on pathname
  const pathname = window.location.pathname;
  
  const renderPage = () => {
    switch(pathname) {
      case '/about':
        return <About />;
      case '/research':
        return <Research />;
      case '/products':
        return <Products />;
      case '/contact':
        return <Contact />;
      case '/external':
        return <External />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;