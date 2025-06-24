import React from 'react';
import { Coffee, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nokka-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8" />
              <span className="text-2xl font-bold">Nokka Coffee</span>
            </div>
            <p className="text-nokka-cream leading-relaxed">
              Premium Ethiopian coffee from the highlands of West Guji Zone. 
              Committed to quality, sustainability, and supporting local farmers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="/about" className="block text-nokka-cream hover:text-white transition-colors">
                About Us
              </a>
              <a href="/source" className="block text-nokka-cream hover:text-white transition-colors">
                Our Source
              </a>
              <a href="/gallery" className="block text-nokka-cream hover:text-white transition-colors">
                Gallery
              </a>
              <a href="/contact" className="block text-nokka-cream hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-nokka-cream hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-nokka-cream hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-nokka-cream hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-nokka-cream hover:text-white transition-colors">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-nokka-cream/20 mt-8 pt-8 text-center">
          <p className="text-nokka-cream">
            &copy; {currentYear} Nokka Coffee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;