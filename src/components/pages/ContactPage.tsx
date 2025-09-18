import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../GlassCard';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

export function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="pt-24">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1684882735081-d9285998cf83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBneW0lMjBjb250YWN0JTIwcmVjZXB0aW9ufGVufDF8fHx8MTc1ODIyMTEyNHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Barracks Gym Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
        >
          <h1 className="text-6xl md:text-8xl mb-8 tracking-wider">CONTACT</h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Ready to begin your transformation? Get in touch.
          </p>
        </motion.div>
      </section>

      {/* Contact Form and Information */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard>
                {!isSubmitted ? (
                  <>
                    <h2 className="text-3xl mb-8 tracking-wider">GET IN TOUCH</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block mb-2 tracking-wide">First Name *</label>
                          <Input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="bg-white/5 border-white/20"
                            placeholder="Enter first name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block mb-2 tracking-wide">Last Name *</label>
                          <Input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="bg-white/5 border-white/20"
                            placeholder="Enter last name"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block mb-2 tracking-wide">Email *</label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="bg-white/5 border-white/20"
                            placeholder="Enter email address"
                            required
                          />
                        </div>
                        <div>
                          <label className="block mb-2 tracking-wide">Phone</label>
                          <Input
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="bg-white/5 border-white/20"
                            placeholder="Enter phone number"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block mb-2 tracking-wide">Subject *</label>
                        <Input
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="bg-white/5 border-white/20"
                          placeholder="What can we help you with?"
                          required
                        />
                      </div>

                      <div>
                        <label className="block mb-2 tracking-wide">Message *</label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="bg-white/5 border-white/20 min-h-[120px]"
                          placeholder="Tell us about your fitness goals, questions, or how we can help..."
                          required
                        />
                      </div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          type="submit"
                          className="w-full py-4 bg-white text-black hover:bg-white/90 transition-all duration-300 tracking-wide"
                        >
                          SEND MESSAGE
                        </Button>
                      </motion.div>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="text-6xl mb-6">✅</div>
                    <h3 className="text-3xl mb-4 tracking-wider">MESSAGE SENT</h3>
                    <p className="text-white/80">
                      Thank you for reaching out! We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </GlassCard>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <GlassCard>
                <h3 className="text-2xl mb-6 tracking-wider">VISIT US</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">📍</div>
                    <div>
                      <h4 className="mb-2 tracking-wide">Address</h4>
                      <p className="text-white/70">
                        1234 Strength Avenue<br />
                        Elite District, Fitness City<br />
                        State 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">📞</div>
                    <div>
                      <h4 className="mb-2 tracking-wide">Phone</h4>
                      <p className="text-white/70">(555) 123-STRONG</p>
                      <p className="text-white/70">(555) 123-7876</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">✉️</div>
                    <div>
                      <h4 className="mb-2 tracking-wide">Email</h4>
                      <p className="text-white/70">info@barracksGym.com</p>
                      <p className="text-white/70">training@barracksGym.com</p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Hours */}
              <GlassCard>
                <h3 className="text-2xl mb-6 tracking-wider">HOURS</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-white/70">Monday - Friday</span>
                    <span>5:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-white/70">Saturday</span>
                    <span>6:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-white/70">Sunday</span>
                    <span>7:00 AM - 9:00 PM</span>
                  </div>
                  <div className="py-2">
                    <p className="text-sm text-white/60">
                      * Elite and Legend members have 24/7 access
                    </p>
                  </div>
                </div>
              </GlassCard>

              {/* Social Media */}
              <GlassCard>
                <h3 className="text-2xl mb-6 tracking-wider">FOLLOW US</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { platform: 'Instagram', handle: '@BarracksGym', icon: '📷' },
                    { platform: 'Facebook', handle: 'Barracks Gym', icon: '👥' },
                    { platform: 'YouTube', handle: 'Barracks Fitness', icon: '📺' },
                    { platform: 'TikTok', handle: '@BarracksTransform', icon: '🎵' }
                  ].map((social, index) => (
                    <motion.div
                      key={social.platform}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-all duration-300"
                    >
                      <span className="text-2xl">{social.icon}</span>
                      <div>
                        <div className="text-sm">{social.platform}</div>
                        <div className="text-xs text-white/60">{social.handle}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl mb-6 tracking-wider">FIND US</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassCard className="overflow-hidden">
              {/* Placeholder for Google Maps - styled in black and white */}
              <div className="w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <h3 className="text-2xl mb-2 tracking-wider">INTERACTIVE MAP</h3>
                  <p className="text-white/70">
                    Located in the heart of the fitness district
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="mt-6 px-8 py-3 border border-white/30 backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    GET DIRECTIONS
                  </motion.button>
                </div>
                
                {/* Decorative elements to simulate map */}
                <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white/20 rounded-lg"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-white/30 rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/60 rounded-full"></div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
}