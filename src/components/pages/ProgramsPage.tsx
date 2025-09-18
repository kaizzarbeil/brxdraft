import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '../GlassCard';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function ProgramsPage() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programs = [
    {
      id: 1,
      title: "STRENGTH TRAINING",
      subtitle: "Build Raw Power",
      description: "Develop maximum strength and muscle mass through progressive overload and compound movements.",
      image: "https://images.unsplash.com/photo-1639503997164-a697df7703c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9zc2ZpdCUyMGJhcmJlbGwlMjBsaWZ0aW5nfGVufDF8fHx8MTc1ODIyMTA0MHww&ixlib=rb-4.1.0&q=80&w=1080",
      details: {
        duration: "60-75 minutes",
        intensity: "High",
        equipment: "Barbells, Dumbbells, Machines",
        benefits: ["Increased muscle mass", "Enhanced bone density", "Improved metabolism", "Greater functional strength"]
      }
    },
    {
      id: 2,
      title: "HIIT CONDITIONING",
      subtitle: "Maximum Intensity",
      description: "High-intensity interval training designed to maximize cardiovascular fitness and fat burning.",
      image: "https://images.unsplash.com/photo-1632077804406-188472f1a810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NTgyMTUzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      details: {
        duration: "45 minutes",
        intensity: "Very High",
        equipment: "Kettlebells, Battle Ropes, Bodyweight",
        benefits: ["Rapid fat loss", "Improved VO2 max", "Enhanced endurance", "Time-efficient workouts"]
      }
    },
    {
      id: 3,
      title: "PERSONAL COACHING",
      subtitle: "Elite 1-on-1 Training",
      description: "Personalized training programs with dedicated coaching for accelerated results.",
      image: "https://images.unsplash.com/photo-1750698545009-679820502908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZ3xlbnwxfHx8fDE3NTgxODAyNjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      details: {
        duration: "60 minutes",
        intensity: "Customized",
        equipment: "Full gym access",
        benefits: ["Personalized programming", "Form optimization", "Faster results", "Injury prevention"]
      }
    },
    {
      id: 4,
      title: "CROSSFIT",
      subtitle: "Functional Fitness",
      description: "Constantly varied, high-intensity functional movements for overall fitness.",
      image: "https://images.unsplash.com/photo-1734630341082-0fec0e10126c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB0cmFpbmluZyUyMHN0cmVuZ3RoJTIwZGFya3xlbnwxfHx8fDE3NTgyMjEwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      details: {
        duration: "60 minutes",
        intensity: "High",
        equipment: "Olympic bars, Rings, Boxes",
        benefits: ["Improved work capacity", "Enhanced mobility", "Community support", "Mental toughness"]
      }
    },
    {
      id: 5,
      title: "MOBILITY & RECOVERY",
      subtitle: "Optimize Performance",
      description: "Active recovery sessions focused on flexibility, mobility, and injury prevention.",
      image: "https://images.unsplash.com/photo-1576491742123-735882d4ca7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBpbnRlcmlvciUyMG1vZGVybiUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NTgxOTM2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      details: {
        duration: "45 minutes",
        intensity: "Low-Moderate",
        equipment: "Foam rollers, Bands, Mats",
        benefits: ["Improved flexibility", "Faster recovery", "Injury prevention", "Stress reduction"]
      }
    },
    {
      id: 6,
      title: "ATHLETIC PERFORMANCE",
      subtitle: "Elite Training",
      description: "Sport-specific training for athletes looking to dominate their competition.",
      image: "https://images.unsplash.com/photo-1734668484998-c943d1fcb48a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB0ZXN0aW1vbmlhbCUyMHRyYW5zZm9ybWF0aW9ufGVufDF8fHx8MTc1ODIyMTEyNHww&ixlib=rb-4.1.0&q=80&w=1080",
      details: {
        duration: "90 minutes",
        intensity: "Very High",
        equipment: "Specialized athletic gear",
        benefits: ["Sport-specific strength", "Enhanced power output", "Improved agility", "Competitive edge"]
      }
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1632077804406-188472f1a810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NTgyMTUzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Training Programs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-6xl md:text-8xl mb-4 tracking-wider">PROGRAMS</h1>
          <p className="text-xl text-white/90">Elite training for every goal</p>
        </motion.div>
      </section>

      {/* Programs Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedProgram(program)}
              >
                <div className="relative h-96 overflow-hidden rounded-2xl">
                  <ImageWithFallback
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="absolute bottom-0 left-0 right-0 p-6"
                  >
                    <h3 className="text-2xl mb-2 tracking-wide">{program.title}</h3>
                    <p className="text-white/80 mb-3">{program.subtitle}</p>
                    <p className="text-sm text-white/60">{program.description}</p>
                    
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      className="absolute top-4 right-4 w-8 h-8 border border-white/50 rounded-full flex items-center justify-center"
                    >
                      <span className="text-white">→</span>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Detail Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProgram(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full"
            >
              <GlassCard className="relative">
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="absolute top-4 right-4 w-8 h-8 text-white/60 hover:text-white"
                >
                  ✕
                </button>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <ImageWithFallback
                      src={selectedProgram.image}
                      alt={selectedProgram.title}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <h2 className="text-3xl mb-2 tracking-wide">{selectedProgram.title}</h2>
                    <p className="text-xl text-white/80 mb-4">{selectedProgram.subtitle}</p>
                    <p className="text-white/70 mb-6 leading-relaxed">{selectedProgram.description}</p>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-white/60">Duration:</span>
                        <span>{selectedProgram.details.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Intensity:</span>
                        <span>{selectedProgram.details.intensity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Equipment:</span>
                        <span>{selectedProgram.details.equipment}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="mb-3 tracking-wide">BENEFITS</h4>
                      <ul className="space-y-2">
                        {selectedProgram.details.benefits.map((benefit, index) => (
                          <li key={index} className="text-white/70 flex items-center">
                            <span className="w-2 h-2 bg-white/50 rounded-full mr-3"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-8 px-8 py-3 bg-white text-black hover:bg-white/90 transition-all duration-300 tracking-wide"
                    >
                      BOOK THIS PROGRAM
                    </motion.button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}