const Footer = () => {
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
              <p className="mb-2">Phone: (555) 123-4567</p>
            
            </address>
          </div>

          {/* Social Media Placeholder */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-400 font-mono">Follow Us</h3>
            <div className="flex space-x-4">
              <div className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center hover:bg-amber-600 transition-colors">
                <span className="text-lg">f</span>
              </div>
              <div className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center hover:bg-amber-600 transition-colors">
                <span className="text-lg">i</span>
              </div>
              <div className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center hover:bg-amber-600 transition-colors">
                <span className="text-lg">t</span>
              </div>
            </div>
          </div>

          {/* QR Code */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-400 font-mono">Order Online</h3>
            <div className=" border-2 border-gray-600 rounded-lg w-32 h-32 flex items-center justify-center overflow-hidden">
              <img
                src="/QRCode/frame.png"
                alt="QR Code for online ordering"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="mt-2 text-gray-300">Scan to order online</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Cafe Way. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
