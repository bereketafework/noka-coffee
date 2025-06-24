import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Coffee } from 'lucide-react';

const Gallery = () => {
  const galleryItems = [
    {
      title: "Coffee Drying Process",
      description: "Traditional sun-drying methods preserve the natural flavors",
      image: "https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Bean Selection",
      description: "Hand-picking ensures only the finest beans make it to your cup",
      image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Processing Facility",
      description: "State-of-the-art equipment meets traditional techniques",
      image: "https://images.pexels.com/photos/4226924/pexels-photo-4226924.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Farmer Partnership",
      description: "Working directly with local farmers for sustainable sourcing",
      image: "https://images.pexels.com/photos/4226761/pexels-photo-4226761.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Quality Control",
      description: "Rigorous testing ensures consistent excellence",
      image: "https://images.pexels.com/photos/4226876/pexels-photo-4226876.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Final Product",
      description: "Premium coffee beans ready for export",
      image: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=800"
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
              <Camera className="h-10 w-10" />
            </div>
            <h1 className="text-5xl font-bold text-nokka-brown">
              Our Gallery
            </h1>
            <p className="text-xl text-nokka-light-brown max-w-3xl mx-auto">
              Take a visual journey through Nokka Coffee's processing steps, 
              from farm to cup, showcasing our commitment to quality and tradition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg card-hover"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>

                {/* Coffee Bean Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Coffee className="h-5 w-5 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gradient-to-br from-nokka-green to-nokka-light-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Coffee Journey</h2>
            <p className="text-xl text-nokka-cream">
              From seed to cup, every step is crafted with care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['Planting', 'Harvesting', 'Processing', 'Export'].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step}</h3>
                <p className="text-nokka-cream text-sm">
                  Each stage carefully monitored for optimal quality
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;