import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../GlassCard';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function MembershipPage() {
  const plans = [
    {
      name: "WARRIOR",
      price: "$89",
      period: "month",
      description: "Perfect for dedicated individuals ready to transform",
      features: [
        "Unlimited gym access",
        "Group classes included",
        "Locker room access",
        "Basic nutrition guidance",
        "Mobile app access"
      ],
      recommended: false,
      image: "https://images.unsplash.com/photo-1632077804406-188472f1a810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NTgyMTUzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "ELITE",
      price: "$149",
      period: "month",
      description: "Most popular choice for serious athletes",
      features: [
        "Everything in Warrior",
        "Personal training sessions (2/month)",
        "Priority class booking",
        "Nutrition consultation",
        "Recovery services access",
        "Guest passes (2/month)",
        "Equipment rental included"
      ],
      recommended: true,
      image: "https://images.unsplash.com/photo-1750698545009-679820502908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZ3xlbnwxfHx8fDE3NTgxODAyNjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "LEGEND",
      price: "$249",
      period: "month",
      description: "Ultimate experience for the most dedicated",
      features: [
        "Everything in Elite",
        "Unlimited personal training",
        "Private locker assignment",
        "Meal planning service",
        "Body composition tracking",
        "Unlimited guest passes",
        "Exclusive member events",
        "24/7 facility access"
      ],
      recommended: false,
      image: "https://images.unsplash.com/photo-1734630341082-0fec0e10126c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB0cmFpbmluZyUyMHN0cmVuZ3RoJTIwZGFya3xlbnwxfHx8fDE3NTgyMjEwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1576491742123-735882d4ca7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBpbnRlcmlvciUyMG1vZGVybiUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NTgxOTM2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Barracks Gym Membership"
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
          <h1 className="text-6xl md:text-8xl mb-8 tracking-wider">MEMBERSHIP</h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Choose your path to transformation
          </p>
        </motion.div>
      </section>

      {/* Membership Plans */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl mb-6 tracking-wider">CHOOSE YOUR LEVEL</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Every membership includes access to our world-class facility and expert guidance
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative ${plan.recommended ? 'lg:-mt-8' : ''}`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-white text-black px-6 py-2 text-sm tracking-wide">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <GlassCard className={`h-full relative overflow-hidden ${
                  plan.recommended ? 'border-white/30 bg-white/10' : ''
                }`}>
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-10">
                    <ImageWithFallback
                      src={plan.image}
                      alt={plan.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <h3 className="text-3xl mb-4 tracking-wider">{plan.name}</h3>
                      <div className="mb-4">
                        <span className="text-5xl">{plan.price}</span>
                        <span className="text-white/60 text-lg">/{plan.period}</span>
                      </div>
                      <p className="text-white/70">{plan.description}</p>
                    </div>

                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-white rounded-full mr-4 flex-shrink-0"></span>
                          <span className="text-white/80">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-4 tracking-wide transition-all duration-300 ${
                        plan.recommended
                          ? 'bg-white text-black hover:bg-white/90'
                          : 'border border-white/30 backdrop-blur-md bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      START {plan.name} MEMBERSHIP
                    </motion.button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl mb-6 tracking-wider">ALL MEMBERSHIPS INCLUDE</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🏋️",
                title: "PREMIUM EQUIPMENT",
                description: "State-of-the-art machines and free weights"
              },
              {
                icon: "👥",
                title: "GROUP CLASSES",
                description: "High-energy classes led by expert instructors"
              },
              {
                icon: "🧘",
                title: "RECOVERY ZONE",
                description: "Dedicated space for stretching and mobility"
              },
              {
                icon: "📱",
                title: "MOBILE APP",
                description: "Track progress and book classes on the go"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <GlassCard className="text-center h-full">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg mb-3 tracking-wide">{benefit.title}</h3>
                  <p className="text-white/70 text-sm">{benefit.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl mb-6 tracking-wider">FREQUENTLY ASKED</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Can I cancel my membership anytime?",
                answer: "Yes, you can cancel with 30 days notice. No long-term contracts required."
              },
              {
                question: "Are there any joining fees?",
                answer: "No joining fees. Pay only your first month's membership fee to get started."
              },
              {
                question: "Can I freeze my membership?",
                answer: "Yes, memberships can be frozen for up to 3 months per year for medical or travel reasons."
              },
              {
                question: "What are the gym hours?",
                answer: "We're open 5 AM - 11 PM Monday-Friday, 6 AM - 10 PM weekends. Elite and Legend members get 24/7 access."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <GlassCard>
                  <h3 className="text-xl mb-3 tracking-wide">{faq.question}</h3>
                  <p className="text-white/70">{faq.answer}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}