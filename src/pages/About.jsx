import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Trophy, Users, HeartHandshake as Handshake } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Our Vision",
      description: "To be the pioneer in tying the industry's and technology together with quality among coffee exporters and producers while taking environmental responsibility."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Our Mission", 
      description: "Provide high-quality, organic, and traceable Ethiopian coffee beans along with effective, client-focused, amiable, and competent services."
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Our Goal",
      description: "To become one of the nation's most competent and to export coffee of superior quality in order to get international recognition."
    }
  ];

  const team = [
    {
      name: "Shibiru Nokka",
      role: "CEO",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Geleta Tesema", 
      role: "Marketing Manager",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const partners = [
    { name: "Oromia Agricultural", link: "https://oromiabureauofagriculture.org/" },
    { name: "ECX", link: "https://www.ecx.com.et/" },
    { name: "Oromia Irrigation", link: "https://www.oipdb.gov.et/" }
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
                About Nokka Coffee
              </h1>
              <p className="text-lg text-nokka-light-brown leading-relaxed">
                Nokka Coffee is a family-owned business inspired by the legacy of our father, 
                Nokka Tenko, a visionary coffee farmer and successful entrepreneur. Building on 
                his footsteps, we have expanded our operations to produce high-quality coffee on 
                our own farmland, as well as purchasing beans from local farmers in the region.
              </p>
              <p className="text-lg text-nokka-light-brown leading-relaxed">
                Our coffee is carefully processed at our state-of-the-art washing and dry 
                processing facilities located in Bardaye Chabiti and Haro, within the West Guji 
                zone of Southern Oromia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Coffee processing"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-nokka-brown mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-nokka-light-brown">
              The foundation of our business is our core principles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-nokka-light-brown to-nokka-brown text-white p-8 rounded-2xl card-hover"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-nokka-cream leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-nokka-cream/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-nokka-brown mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-nokka-light-brown">
              The passionate people behind Nokka Coffee
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-nokka-brown mb-2">
                    {member.name}
                  </h3>
                  <p className="text-nokka-light-brown mb-4">{member.role}</p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-nokka-green hover:text-nokka-brown transition-colors">
                      <Users size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-nokka-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Partners</h2>
            <p className="text-xl text-nokka-cream">
              Building strong partnerships for sustainable growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center card-hover"
              >
                <Handshake className="h-12 w-12 mx-auto mb-4 text-nokka-cream" />
                <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nokka-cream hover:text-white transition-colors"
                >
                  Visit Website →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;