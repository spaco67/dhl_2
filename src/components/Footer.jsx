import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">How Airbnb works</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Newsroom</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Investors</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Diversity & Belonging</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Accessibility</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Airbnb Associates</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Frontline Stays</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Host</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Host your home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Host an Online Experience</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Responsible hosting</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Resource Center</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Cancellation options</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Neighborhood Support</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Trust & Safety</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">© 2023 Airbnb, Inc. All rights reserved</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">FB</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">TW</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">IG</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">YT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
aPaperPlane />
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {currentYear} Airbnb, Inc. All rights reserved</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-200 transition duration-300"><FaFacebookF size={24} /></a>
              <a href="#" className="hover:text-gray-200 transition duration-300"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-gray-200 transition duration-300"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-gray-200 transition duration-300"><FaYoutube size={24} /></a>
              <a href="#" className="hover:text-gray-200 transition duration-300"><FaLinkedinIn size={24} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
