import { useState } from 'react';

const Footer = () => {
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/cafee.way?igsh=bW95bDVua3F3em52', '_blank');
  };

  const handleSnapchatClick = () => {
    window.open('https://snapchat.com/t/FpP5t0sL', '_blank');
  };

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch("https://formsubmit.co/ajax/cafeway.cafe@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: "New Feedback from Cafe Way Menu",
            message: feedback
        })
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFeedback('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    
    // Hide success/error message after 4 seconds
    setTimeout(() => {
        setSubmitStatus('idle');
    }, 4000);
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
            
            {submitStatus === 'success' ? (
              <div className="bg-green-900/50 border border-green-500 text-green-300 rounded-lg p-4 text-center h-full flex flex-col justify-center items-center">
                <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Message sent successfully!</p>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="flex flex-col space-y-3">
                <textarea 
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Type your feedback here..." 
                  className="bg-gray-800 text-white rounded-lg p-3 text-sm border border-gray-700 focus:outline-none focus:border-amber-400 resize-none h-24 shadow-inner disabled:opacity-50"
                  style={{ fontFamily: "'Vazirmatn', 'Noto Naskh Arabic', sans-serif" }}
                  required
                  disabled={isSubmitting}
                />
                
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-xs text-center">Failed to send message. Please try again.</p>
                )}
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-2 px-4 rounded-full transition-colors text-sm shadow-lg flex justify-center items-center gap-2 disabled:bg-gray-600 disabled:text-gray-400"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
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
