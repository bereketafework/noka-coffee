import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Coffee } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: "West Guji Zone, Southern Oromia, Ethiopia"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "info@nokkacoffee.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+251 XXX XXX XXX"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-nokka-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-nokka-green text-white rounded-full mb-6">
              <Mail className="h-10 w-10" />
            </div>
            <h1 className="text-5xl font-bold text-nokka-brown">
              Contact Us
            </h1>
            <p className="text-xl text-nokka-light-brown max-w-3xl mx-auto">
              Ready to experience premium Ethiopian coffee? Get in touch with us today 
              and let's discuss how we can serve your coffee needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-nokka-green to-nokka-light-brown p-8 rounded-2xl shadow-2xl"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Enter your Full Name"
                    value={formData.fullname}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 outline-none transition-all"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 outline-none transition-all"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Enter Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 outline-none transition-all"
                    required
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 outline-none transition-all resize-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-white text-nokka-green font-semibold py-4 px-6 rounded-lg hover:bg-nokka-cream transition-colors duration-300 flex items-center justify-center space-x-2 group"
                >
                  <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>

            {/* Contact Info & Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-nokka-brown mb-8">Get in Touch</h2>
                
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-nokka-green text-white rounded-full flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-nokka-brown">
                        {info.title}
                      </h3>
                      <p className="text-nokka-light-brown">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coffee Image */}
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Nokka Coffee"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-nokka-green/20 rounded-2xl flex items-center justify-center">
                  <Coffee className="h-16 w-16 text-white animate-bounce-gentle" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-nokka-cream/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-nokka-brown mb-4">
              Find Us
            </h2>
            <p className="text-xl text-nokka-light-brown">
              Located in the heart of Ethiopia's coffee region
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-nokka-light-brown/10 rounded-2xl p-8 text-center"
          >
            <MapPin className="h-16 w-16 text-nokka-green mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-nokka-brown mb-2">
              West Guji Zone
            </h3>
            <p className="text-nokka-light-brown mb-4">
              Southern Oromia, Ethiopia
            </p>
            <p className="text-sm text-nokka-light-brown">
              Coordinates: 5°35′N 38°15′E | Altitude: 1716m above sea level
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;