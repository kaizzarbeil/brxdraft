import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '../GlassCard';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function TrainersPage() {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const trainers = [
    {
      id: 1,
      name: "MARCUS STEEL",
      specialty: "Strength & Powerlifting",
      certifications: ["CSCS", "USAPL Coach", "Precision Nutrition"],
      experience: "8 years",
      image: "https://images.unsplash.com/photo-1750698545009-679820502908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5lciUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1ODIyMTEyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Former competitive powerlifter with a passion for building raw strength. Marcus has helped over 200 clients achieve their strength goals.",
      achievements: ["National Powerlifting Record Holder", "Master Trainer Certification", "Specialized in Olympic Lifting"],
      philosophy: "Strength isn't just physical - it's mental. Every rep builds character."
    },
    {
      id: 2,
      name: "SARAH THUNDER",
      specialty: "HIIT & Conditioning",
      certifications: ["NASM-CPT", "HIIT Specialist", "TRX Certified"],
      experience: "6 years",
      image: "https://images.unsplash.com/photo-1734668484998-c943d1fcb48a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB0ZXN0aW1vbmlhbCUyMHRyYW5zZm9ybWF0aW9ufGVufDF8fHx8MTc1ODIyMTEyNHww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "High-energy trainer specializing in metabolic conditioning and fat loss. Sarah's classes are legendary for their intensity.",
      achievements: ["Regional CrossFit Competitor", "Metabolic Conditioning Expert", "Injury Prevention Specialist"],
      philosophy: "Pain is temporary, but the pride of pushing through lasts forever."
    },
    {
      id: 3,
      name: "ALEX FORGE",
      specialty: "Athletic Performance",
      certifications: ["CSCS", "FMS", "Olympic Lifting Coach"],
      experience: "10 years",
      image: "https://images.unsplash.com/photo-1639503997164-a697df7703c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9zc2ZpdCUyMGJhcmJlbGwlMjBsaWZ0aW5nfGVufDF8fHx8MTc1ODIyMTA0MHww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Former college athlete turned performance coach. Alex works with professional athletes and weekend warriors alike.",
      achievements: ["Former D1 Football Player", "Performance Specialist", "Rehabilitation Expert"],
      philosophy: "Excellence isn't a skill, it's an attitude applied consistently."
    },
    {
      id: 4,
      name: "MAYA IRON",
      specialty: "Functional Movement",
      certifications: ["FMS", "SFMA", "Yoga Instructor"],
      experience: "7 years",
      image: "https://images.unsplash.com/photo-1734630341082-0fec0e10126c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB0cmFpbmluZyUyMHN0cmVuZ3RoJTIwZGFya3xlbnwxfHx8fDE3NTgyMjEwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Movement quality specialist focused on building functional strength and preventing injuries through better movement patterns.",
      achievements: ["Movement Screen Expert", "Corrective Exercise Specialist", "Mobility & Flexibility Coach"],
      philosophy: "Move well first, then move often. Quality over quantity, always."
    },
    {
      id: 5,
      name: "TYLER BEAST",
      specialty: "Bodybuilding & Physique",
      certifications: ["NASM-CPT", "Precision Nutrition", "Contest Prep Coach"],
      experience: "9 years",
      image: "https://images.unsplash.com/photo-1632077804406-188472f1a810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NTgyMTUzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Competitive bodybuilder with expertise in muscle building, contest prep, and aesthetic development.",
      achievements: ["Regional Bodybuilding Champion", "Nutrition Specialist", "Physique Transformation Expert"],
      philosophy: "Consistency beats perfection. Small daily improvements lead to stunning results."
    },
    {
      id: 6,
      name: "JORDAN APEX",
      specialty: "CrossFit & Functional Fitness",
      certifications: ["CF-L2", "USAW", "Gymnastics Certification"],
      experience: "5 years",
      image: "https://images.unsplash.com/photo-1576491742123-735882d4ca7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBpbnRlcmlvciUyMG1vZGVybiUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NTgxOTM2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Young but experienced CrossFit coach with a passion for functional fitness and community building.",
      achievements: ["CrossFit Games Qualifier", "Youth Athletics Coach", "Functional Movement Expert"],
      philosophy: "Fitness is a journey, not a destination. Embrace the process and trust it."
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1750698545009-679820502908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5lciUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1ODIyMTEyM3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Elite Trainers"
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
          <h1 className="text-6xl md:text-8xl mb-4 tracking-wider">TRAINERS</h1>
          <p className="text-xl text-white/90">Elite coaches. Proven results.</p>
        </motion.div>
      </section>

      {/* Trainers Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <motion.div
                key={trainer.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedTrainer(trainer)}
              >
                <GlassCard hover={true} className="relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative"
                  >
                    <ImageWithFallback
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-64 object-cover rounded-xl mb-6 group-hover:grayscale-0 grayscale transition-all duration-500"
                    />
                    
                    <div className="space-y-3">
                      <h3 className="text-2xl tracking-wide">{trainer.name}</h3>
                      <p className="text-white/80">{trainer.specialty}</p>
                      <p className="text-sm text-white/60">{trainer.experience} experience</p>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        {trainer.certifications.slice(0, 2).map((cert, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 text-xs border border-white/20 rounded-full text-white/70"
                          >
                            {cert}
                          </span>
                        ))}
                        {trainer.certifications.length > 2 && (
                          <span className="px-2 py-1 text-xs border border-white/20 rounded-full text-white/70">
                            +{trainer.certifications.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      className="absolute top-4 right-4 w-8 h-8 border border-white/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <span className="text-white">→</span>
                    </motion.div>
                  </motion.div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer Detail Modal */}
      <AnimatePresence>
        {selectedTrainer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedTrainer(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <GlassCard className="relative">
                <button
                  onClick={() => setSelectedTrainer(null)}
                  className="absolute top-4 right-4 w-8 h-8 text-white/60 hover:text-white z-10"
                >
                  ✕
                </button>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <ImageWithFallback
                      src={selectedTrainer.image}
                      alt={selectedTrainer.name}
                      className="w-full h-80 object-cover rounded-xl mb-6"
                    />
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-2 tracking-wide">CERTIFICATIONS</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedTrainer.certifications.map((cert, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-sm border border-white/20 rounded-full text-white/80"
                            >
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="mb-2 tracking-wide">ACHIEVEMENTS</h4>
                        <ul className="space-y-2">
                          {selectedTrainer.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-white/70 flex items-center text-sm">
                              <span className="w-2 h-2 bg-white/50 rounded-full mr-3 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl mb-2 tracking-wide">{selectedTrainer.name}</h2>
                      <p className="text-xl text-white/80 mb-2">{selectedTrainer.specialty}</p>
                      <p className="text-white/60">{selectedTrainer.experience} experience</p>
                    </div>
                    
                    <div>
                      <h4 className="mb-3 tracking-wide">BIOGRAPHY</h4>
                      <p className="text-white/70 leading-relaxed">{selectedTrainer.bio}</p>
                    </div>
                    
                    <div>
                      <h4 className="mb-3 tracking-wide">PHILOSOPHY</h4>
                      <blockquote className="text-white/80 italic leading-relaxed border-l-2 border-white/30 pl-4">
                        "{selectedTrainer.philosophy}"
                      </blockquote>
                    </div>
                    
                    <div className="space-y-3 pt-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-8 py-3 bg-white text-black hover:bg-white/90 transition-all duration-300 tracking-wide"
                      >
                        BOOK SESSION WITH {selectedTrainer.name.split(' ')[0]}
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-8 py-3 border border-white/30 backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-300 tracking-wide"
                      >
                        VIEW SCHEDULE
                      </motion.button>
                    </div>
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