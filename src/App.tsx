import VideoSection from './components/VideoSection';
import Header from './layout/Header';
import MenuSection from './components/MenuSection';
import Footer from './layout/Footer';
import './App.css';

function App() {
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
