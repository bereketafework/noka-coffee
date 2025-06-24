import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Coffee, Leaf, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Premium Quality",
      description: "Hand-picked beans from 1716m altitude"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainable",
      description: "Environmentally responsible farming"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Award Winning",
      description: "Internationally recognized quality"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community",
      description: "Supporting local farmers"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-nokka-brown leading-tight">
              Nokka Coffee
            </h1>
            <p className="text-xl md:text-2xl text-nokka-light-brown max-w-3xl mx-auto">
              Premium Ethiopian coffee from the highlands of West Guji Zone. 
              Experience the rich heritage and exceptional quality in every cup.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="btn-primary group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Coffee Bean Animation */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <Coffee className="h-12 w-12 text-nokka-green opacity-60" />
        </motion.div>
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
              Why Choose Nokka Coffee?
            </h2>
            <p className="text-xl text-nokka-light-brown max-w-2xl mx-auto">
              Discover what makes our coffee exceptional
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
              Ready to Experience Premium Ethiopian Coffee?
            </h2>
            <p className="text-xl text-nokka-cream max-w-2xl mx-auto">
              Join thousands of coffee lovers who trust Nokka Coffee for their daily brew
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-white text-nokka-green font-semibold py-4 px-8 rounded-lg hover:bg-nokka-cream transition-colors group"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;