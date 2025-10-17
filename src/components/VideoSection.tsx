import { useState } from 'react';

const VideoSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const menuElement = document.getElementById('menu');
    menuElement?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video background */}
      <video
          autoPlay
          loop
          muted
          preload="metadata"
          poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzMzMzMzMyIgc3RvcC1vcGFjaXR5PSIwLjgiIC8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxYTFhMWEiIHN0b3Atb3BhY2l0eT0iMC45IiBvZmZzZXQ9IjEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIiAvPgo8L3N2Zz4="
          onLoadedData={handleVideoLoad}
          className="absolute inset-0 w-full h-full object-cover"
          playsInline // Add this to prevent fullscreen playback on mobile
          controls={false} // Ensure no default controls appear
          x-webkit-airplay="allow" // For Safari iOS
          webkit-playsinline="true" // For Safari iOS
        >
          <source src="/Video/MenuVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      {/* Loading spinner */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-black z-20">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-amber-400 border-t-transparent"></div>
        </div>
      )}

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">Cafe Way</h1>
        <p className="text-xl md:text-2xl mb-8">Fresh Coffee, Cozy Vibes</p>

      {/* "See our menu" button */}
        <button
          onClick={scrollToMenu}
          className="bg-gray-800 bg-opacity-80 backdrop-blur-md font-bold py-4 px-10 rounded-2xl text-lg shadow-lg border border-amber-400 hover:bg-amber-600 transition-colors relative overflow-hidden"
        >
          <span className="relative text-amber-400 font-mono z-10">See Our Menu</span>
          <div className="absolute inset-0 bg-gray-700/50 backdrop-blur-sm"></div>
        </button>
      </div>
    </div>
  );
};

export default VideoSection;
