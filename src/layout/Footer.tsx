import { useState } from 'react';

const Footer = () => {
  const [feedback, setFeedback] = useState('');

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/cafee.way?igsh=bW95bDVua3F3em52', '_blank');
  };

  const handleSnapchatClick = () => {
    window.open('https://snapchat.com/t/FpP5t0sL', '_blank');
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) return;
    
    const subject = encodeURIComponent('Feedback for Cafe Way');
    const body = encodeURIComponent(feedback);
    window.location.href = `mailto:cafeway.cafe@gmail.com?subject=${subject}&body=${body}`;
    setFeedback('');
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 border-t border-gray-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
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

          {/* Feedback Form */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-400 font-mono">Send Feedback</h3>
            <form onSubmit={handleFeedbackSubmit} className="flex flex-col space-y-3">
              <textarea 
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Type your feedback here..." 
                className="bg-gray-800 text-white rounded-lg p-3 text-sm border border-gray-700 focus:outline-none focus:border-amber-400 resize-none h-24 shadow-inner"
                style={{ fontFamily: "'Vazirmatn', 'Noto Naskh Arabic', sans-serif" }}
                required
              />
              <button 
                type="submit" 
                className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-2 px-4 rounded-full transition-colors text-sm shadow-lg flex justify-center items-center gap-2"
              >
                <span>Send</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
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
