import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Coffee, Leaf, Award, Users, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Premium Quality",
      description: "Hand-picked beans from 1716m altitude",
      color: "from-nokka-green to-nokka-light-brown"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainable",
      description: "Environmentally responsible farming",
      color: "from-green-500 to-nokka-green"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Award Winning",
      description: "Internationally recognized quality",
      color: "from-yellow-500 to-nokka-orange"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community",
      description: "Supporting local farmers",
      color: "from-nokka-brown to-nokka-light-brown"
    }
  ];

  const stats = [
    { number: "1716m", label: "Altitude", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "50+", label: "Partner Farms", icon: <Users className="h-6 w-6" /> },
    { number: "15+", label: "Years Experience", icon: <Award className="h-6 w-6" /> },
    { number: "5★", label: "Quality Rating", icon: <Star className="h-6 w-6" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax Effect */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
          }}
        />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute opacity-5"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2
              }}
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + i * 10}%`,
              }}
            >
              <Coffee className="h-8 w-8 text-nokka-green" />
            </motion.div>
          ))}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-nokka-brown leading-tight"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="bg-gradient-to-r from-nokka-brown via-nokka-green to-nokka-brown bg-clip-text text-transparent bg-300%"
                >
                  Nokka Coffee
                </motion.span>
              </motion.h1>
              
              <motion.div
                variants={itemVariants}
                className="w-24 h-1 bg-gradient-to-r from-nokka-green to-nokka-orange mx-auto rounded-full"
              />
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-nokka-light-brown max-w-3xl mx-auto leading-relaxed"
            >
              Premium Ethiopian coffee from the highlands of West Guji Zone. 
              Experience the rich heritage and exceptional quality in every cup.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="btn-primary group inline-flex items-center">
                  Get Started
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/about" className="btn-secondary">
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Coffee Bean Animation */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <Coffee className="h-12 w-12 text-nokka-green opacity-60" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-nokka-cream/20 to-white shadow-lg"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  className="inline-flex items-center justify-center w-12 h-12 bg-nokka-green text-white rounded-full mb-4"
                >
                  {stat.icon}
                </motion.div>
                <motion.h3 
                  className="text-3xl font-bold text-nokka-brown mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-nokka-light-brown font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-nokka-cream/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl font-bold text-nokka-brown mb-4"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Why Choose Nokka Coffee?
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-nokka-green to-nokka-orange mx-auto rounded-full mb-4"
            />
            <p className="text-xl text-nokka-light-brown max-w-2xl mx-auto">
              Discover what makes our coffee exceptional
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className={`text-center p-8 rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg relative overflow-hidden group`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
                  }} />
                </div>

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6 relative z-10"
                >
                  {feature.icon}
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-4 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-white/90 relative z-10">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-nokka-green via-nokka-light-brown to-nokka-brown text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute opacity-10"
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                ease: "linear",
                delay: i * 1.5
              }}
              style={{
                left: `${5 + i * 12}%`,
                top: `${10 + (i % 3) * 30}%`,
              }}
            >
              <Coffee className="h-6 w-6" />
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.5)",
                  "0 0 30px rgba(255,255,255,0.8)",
                  "0 0 20px rgba(255,255,255,0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Ready to Experience Premium Ethiopian Coffee?
            </motion.h2>
            
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "150px" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-1 bg-white mx-auto rounded-full"
            />
            
            <p className="text-xl text-nokka-cream max-w-2xl mx-auto">
              Join thousands of coffee lovers who trust Nokka Coffee for their daily brew
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-white text-nokka-green font-semibold py-4 px-8 rounded-lg hover:bg-nokka-cream transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                Contact Us Today
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;