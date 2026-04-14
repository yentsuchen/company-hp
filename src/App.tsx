import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
  Globe, 
  Menu, 
  X, 
  Building2, 
  Cpu, 
  Globe2, 
  Leaf, 
  Microscope, 
  Users,
  ArrowRight,
  Mail,
  Phone
} from 'lucide-react';

const businessFeatures = [
  { icon: Cpu, title: 'Embedded Storage', desc: <><span className="font-semibold text-base text-blue-600">Silicon Motion</span> is the global leader in developing NAND flash controller technology for SSDs.</>, link: 'https://www.siliconmotion.com' },
  { icon: Globe2, title: 'Power Device', desc: <><span className="font-semibold text-base text-blue-600">CET</span> specializes in designing and developing high-current, high-power, and high-density power semiconductor.</>, link: 'https://cet-mos.com' },
  { icon: Microscope, title: 'Embedded DRAM', desc: <><span className="font-semibold text-base text-blue-600">Longsys</span> is engaged in the R&D, design, and sales of industrial DRAM solutions.</>, link: 'https://www.longsys.com' },
];

const aboutLinks = [
  { title: 'Company Profile', icon: Building2 },
  { title: 'Message from CEO', icon: Users },
  { title: 'Management Philosophy', icon: Globe },
  { title: 'Organizational Chart', icon: Users },
  { title: 'Company History', icon: Building2 },
  { title: 'Efforts for the Environment', icon: Leaf },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-blue-100 selection:text-blue-900">
      {/* Top Bar */}
      <div className="hidden md:block bg-slate-100 border-b border-slate-200 text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center gap-6">
          <a href="#" className="flex items-center gap-1 text-slate-600 hover:text-blue-700 transition-colors">
            <Globe className="w-3.5 h-3.5" />
            Global Network
          </a>
          <a href="#contact" className="flex items-center gap-1 text-slate-600 hover:text-blue-700 transition-colors">
            <Mail className="w-3.5 h-3.5" />
            Inquiry
          </a>
          <div className="flex items-center gap-2 border-l border-slate-300 pl-4">
            <span className="text-slate-500">Language:</span>
            <a href="#" className="text-blue-700 font-medium">EN</a>
            <span className="text-slate-300">|</span>
            {/*<a href="#" className="text-slate-600 hover:text-blue-700 transition-colors">JP</a>
            <span className="text-slate-300">|</span> */}
            <a href="#" className="text-slate-600 hover:text-blue-700 transition-colors">ZH</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white sticky top-0 z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-800 rounded flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div>

                <div className="font-bold text-2xl tracking-tight text-blue-900 leading-none">Genrate Technologies</div>
                {/* <div className="text-[10px] text-slate-500 tracking-widest uppercase mt-1">Technologies Co., Ltd.</div> */}
              </div>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center h-full">
              <a href="#" className="h-full flex items-center px-5 text-sm font-bold text-slate-700 hover:text-blue-700 hover:bg-slate-50 border-b-2 border-transparent hover:border-blue-700 transition-all">HOME</a>
              <a href="#about" className="h-full flex items-center px-5 text-sm font-bold text-slate-700 hover:text-blue-700 hover:bg-slate-50 border-b-2 border-transparent hover:border-blue-700 transition-all">ABOUT US</a>
              <a href="#solutions" className="h-full flex items-center px-5 text-sm font-bold text-slate-700 hover:text-blue-700 hover:bg-slate-50 border-b-2 border-transparent hover:border-blue-700 transition-all">OUR SOLUTIONS</a>
              <a href="#contact" className="ml-4 px-6 py-2.5 bg-blue-800 text-white text-sm font-bold rounded hover:bg-blue-900 transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <a href="#" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 border-b border-slate-100 text-base font-medium text-slate-700">Home</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 border-b border-slate-100 text-base font-medium text-slate-700">About Us</a>
              <a href="#solutions" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 border-b border-slate-100 text-base font-medium text-slate-700">Our Solutions</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-blue-700">Contact Us</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] bg-slate-900 overflow-hidden">
        <img 
          src="https://picsum.photos/seed/corporate/1920/1080" 
          alt="Corporate Building" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Connecting the Future <br />
              <span className="text-blue-400">Through Electronics</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 border-l-4 border-blue-500 pl-4">
              As a specialized technology service company, we provide advanced electronic components and innovative solutions globally.
            </p>
            <a href="#about" className="inline-flex items-center px-6 py-3 bg-white text-blue-900 font-bold rounded hover:bg-blue-50 transition-colors">
              Learn More About Us
              <ChevronRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section id="solutions" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 inline-block relative">
              Our Solutions
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-blue-600"></span>
            </h2>
            <p className="mt-8 text-slate-600 max-w-2xl mx-auto">
              We support our customers' manufacturing by providing optimal solutions from a wide range of electronic components and systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {businessFeatures.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden group hover:shadow-md transition-shadow"
              >
                <div className="h-48 bg-slate-200 relative overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/business${idx}/600/400`} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <feature.icon className="w-6 h-6 text-blue-700" />
                    <h3 className="text-xl font-bold text-slate-800">{feature.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {feature.desc}
                  </p>
                  <a href={feature.link} target={feature.link.startsWith('http') ? "_blank" : "_self"} rel={feature.link.startsWith('http') ? "noopener noreferrer" : ""} className="text-blue-700 font-medium text-sm flex items-center hover:underline">
                    Read more <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold text-blue-900 relative inline-block">
                About Us
                <span className="absolute -bottom-3 left-0 w-12 h-1 bg-blue-600"></span>
              </h2>
              <p className="mt-8 text-slate-600 leading-relaxed">
                Since our founding, Genrate Technologies has been committed to contributing to society through the advancement of electronics. We build strong partnerships globally to deliver the best value.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutLinks.map((link, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded hover:bg-blue-50 hover:border-blue-200 hover:text-blue-800 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <link.icon className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
                    <span className="font-medium text-slate-700 group-hover:text-blue-800">{link.title}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location / Contact Section */}
      <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold text-blue-900 relative inline-block mb-8">
                Location
                <span className="absolute -bottom-3 left-0 w-12 h-1 bg-blue-600"></span>
              </h2>
              <div className="space-y-6 text-slate-600">
                <div>
                  <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-blue-700" />
                    Headquarters
                  </h3>
                  <p className="leading-relaxed">
                    5F, No.105, Hongchang 8th St., Taoyuan Dist.,<br />
                    Taoyuan City, 33060<br />
                    Taiwan (R.O.C.)
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-blue-700" />
                    Contact
                  </h3>
                  <p>TEL: +886-3-392-2643</p>
                  <p>FAX: +886-3-378-1367</p>
                  <p>EMAIL: sales@genrate.com.tw</p>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 w-full h-[400px] bg-slate-200 rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <iframe 
                src="https://maps.google.com/maps?q=桃園市桃園區宏昌八街105號&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Interactive Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl tracking-tight text-white">Genrate Technologies</span>
              </div>
              <p className="text-sm text-slate-400 mb-4 max-w-sm">
                5F, No.105, Hongchang 8th St., Taoyuan Dist.,<br />
                Taoyuan City, 33060<br />
                TEL: +886-3-392-2643<br />
                FAX: +886-3-378-1367<br />
                EMAIL: sales@genrate.com.tw 
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300">
                <Mail className="w-4 h-4" /> Contact Us
              </a>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 border-b border-slate-700 pb-2">Information</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Our Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Products</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 border-b border-slate-700 pb-2">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Site Map</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Terms of Use</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-xs text-center text-slate-500">
            Copyright &copy; {new Date().getFullYear()} Genrate Technologies Co., Ltd. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
