import { useEffect } from 'react';
import VideoSection from './components/VideoSection';
import Header from './layout/Header';
import MenuSection from './components/MenuSection';
import Footer from './layout/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    document.addEventListener('contextmenu', handleContextMenu);
    
    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <VideoSection />
      <MenuSection />
      <Footer />
    </div>
  );
}

export default App;
