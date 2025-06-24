import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mountain, Thermometer, Droplets } from 'lucide-react';

const Source = () => {
  const locations = [
    {
      name: "Bardayee",
      description: "Located in West Guji zone around Bule Hora town, known for its exceptional coffee quality.",
      image: "https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=600",
      altitude: "1716m",
      climate: "Tropical Highland"
    },
    {
      name: "Qilleenso", 
      description: "Premium coffee growing region with ideal conditions for arabica cultivation.",
      image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=600",
      altitude: "1650m",
      climate: "Subtropical"
    }
  ];

  const features = [
    {
      icon: <Mountain className="h-8 w-8" />,
      title: "High Altitude",
      description: "Grown at 1716 meters above sea level for optimal flavor development"
    },
    {
      icon: <Thermometer className="h-8 w-8" />,
      title: "Perfect Climate",
      description: "Ideal temperature and weather conditions year-round"
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Rich Soil",
      description: "Volcanic soil provides essential nutrients for premium beans"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Prime Location",
      description: "West Guji Zone - Ethiopia's premier coffee growing region"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-nokka-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl font-bold text-nokka-brown">
                Our Coffee Source
              </h1>
              <p className="text-lg text-nokka-light-brown leading-relaxed">
                Imagine a sip of pure, unadulterated coffee bliss. Grown at an astonishing 
                1716 meters above sea level in the heart of Ethiopia (5°35′N 38°15′E), 
                this coffee is a testament to nature's artistry.
              </p>
              <p className="text-lg text-nokka-light-brown leading-relaxed">
                The high altitude, rich volcanic soil, and ideal climate conspire to create 
                beans that are nothing short of extraordinary. With every cup, you'll embark 
                on a sensory journey of vibrant acidity, floral and fruity notes, and a 
                smooth, velvety finish.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/4226924/pexels-photo-4226924.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Coffee plantation"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-nokka-green text-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Mountain className="h-6 w-6" />
                  <span className="font-semibold">1716m Altitude</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-nokka-brown mb-4">
              What Makes Our Source Special
            </h2>
            <p className="text-xl text-nokka-light-brown">
              The perfect combination of nature's gifts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-nokka-cream/20 to-white card-hover"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-nokka-green text-white rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-nokka-brown mb-2">
                  {feature.title}
                </h3>
                <p className="text-nokka-light-brown">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-gradient-to-br from-nokka-cream/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-nokka-brown mb-4">
              Our Growing Regions
            </h2>
            <p className="text-xl text-nokka-light-brown">
              Premium coffee from carefully selected locations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
              >
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-nokka-brown mb-4">
                    {location.name}
                  </h3>
                  <p className="text-nokka-light-brown mb-6 leading-relaxed">
                    {location.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2 bg-nokka-cream/30 px-3 py-1 rounded-full">
                      <Mountain className="h-4 w-4 text-nokka-green" />
                      <span className="text-sm font-medium text-nokka-brown">
                        {location.altitude}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 bg-nokka-cream/30 px-3 py-1 rounded-full">
                      <Thermometer className="h-4 w-4 text-nokka-green" />
                      <span className="text-sm font-medium text-nokka-brown">
                        {location.climate}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-nokka-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold">
              Experience the Difference
            </h2>
            <p className="text-xl text-nokka-cream max-w-2xl mx-auto">
              Taste the exceptional quality that comes from our carefully selected 
              growing regions and traditional processing methods.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Source;