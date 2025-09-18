import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../GlassCard';
import { Calendar } from '../ui/calendar';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

export function BookingPage() {
  const [bookingType, setBookingType] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedTrainer, setSelectedTrainer] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const [clientInfo, setClientInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: ''
  });

  const timeSlots = [
    '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM',
    '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'
  ];

  const trainers = [
    'Marcus Steel', 'Sarah Thunder', 'Alex Forge', 
    'Maya Iron', 'Tyler Beast', 'Jordan Apex'
  ];

  const programs = [
    'Strength Training', 'HIIT Conditioning', 'CrossFit',
    'Personal Training', 'Mobility & Recovery', 'Athletic Performance'
  ];

  const handleBookingSubmit = () => {
    setBookingConfirmed(true);
    setCurrentStep(4);
  };

  const resetBooking = () => {
    setBookingType('');
    setSelectedDate(null);
    setSelectedTime('');
    setSelectedTrainer('');
    setSelectedProgram('');
    setCurrentStep(1);
    setBookingConfirmed(false);
    setClientInfo({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      notes: ''
    });
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 to-black"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-6xl md:text-8xl mb-4 tracking-wider">BOOK NOW</h1>
          <p className="text-xl text-white/90">Reserve your transformation session</p>
        </motion.div>
      </section>

      {/* Booking System */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          {!bookingConfirmed ? (
            <>
              {/* Progress Bar */}
              <div className="mb-12">
                <div className="flex items-center justify-center space-x-4">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                        currentStep >= step 
                          ? 'bg-white text-black border-white' 
                          : 'border-white/30 text-white/50'
                      }`}>
                        {step}
                      </div>
                      {step < 3 && (
                        <div className={`w-16 h-0.5 mx-4 ${
                          currentStep > step ? 'bg-white' : 'bg-white/30'
                        }`}></div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-sm text-white/70">
                  <span>Service</span>
                  <span>Schedule</span>
                  <span>Details</span>
                </div>
              </div>

              {/* Step 1: Select Service */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <GlassCard>
                    <h2 className="text-3xl mb-8 text-center tracking-wider">SELECT SERVICE</h2>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        {
                          type: 'gym-session',
                          title: 'Gym Session',
                          description: 'Access to all equipment and facilities',
                          icon: '🏋️'
                        },
                        {
                          type: 'personal-training',
                          title: 'Personal Training',
                          description: '1-on-1 session with elite trainer',
                          icon: '👨‍🏫'
                        },
                        {
                          type: 'group-class',
                          title: 'Group Class',
                          description: 'Join one of our signature classes',
                          icon: '👥'
                        }
                      ].map((service) => (
                        <motion.div
                          key={service.type}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            setBookingType(service.type);
                            setCurrentStep(2);
                          }}
                          className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                            bookingType === service.type
                              ? 'border-white bg-white/10'
                              : 'border-white/20 hover:border-white/40'
                          }`}
                        >
                          <div className="text-4xl mb-4 text-center">{service.icon}</div>
                          <h3 className="text-xl mb-2 text-center tracking-wide">{service.title}</h3>
                          <p className="text-white/70 text-center text-sm">{service.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              )}

              {/* Step 2: Select Date & Time */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <GlassCard>
                    <h2 className="text-3xl mb-8 text-center tracking-wider">SELECT DATE & TIME</h2>
                    
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Calendar */}
                      <div>
                        <h3 className="text-xl mb-4 tracking-wide">Choose Date</h3>
                        <div className="bg-white/5 p-4 rounded-xl">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            disabled={(date) => date < new Date()}
                            className="text-white"
                          />
                        </div>
                      </div>

                      {/* Time Slots */}
                      <div>
                        <h3 className="text-xl mb-4 tracking-wide">Choose Time</h3>
                        <div className="grid grid-cols-3 gap-2 max-h-80 overflow-y-auto">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={`p-3 text-sm rounded-lg transition-all duration-300 ${
                                selectedTime === time
                                  ? 'bg-white text-black'
                                  : 'bg-white/5 border border-white/20 hover:bg-white/10'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>

                        {/* Additional Options */}
                        {bookingType === 'personal-training' && (
                          <div className="mt-6">
                            <h4 className="mb-3 tracking-wide">Select Trainer</h4>
                            <Select value={selectedTrainer} onValueChange={setSelectedTrainer}>
                              <SelectTrigger className="bg-white/5 border-white/20">
                                <SelectValue placeholder="Choose your trainer" />
                              </SelectTrigger>
                              <SelectContent>
                                {trainers.map((trainer) => (
                                  <SelectItem key={trainer} value={trainer}>
                                    {trainer}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        )}

                        {bookingType === 'group-class' && (
                          <div className="mt-6">
                            <h4 className="mb-3 tracking-wide">Select Program</h4>
                            <Select value={selectedProgram} onValueChange={setSelectedProgram}>
                              <SelectTrigger className="bg-white/5 border-white/20">
                                <SelectValue placeholder="Choose program" />
                              </SelectTrigger>
                              <SelectContent>
                                {programs.map((program) => (
                                  <SelectItem key={program} value={program}>
                                    {program}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-between mt-8">
                      <Button
                        onClick={() => setCurrentStep(1)}
                        variant="outline"
                        className="px-8"
                      >
                        Back
                      </Button>
                      <Button
                        onClick={() => setCurrentStep(3)}
                        disabled={!selectedDate || !selectedTime}
                        className="px-8 bg-white text-black hover:bg-white/90"
                      >
                        Continue
                      </Button>
                    </div>
                  </GlassCard>
                </motion.div>
              )}

              {/* Step 3: Client Information */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <GlassCard>
                    <h2 className="text-3xl mb-8 text-center tracking-wider">YOUR INFORMATION</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block mb-2 tracking-wide">First Name</label>
                        <Input
                          value={clientInfo.firstName}
                          onChange={(e) => setClientInfo({...clientInfo, firstName: e.target.value})}
                          className="bg-white/5 border-white/20"
                          placeholder="Enter first name"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 tracking-wide">Last Name</label>
                        <Input
                          value={clientInfo.lastName}
                          onChange={(e) => setClientInfo({...clientInfo, lastName: e.target.value})}
                          className="bg-white/5 border-white/20"
                          placeholder="Enter last name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block mb-2 tracking-wide">Email</label>
                        <Input
                          type="email"
                          value={clientInfo.email}
                          onChange={(e) => setClientInfo({...clientInfo, email: e.target.value})}
                          className="bg-white/5 border-white/20"
                          placeholder="Enter email address"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 tracking-wide">Phone</label>
                        <Input
                          value={clientInfo.phone}
                          onChange={(e) => setClientInfo({...clientInfo, phone: e.target.value})}
                          className="bg-white/5 border-white/20"
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block mb-2 tracking-wide">Additional Notes (Optional)</label>
                      <Textarea
                        value={clientInfo.notes}
                        onChange={(e) => setClientInfo({...clientInfo, notes: e.target.value})}
                        className="bg-white/5 border-white/20 min-h-[100px]"
                        placeholder="Any specific requirements or goals..."
                      />
                    </div>

                    {/* Booking Summary */}
                    <div className="bg-white/5 p-6 rounded-xl mb-6">
                      <h3 className="text-xl mb-4 tracking-wide">BOOKING SUMMARY</h3>
                      <div className="space-y-2 text-white/80">
                        <div className="flex justify-between">
                          <span>Service:</span>
                          <span className="capitalize">{bookingType.replace('-', ' ')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Date:</span>
                          <span>{selectedDate?.toDateString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Time:</span>
                          <span>{selectedTime}</span>
                        </div>
                        {selectedTrainer && (
                          <div className="flex justify-between">
                            <span>Trainer:</span>
                            <span>{selectedTrainer}</span>
                          </div>
                        )}
                        {selectedProgram && (
                          <div className="flex justify-between">
                            <span>Program:</span>
                            <span>{selectedProgram}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button
                        onClick={() => setCurrentStep(2)}
                        variant="outline"
                        className="px-8"
                      >
                        Back
                      </Button>
                      <Button
                        onClick={handleBookingSubmit}
                        disabled={!clientInfo.firstName || !clientInfo.lastName || !clientInfo.email}
                        className="px-8 bg-white text-black hover:bg-white/90"
                      >
                        Confirm Booking
                      </Button>
                    </div>
                  </GlassCard>
                </motion.div>
              )}
            </>
          ) : (
            /* Confirmation Page */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <GlassCard className="text-center">
                <div className="text-6xl mb-6">✅</div>
                <h2 className="text-4xl mb-6 tracking-wider">BOOKING CONFIRMED</h2>
                <p className="text-xl text-white/80 mb-8">
                  Your session has been successfully booked!
                </p>

                <div className="bg-white/5 p-6 rounded-xl mb-8 text-left max-w-md mx-auto">
                  <h3 className="text-xl mb-4 tracking-wide text-center">BOOKING DETAILS</h3>
                  <div className="space-y-3 text-white/80">
                    <div className="flex justify-between">
                      <span>Name:</span>
                      <span>{clientInfo.firstName} {clientInfo.lastName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service:</span>
                      <span className="capitalize">{bookingType.replace('-', ' ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span>{selectedDate?.toDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time:</span>
                      <span>{selectedTime}</span>
                    </div>
                    {selectedTrainer && (
                      <div className="flex justify-between">
                        <span>Trainer:</span>
                        <span>{selectedTrainer}</span>
                      </div>
                    )}
                    {selectedProgram && (
                      <div className="flex justify-between">
                        <span>Program:</span>
                        <span>{selectedProgram}</span>
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-white/70 mb-8">
                  A confirmation email has been sent to {clientInfo.email}
                </p>

                <Button
                  onClick={resetBooking}
                  className="px-8 bg-white text-black hover:bg-white/90"
                >
                  Book Another Session
                </Button>
              </GlassCard>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}