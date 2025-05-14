import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import Testimonials from '../components/Testimonials';

const Home = () => {
  // State for dropdown menus
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  
  // Menu data structure for easier management
  const menuData = {
    products: {
      title: "Products",
      items: [
        { name: "Manufacturing ERP Suite", link: "#erp-suite" },
        { name: "Production Planning", link: "#production-planning" },
        { name: "Inventory Management", link: "#inventory" },
        { name: "Quality Control", link: "#quality" },
        { name: "Supply Chain Management", link: "#supply-chain" },
        { name: "Asset Management", link: "#asset-management" },
        { name: "Analytics & Reporting", link: "#analytics" }
      ]
    },
    industries: {
      title: "Industries",
      items: [
        { name: "Automotive", link: "#automotive" },
        { name: "Electronics", link: "#electronics" },
        { name: "Aerospace", link: "#aerospace" },
        { name: "Food & Beverage", link: "#food-beverage" },
        { name: "Pharmaceuticals", link: "#pharma" },
        { name: "Chemicals", link: "#chemicals" },
        { name: "Plastics & Packaging", link: "#plastics" },
        { name: "Metals & Mining", link: "#metals" }
      ]
    },
    solutions: {
      title: "Solutions",
      items: [
        { name: "Small Business", link: "#small-business" },
        { name: "Mid-size Enterprise", link: "#mid-enterprise" },
        { name: "Global Operations", link: "#global" },
        { name: "Cloud Deployment", link: "#cloud" },
        { name: "On-Premises", link: "#on-premises" },
        { name: "Hybrid Solutions", link: "#hybrid" }
      ]
    },
    resources: {
      title: "Resources",
      items: [
        { name: "Blog", link: "#blog" },
        { name: "Whitepapers", link: "#whitepapers" },
        { name: "Case Studies", link: "#case-studies" },
        { name: "Webinars", link: "#webinars" },
        { name: "Documentation", link: "#documentation" },
        { name: "API References", link: "#api" },
        { name: "Community Forum", link: "#forum" }
      ]
    },
    company: {
      title: "Company",
      items: [
        { name: "About Us", link: "#about" },
        { name: "Leadership Team", link: "#leadership" },
        { name: "Careers", link: "#careers" },
        { name: "Partners", link: "#partners" },
        { name: "News & Press", link: "#news" },
        { name: "Events", link: "#events" },
        { name: "Contact Us", link: "#contact" }
      ]
    }
  };
  
  // Handle menu click
  const toggleMenu = (menuKey) => {
    if (activeMenu === menuKey) {
      setActiveMenu(null);
      setActiveSubMenu(null);
    } else {
      setActiveMenu(menuKey);
      setActiveSubMenu(null);
    }
  };

  // Handle submenu click
  const toggleSubMenu = (menuKey) => {
    if (activeSubMenu === menuKey) {
      setActiveSubMenu(null);
    } else {
      setActiveSubMenu(menuKey);
    }
  };

  // Add effect to handle menu visibility on desktop
  useEffect(() => {
    // Function to add visibility on larger screens
    const handleResize = () => {
      // Show menus on large screens
      const desktopMenu = document.querySelector('.desktop-menu');
      
      if (window.innerWidth >= 1024) {
        if (desktopMenu) desktopMenu.style.display = 'flex';
      } else {
        if (desktopMenu) desktopMenu.style.display = 'none';
      }
    };

    // Run on mount and when window resizes
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced sticky header with dropdown menus */}
      <style>
        {`
        @media (max-width: 768px) {
          .hero-container {
            flex-direction: column !important;
          }
          .hero-content {
            width: 100% !important;
            padding-right: 0 !important;
            margin-bottom: 1rem;
          }
          .hero-buttons {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .hero-button {
            width: 100% !important;
            margin-right: 0 !important;
            margin-bottom: 1rem !important;
          }
          .hero-features {
            flex-direction: column !important;
          }
          .feature-card {
            margin-bottom: 1rem !important;
          }
          .dashboard-preview {
            display: none !important;
          }
        }
        
        /* Refined tablet-specific styles */
        @media (min-width: 769px) and (max-width: 1023px) {
          /* Header container adjustments */
          header .w-full {
            padding-left: 10px !important;
            padding-right: 10px !important;
          }
          
          /* Menu container adjustments */
          .desktop-menu {
            column-gap: 0 !important;
            margin-right: 8px !important;
          }
          
          /* Individual menu items */
          .desktop-menu a, 
          .desktop-menu button {
            padding-left: 7px !important;
            padding-right: 7px !important;
            font-size: 0.8rem !important;
          }
          
          /* Header buttons */
          header .hidden.md\\:inline-flex,
          header .inline-flex {
            padding-left: 10px !important;
            padding-right: 10px !important;
            font-size: 0.85rem !important;
          }
          
          /* Logo area */
          header h1 {
            font-size: 1.1rem !important;
          }
          
          /* Dropdown positioning */
          .desktop-menu .group .absolute {
            left: auto !important;
            right: 0 !important;
          }
        }
        `}
      </style>
      
      <header className="fixed top-0 inset-x-0 bg-gradient-to-r from-blue-900 to-indigo-900 shadow-xl z-50">
        <div className="w-full">
          {/* Top bar with contact info and social icons - Hide on mobile */}
          <div className="hidden md:block border-b border-blue-700/40">
            <div className="w-full px-3 py-2 flex justify-between items-center text-xs text-blue-100">
              <div className="flex items-center space-x-6">
                <a href="tel:+917018318078" className="flex items-center hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 7018318078
                </a>
                <a href="mailto:deepakkumar0818@gmail.com" className="flex items-center hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  deepakkumar0818@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Main navigation */}
          <div className="w-full px-3 flex justify-between items-center h-14 md:h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-xl md:text-2xl text-white">📊</span>
              </div>
              <div className="ml-2 md:ml-3 tablet-logo-area">
                <h1 className="text-lg md:text-xl font-bold text-white tracking-tight">
                  <span className="text-blue-300">SavantsX</span> <span className="hidden sm:inline">Manufacturing ERP</span>
                </h1>
              </div>
            </div>
            
            <div className="flex items-center">
              {/* Desktop Navigation - visible on large screens */}
              <nav className="hidden lg:flex items-center space-x-1 desktop-menu">
                {Object.keys(menuData).map((menuKey) => (
                  <div key={menuKey} className="relative group">
                    <button 
                      className="text-blue-100 hover:text-white px-3 py-2 text-sm font-medium rounded hover:bg-blue-800/40 transition-colors flex items-center whitespace-nowrap"
                      onClick={() => toggleMenu(menuKey)}
                    >
                      {menuData[menuKey].title}
                      <svg className="ml-1 h-4 w-4 menu-icon-size" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-1">
                        {menuData[menuKey].items.map((item) => (
                          <a
                            key={item.name}
                            href={item.link}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
                <a href="#pricing" className="text-blue-100 hover:text-white px-3 py-2 text-sm font-medium rounded hover:bg-blue-800/40 transition-colors">
                  Pricing
                </a>
                <a href="#contact" className="text-blue-100 hover:text-white px-3 py-2 text-sm font-medium rounded hover:bg-blue-800/40 transition-colors">
                  Contact
                </a>
              </nav>
              
              <div className="flex items-center ml-4 md:ml-6 space-x-2 md:space-x-3 tablet-menu-container">
                <Link 
                  to="/demo" 
                  className="hidden lg:inline-flex items-center justify-center rounded-md border border-blue-300 bg-transparent px-4 py-2 text-sm font-medium text-blue-100 hover:bg-blue-800/40 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 transition-all duration-200"
                >
                  Request Demo
                </Link>
                
                <Link 
                  to="/dashboard" 
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-500 px-3 md:px-5 py-1.5 md:py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 tablet-compact-button"
                >
                  Login
                </Link>
                
                {/* Mobile menu button */}
                <button 
                  className="lg:hidden bg-blue-800/40 text-white p-1.5 rounded-md hover:bg-blue-700/60 transition-colors"
                  onClick={() => toggleMenu('mobile')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 menu-icon-size" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile menu dropdown */}
          {activeMenu === 'mobile' && (
            <div className="lg:hidden pb-3 bg-blue-800/80 backdrop-blur-sm">
              <div className="px-3 pt-2 pb-3 space-y-1">
                {/* Menu categories */}
                <p className="px-3 text-xs font-semibold text-blue-300 uppercase mb-2">Menu</p>
                {Object.keys(menuData).map((menuKey) => (
                  <div key={menuKey} className="space-y-1">
                    <button 
                      onClick={() => toggleSubMenu(menuKey)}
                      className="w-full text-left px-3 py-2 text-base font-medium text-white rounded-md hover:bg-blue-700/60 transition-colors flex items-center justify-between"
                    >
                      {menuData[menuKey].title}
                      <svg 
                        className={`h-4 w-4 menu-icon-size transform transition-transform duration-200 ${activeSubMenu === menuKey ? 'rotate-180' : ''}`} 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeSubMenu === menuKey && (
                      <div className="pl-4 space-y-1 bg-blue-900/40 rounded-md overflow-hidden">
                        {menuData[menuKey].items.map((item) => (
                          <a
                            key={item.name}
                            href={item.link}
                            className="block px-3 py-2 text-sm text-blue-100 hover:bg-blue-700/60 transition-colors"
                            onClick={() => {
                              setActiveMenu(null);
                              setActiveSubMenu(null);
                            }}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <a 
                  href="#pricing"
                  className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-blue-700/60 transition-colors"
                  onClick={() => setActiveMenu(null)}
                >
                  Pricing
                </a>
                <Link 
                  to="/demo" 
                  className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-blue-700/60 transition-colors"
                  onClick={() => setActiveMenu(null)}
                >
                  Request Demo
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Feature Section */}
        <FeatureSection />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
                Ready to Transform Your Manufacturing Process?
              </h2>
              <p className="text-xl text-blue-100 mb-10">
                Join hundreds of manufacturing companies that have already optimized their operations with our ERP system.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <Link 
                  to="/dashboard" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                  Get Started Now
                </Link>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                  Contact Sales
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Product</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Features</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Pricing</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Demo</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">About</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Support</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Documentation</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Help Center</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Connect</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Twitter</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">LinkedIn</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Facebook</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-500">&copy; 2024 Savants Manufacturing ERP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home; 