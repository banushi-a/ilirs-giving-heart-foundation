import { Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="mr-4">
                <img
                  src="/IlirsGivingHeartFoundation.png"
                  alt="Ilir's Giving Heart Foundation Logo"
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-2xl font-bold">
                Ilir's Giving Heart Foundation
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4 max-w-md">
              Spreading love, hope, and support to families in need. Together,
              we create lasting change in our communities through compassion and
              action.
            </p>
            <div className="bg-gray-800 inline-block px-4 py-2 rounded-full">
              <span className="text-red-400 font-bold">#IlirProud</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about-us"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#mission"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Mission
                </a>
              </li>
              <li>
                <a
                  href="#recent-events"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Volunteer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-gray-400" />
                <span className="text-gray-300">
                  ilirsgivingheartfoundation@gmail.org
                </span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-3 text-gray-400" />
                <span className="text-gray-300">
                  ilirsgivingheartfoundation.org
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Ilir's Giving Heart Foundation. All
            rights reserved. Made with ❤️ for our community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
