

const Footer = () => {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/cafee.way?igsh=bW95bDVua3F3em52', '_blank');
  };

  const handleSnapchatClick = () => {
    window.open('https://snapchat.com/t/FpP5t0sL', '_blank');
  };
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 border-t border-gray-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-400 font-mono">Contact Us</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">Marena Street</p>
              <p className="mb-2">Café Way, Kelar</p>
              <p className="mb-2">Phone : 0771 969 6624</p>
              <p className="mb-2">Phone : 0771 157 9933</p>

            
            </address>
          </div>

          {/* Social Media Placeholder */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-400 font-mono">Follow Us</h3>
            <div className="flex space-x-4">
              <div
                className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer"
                onClick={handleInstagramClick}
              >
                <img src="/icons/instagram.svg" loading="lazy" alt="Instagram" className="w-20 h-20" />
              </div>
              <div
                className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer"
                onClick={handleSnapchatClick}
              >
                <img src="/icons/snapchat-logo.svg" loading="lazy" alt="Snapchat" className="w-20 h-20" />
              </div>
            </div>
          </div>

          {/* QR Code */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-400 font-mono">Order Online</h3>
            <div className=" border-2 border-gray-600 rounded-lg w-32 h-32 flex items-center justify-center overflow-hidden">
              <img
                src="/QRCode/qr-code.png"
                alt="QR Code for online ordering"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="mt-2 text-gray-300">Scan to order online</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Cafe Way. Created by Aruba Technology.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
