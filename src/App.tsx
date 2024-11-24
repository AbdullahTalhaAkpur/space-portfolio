import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaReact, FaVuejs, FaAngular, FaNodeJs, FaPython, FaFileDownload } from 'react-icons/fa';
import { SiMongodb, SiFirebase, SiTailwindcss } from 'react-icons/si';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiMedium } from 'react-icons/si';
import emailjs from '@emailjs/browser';
import './App.css';

// EmailJS'i initialize et
emailjs.init("WBc1d7B36MmJroO2i");

const StarField = () => {
  const [stars, setStars] = useState<{ x: number; y: number; size: number; opacity: number }[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 200 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2,
        opacity: Math.random()
      }));
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity
          }}
        />
      ))}
    </div>
  );
};

function App() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (form.current) {
        await emailjs.sendForm(
          'service_bfzfj26',
          'template_5d872ti',
          form.current,
          'WBc1d7B36MmJroO2i'
        );
        
        setShowSuccessMessage(true);
        form.current.reset();
        
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyiniz.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020818]">
      <StarField />
      
      {/* Nebula Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/20 blur-[100px] animate-float" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-green-500/20 blur-[100px] animate-float-delay" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-purple-500/20 blur-[100px] animate-float" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="fixed w-full bg-opacity-10 bg-black backdrop-blur-lg border-b border-white/10 z-50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
              >
                Abdullah Talha Akpur
              </motion.div>
              <div className="hidden md:flex space-x-8">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <Link
                    key={item}
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="text-white/80 hover:text-green-400 cursor-pointer transition-colors duration-300"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center px-4">
          <div className="absolute inset-0 z-0">
            <div className="nebula-effect-1"></div>
            <div className="nebula-effect-2"></div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center relative z-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-green-300 to-blue-500 bg-clip-text text-transparent">
              Frontend Developer
            </h1>
            <p className="text-xl text-blue-200 mb-8">
              Crafting Digital Experiences in the Digital Universe
            </p>
            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-400 rounded-full text-white font-semibold
                         hover:from-blue-600 hover:to-green-500 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Link to="projects" smooth={true} duration={500}>
                  Explore My Work
                </Link>
              </motion.button>

              <motion.a
                href="/FrontendEnglish.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-400/10 to-green-400/10 rounded-full text-white font-semibold
                         hover:from-blue-400/20 hover:to-green-400/20 transition-all duration-200 border border-blue-400/30
                         hover:border-green-400/30 flex items-center space-x-2 backdrop-blur-sm"
              >
                <FaFileDownload className="w-5 h-5" />
                <span>Download CV</span>
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-20 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-12">
                About Me
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)" }}
                  className="bg-black/30 p-8 rounded-2xl backdrop-blur-xl border border-white/10 
                           shadow-xl shadow-blue-500/10"
                >
                  <h3 className="text-2xl font-semibold text-blue-400 mb-4">Professional Journey</h3>
                  <p className="text-gray-300 leading-relaxed">
                    As a Frontend Developer with extensive experience in modern web technologies,
                    I specialize in creating responsive, user-friendly applications that combine
                    aesthetics with functionality. My expertise spans across React, Vue, and Angular,
                    allowing me to choose the best tools for each project's unique requirements.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(16, 185, 129, 0.2)" }}
                  className="bg-black/30 p-8 rounded-2xl backdrop-blur-xl border border-white/10 
                           shadow-xl shadow-green-500/10"
                >
                  <h3 className="text-2xl font-semibold text-green-400 mb-4">Technical Expertise</h3>
                  <p className="text-gray-300 leading-relaxed">
                    My full-stack capabilities include both frontend and backend development,
                    with proficiency in Node.js and Python. I have extensive experience with
                    modern databases like MongoDB and Firebase, enabling me to build
                    scalable and efficient applications.
                  </p>
                </motion.div>
              </div>

              <div className="mt-12 flex flex-wrap justify-center gap-8">
                {[
                  { Icon: FaReact, color: "text-blue-400" },
                  { Icon: FaVuejs, color: "text-green-400" },
                  { Icon: FaAngular, color: "text-red-400" },
                  { Icon: FaNodeJs, color: "text-green-500" },
                  { Icon: FaPython, color: "text-yellow-400" },
                  { Icon: SiMongodb, color: "text-green-500" },
                  { Icon: SiFirebase, color: "text-yellow-500" },
                  { Icon: SiTailwindcss, color: "text-blue-400" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className={`${item.color} text-4xl transition-all duration-300 hover:shadow-lg hover:shadow-current`}
                  >
                    <item.Icon />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen py-20 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-12">
                Skills & Technologies
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {/* Frontend */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center space-y-2 p-4 bg-black/30 rounded-xl backdrop-blur-sm border border-white/10"
                >
                  <FaReact className="text-4xl text-blue-400" />
                  <span className="text-gray-300">React.js</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center space-y-2 p-4 bg-black/30 rounded-xl backdrop-blur-sm border border-white/10"
                >
                  <FaVuejs className="text-4xl text-green-400" />
                  <span className="text-gray-300">Vue.js</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center space-y-2 p-4 bg-black/30 rounded-xl backdrop-blur-sm border border-white/10"
                >
                  <FaAngular className="text-4xl text-red-400" />
                  <span className="text-gray-300">Angular</span>
                </motion.div>

                {/* Backend */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center space-y-2 p-4 bg-black/30 rounded-xl backdrop-blur-sm border border-white/10"
                >
                  <FaNodeJs className="text-4xl text-green-500" />
                  <span className="text-gray-300">Node.js</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center space-y-2 p-4 bg-black/30 rounded-xl backdrop-blur-sm border border-white/10"
                >
                  <FaPython className="text-4xl text-yellow-400" />
                  <span className="text-gray-300">Python</span>
                </motion.div>

                {/* Database */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center space-y-2 p-4 bg-black/30 rounded-xl backdrop-blur-sm border border-white/10"
                >
                  <SiMongodb className="text-4xl text-green-500" />
                  <span className="text-gray-300">MongoDB</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center space-y-2 p-4 bg-black/30 rounded-xl backdrop-blur-sm border border-white/10"
                >
                  <SiFirebase className="text-4xl text-yellow-500" />
                  <span className="text-gray-300">Firebase</span>
                </motion.div>

                {/* Styling */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center space-y-2 p-4 bg-black/30 rounded-xl backdrop-blur-sm border border-white/10"
                >
                  <SiTailwindcss className="text-4xl text-blue-400" />
                  <span className="text-gray-300">Tailwind CSS</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-20 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="container mx-auto px-4"
          >
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              My Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {/* Project Card 1 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-black/30 rounded-xl overflow-hidden backdrop-blur-xl border border-white/10 
                         shadow-lg h-[320px] flex flex-col"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src="/projects/agriverts.png"
                    alt="Agriverts React Dashboard"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Agriverts React Dashboard</h3>
                  <p className="text-gray-300 text-sm mb-3 flex-1 line-clamp-2">
                    For Agriverts company, I developed the frontend of an artificial intelligence-based plant analysis platform.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-300 rounded-full">React</span>
                    <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-300 rounded-full">Node.js</span>
                    <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-300 rounded-full">Material UI</span>
                  </div>
                </div>
              </motion.div>

              {/* Project Card 2 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-black/30 rounded-xl overflow-hidden backdrop-blur-xl border border-white/10 
                         shadow-lg h-[320px] flex flex-col"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src="/projects/socialmedia.png"
                    alt="Social Media Platform"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Social Media Platform</h3>
                  <p className="text-gray-300 text-sm mb-3 flex-1 line-clamp-2">
                    A full-stack social media application where users can share posts, like, and comment.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-300 rounded-full">React</span>
                    <span className="px-2 py-0.5 text-xs bg-purple-500/20 text-purple-300 rounded-full">Material UI</span>
                    <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-300 rounded-full">Node.js</span>
                  </div>
                </div>
              </motion.div>

              {/* Project Card 3 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-black/30 rounded-xl overflow-hidden backdrop-blur-xl border border-white/10 
                         shadow-lg h-[320px] flex flex-col"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src="/projects/memoryapp.png"
                    alt="Memory App"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Memory App</h3>
                  <p className="text-gray-300 text-sm mb-3 flex-1 line-clamp-2">
                    An interactive memory game application built with React.js. Users can create, flip and match cards, track their scores, and compete against their previous records. Features a clean, modern UI with smooth animations.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-300 rounded-full">React.js</span>
                    <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-300 rounded-full">Node.js</span>
                    <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-300 rounded-full">CSS</span>
                  </div>
                </div>
              </motion.div>

              {/* Project Card 4 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-black/30 rounded-xl overflow-hidden backdrop-blur-xl border border-white/10 
                         shadow-lg h-[320px] flex flex-col"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src="/projects/spendmoney.png"
                    alt="Spend Money App"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Spend Money App</h3>
                  <p className="text-gray-300 text-sm mb-3 flex-1 line-clamp-2">
                    An interactive spending simulation app inspired by the "Spend Money" concept. Users can manage a virtual budget, make purchases from a catalog of items, and see real-time updates of their remaining balance with smooth animations and intuitive UI.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-300 rounded-full">React.js</span>
                    <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-300 rounded-full">Node.js</span>
                    <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-300 rounded-full">CSS</span>
                  </div>
                </div>
              </motion.div>

              {/* Project Card 5 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-black/30 rounded-xl overflow-hidden backdrop-blur-xl border border-white/10 
                         shadow-lg h-[320px] flex flex-col"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src="/projects/githubfinder.png"
                    alt="Github Finder"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Github Finder App</h3>
                  <p className="text-gray-300 text-sm mb-3 flex-1 line-clamp-2">
                    A React-based application that allows users to search for GitHub users and view their profiles. Built with React and styled with Bootstrap for a responsive and modern user experience.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-300 rounded-full">React.js</span>
                    <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-300 rounded-full">Node.js</span>
                    <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-300 rounded-full">Bootstrap</span>
                    <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-300 rounded-full">CSS</span>
                  </div>
                </div>
              </motion.div>

              {/* Project Card 6 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-black/30 rounded-xl overflow-hidden backdrop-blur-xl border border-white/10 
                         shadow-lg h-[320px] flex flex-col"
              >
                <div className="relative h-32 overflow-hidden grid grid-cols-2 gap-1">
                  <div className="relative overflow-hidden">
                    <img
                      src="/projects/image.png"
                      alt="Gallery"
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="relative overflow-hidden">
                    <img
                      src="/projects/image1.png"
                      alt="Gallery"
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Gallery Image App</h3>
                  <p className="text-gray-300 text-sm mb-3 flex-1 line-clamp-2">
                    A modern image gallery application with a sleek interface. Features include dynamic image loading, smooth transitions, and responsive masonry layout. Built with React and Vite for optimal performance, with TypeScript for enhanced code reliability.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-300 rounded-full">React.js</span>
                    <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-300 rounded-full">Redux</span>
                    <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-300 rounded-full">TypeScript</span>
                    <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-300 rounded-full">Vite</span>
                    <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-300 rounded-full">CSS</span>
                  </div>
                </div>
              </motion.div>

              {/* Project Card 7 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-black/30 rounded-xl overflow-hidden backdrop-blur-xl border border-white/10 
                         shadow-lg h-[320px] flex flex-col"
              >
                <div className="relative h-32 overflow-hidden grid grid-cols-2 gap-1">
                  <div className="relative overflow-hidden">
                    <img
                      src="/projects/kbk.png"
                      alt="Gallery"
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="relative overflow-hidden">
                    <img
                      src="/projects/benzer.png"
                      alt="Gallery"
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Compare Products App</h3>
                  <p className="text-gray-300 text-sm mb-3 flex-1 line-clamp-2"> 
                    A modern e-commerce application that allows users to compare products side-by-side. Features include dynamic product comparison, personalized recommendations, and secure payment processing.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-300 rounded-full">Python</span>
                    <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-300 rounded-full">Django</span>
                    <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-300 rounded-full">HTML</span>
                    <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-300 rounded-full">Mysql</span>
                    <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-300 rounded-full">CSS</span>
                  </div>
                </div>
              </motion.div>    

              {/* Project Card 8 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-black/30 rounded-xl overflow-hidden backdrop-blur-xl border border-white/10 
                         shadow-lg h-[320px] flex flex-col"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src="/projects/kitap.png"
                    alt="Bookstore"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Bookstore</h3>
                  <p className="text-gray-300 text-sm mb-3 flex-1 line-clamp-2">
                    A modern e-commerce application that allows users to search and purchase books. Features include dynamic book recommendations
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-300 rounded-full">Python</span>
                    <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-300 rounded-full">Django</span>
                    <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-300 rounded-full">SQl Lite</span>
                    <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-300 rounded-full">HTML</span>
                    <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-300 rounded-full">CSS</span>
                  </div>
                </div>
              </motion.div>

              {/* Project Card 9 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-black/30 rounded-xl overflow-hidden backdrop-blur-xl border border-white/10 
                         shadow-lg h-[320px] flex flex-col"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src="/projects/ticketapp.png"
                    alt="Ticket app"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Flight Ticket App</h3>
                  <p className="text-gray-300 text-sm mb-3 flex-1 line-clamp-2">
                    A web application that allows users to search and book flight tickets. Features include real-time flight information
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-300 rounded-full">Vue.js</span>
                    <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-300 rounded-full">Vite.js</span>
                    <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-300 rounded-full">Node.js</span>
                    <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-300 rounded-full">CSS</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-20 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-12">
                Let's Connect
              </h2>

              {/* Success Message */}
              {showSuccessMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-green-500/90 text-white px-6 py-3 rounded-lg shadow-lg backdrop-blur-sm"
                >
                  Mesajınız başarılı bir şekilde gönderildi! 🚀
                </motion.div>
              )}
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)" }}
                  className="bg-black/30 p-8 rounded-2xl backdrop-blur-xl border border-white/10 
                           shadow-xl shadow-blue-500/10"
                >
                  <h3 className="text-2xl font-semibold text-blue-400 mb-6">Get in Touch</h3>
                  <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="user_name"
                        required
                        className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/10 
                                 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="user_email"
                        required
                        className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/10 
                                 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/10 
                                 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Your message..."
                      />
                    </div>
                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: isLoading ? 1 : 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
                      whileTap={{ scale: isLoading ? 1 : 0.95 }}
                      className={`w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white 
                               rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300
                               ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </motion.button>
                  </form>
                </motion.div>

                {/* Professional Links */}
                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(16, 185, 129, 0.2)" }}
                  className="bg-black/30 p-8 rounded-2xl backdrop-blur-xl border border-white/10 
                           shadow-xl shadow-green-500/10"
                >
                  <h3 className="text-2xl font-semibold text-green-400 mb-6">Professional Profiles</h3>
                  <div className="space-y-6">
                    <a
                      href="https://www.linkedin.com/in/abdullah-talha-akpur-088b99185/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center
                                    group-hover:bg-blue-500/20 transition-colors">
                        <FaLinkedin className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold">LinkedIn</h4>
                        <p className="text-sm text-gray-400">Professional Network</p>
                      </div>
                    </a>

                    <a
                      href="https://github.com/AbdullahTalhaAkpur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center
                                    group-hover:bg-green-500/20 transition-colors">
                        <FaGithub className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold">GitHub</h4>
                        <p className="text-sm text-gray-400">Code Repository</p>
                      </div>
                    </a>

                    <a
                      href="https://medium.com/@akpurrabdullah"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-full bg-gray-500/10 flex items-center justify-center
                                    group-hover:bg-gray-500/20 transition-colors">
                        <SiMedium className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Medium</h4>
                        <p className="text-sm text-gray-400">Tech Articles & Blogs</p>
                      </div>
                    </a>
                  </div>

                  <div className="mt-8 p-4 bg-blue-500/5 rounded-lg border border-blue-500/10">
                    <p className="text-sm text-gray-400 text-center">
                      Prefer email? Contact me at{' '}
                      <span className="text-blue-400">akpurrabdullah@gmail.com</span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
