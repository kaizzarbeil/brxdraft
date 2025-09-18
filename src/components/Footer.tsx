import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  const footerLinks = {
    'Gym': [
      { label: 'About', page: 'about' },
      { label: 'Programs', page: 'programs' },
      { label: 'Trainers', page: 'trainers' },
      { label: 'Membership', page: 'membership' }
    ],
    'Services': [
      { label: 'Personal Training', page: 'booking' },
      { label: 'Group Classes', page: 'programs' },
      { label: 'Nutrition Coaching', page: 'contact' },
      { label: 'Recovery Services', page: 'contact' }
    ],
    'Connect': [
      { label: 'Success Stories', page: 'testimonials' },
      { label: 'Contact Us', page: 'contact' },
      { label: 'Book Session', page: 'booking' },
      { label: 'Schedule Tour', page: 'contact' }
    ]
  };

  const socialLinks = [
    { name: 'Instagram', url: '#' },
    { name: 'Facebook', url: '#' },
    { name: 'YouTube', url: '#' },
    { name: 'TikTok', url: '#' }
  ];

  return (
    <footer className="relative bg-black/90 backdrop-blur-md border-t border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer mb-6"
              onClick={() => setCurrentPage('home')}
            >
              <h2 className="text-4xl tracking-wider mb-4">BARRACKS</h2>
            </motion.div>
            <p className="text-white/95 leading-relaxed mb-6 max-w-md">
              Where discipline meets transformation. Join the elite community of 
              individuals committed to exceeding their limits and achieving greatness.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-white/95">
              <div className="flex items-center space-x-3">
                <span className="w-4 h-4 bg-white/30 rounded-full"></span>
                <span>1234 Strength Avenue, Elite District</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-4 h-4 bg-white/30 rounded-full"></span>
                <span>(555) 123-STRONG</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-4 h-4 bg-white/30 rounded-full"></span>
                <span>info@barracksGym.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xl mb-6 tracking-wider text-white">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => setCurrentPage(link.page)}
                      className="text-white/95 hover:text-white transition-colors duration-300 text-left"
                    >
                      {link.label}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.url}
                  className="w-10 h-10 bg-white/10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 text-white/95 text-xs tracking-wide"
                  title={social.name}
                >
                  {social.name.slice(0, 2).toUpperCase()}
                </motion.a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center space-x-4">
              <span className="text-white text-sm">Stay updated:</span>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="px-4 py-2 bg-white/10 border border-white/30 rounded-l-lg text-sm focus:outline-none focus:border-white/50 min-w-[200px] text-white placeholder-white/70"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-white text-black rounded-r-lg text-sm hover:bg-white/90 transition-all duration-300 tracking-wide"
                >
                  SUBSCRIBE
                </motion.button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-white/10">
            <div className="text-sm text-white/95 mb-4 md:mb-0 tracking-wide">
              © 2024 BARRACKS GYM. ALL RIGHTS RESERVED.
            </div>
            
            <div className="flex space-x-6 text-sm text-white/95">
              <button className="hover:text-white transition-colors tracking-wide uppercase">Privacy Policy</button>
              <button className="hover:text-white transition-colors tracking-wide uppercase">Terms of Service</button>
              <button className="hover:text-white transition-colors tracking-wide uppercase">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 glass-effect"
      >
        <span className="text-white text-xl">↑</span>
      </motion.button>
    </footer>
  );
}