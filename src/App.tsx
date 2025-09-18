import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

import { SoundProvider } from './components/SoundManager';
import { LoadingSystem } from './components/LoadingSystem';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ProgramsPage } from './components/pages/ProgramsPage';
import { TrainersPage } from './components/pages/TrainersPage';
import { MembershipPage } from './components/pages/MembershipPage';
import { BookingPage } from './components/pages/BookingPage';
import { TestimonialsPage } from './components/pages/TestimonialsPage';
import { ContactPage } from './components/pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [pageTransition, setPageTransition] = useState(false);

  const pages = {
    home: <HomePage />,
    about: <AboutPage />,
    programs: <ProgramsPage />,
    trainers: <TrainersPage />,
    membership: <MembershipPage />,
    booking: <BookingPage />,
    testimonials: <TestimonialsPage />,
    contact: <ContactPage />
  };

  useEffect(() => {
    // Initial loading sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handlePageChange = (newPage: string) => {
    if (newPage === currentPage) return;
    
    setPageTransition(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      setPageTransition(false);
    }, 300);
  };

  if (isLoading) {
    return <LoadingSystem onComplete={() => setIsLoading(false)} />;
  }

  return (
    <SoundProvider>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">

        
        {/* Ambient background effects */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black to-gray-900/50" />
          <motion.div
            className="absolute inset-0 opacity-[0.02]"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <Navigation currentPage={currentPage} setCurrentPage={handlePageChange} />
        
        <AnimatePresence mode="wait">
          <motion.main
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              duration: 0.5, 
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
            className="relative z-10"
          >
            {pages[currentPage]}
          </motion.main>
        </AnimatePresence>

        {/* Page transition overlay */}
        <AnimatePresence>
          {pageTransition && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-white z-40"
              style={{ transformOrigin: "left" }}
            />
          )}
        </AnimatePresence>
        
        <Footer setCurrentPage={handlePageChange} />
      </div>
    </SoundProvider>
  );
}