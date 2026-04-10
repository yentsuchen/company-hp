import { useState } from 'react';
import { 
  Globe, 
  Menu, 
  X, 
  Cpu, 
  Mail,
  LayoutDashboard,
  Package,
  MessageSquare,
  Settings,
  LogOut,
  ChevronRight,
  HardDrive
} from 'lucide-react';

export default function DashboardApp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModule, setActiveModule] = useState('embedded-storage');

  const modules = [
    { id: 'embedded-storage', label: 'Embedded Storage', icon: LayoutDashboard },
    { id: 'products', label: 'Embedded Memory', icon: Package },
    { id: 'inquiries', label: 'Customer Inquiries', icon: MessageSquare },
    { id: 'settings', label: 'System Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800 selection:bg-blue-100 selection:text-blue-900">
      {/* Top Bar */}
      <div className="hidden md:block bg-slate-100 border-b border-slate-200 text-xs py-2 shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center gap-6">
          <a href="/index.html" className="flex items-center gap-1 text-slate-600 hover:text-blue-700 transition-colors">
            <Globe className="w-3.5 h-3.5" />
            Global Network
          </a>
          <a href="/index.html#contact" className="flex items-center gap-1 text-slate-600 hover:text-blue-700 transition-colors">
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
      <nav className="bg-white sticky top-0 z-50 border-b border-slate-200 shadow-sm shrink-0">
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
              <a href="/index.html" className="h-full flex items-center px-5 text-sm font-bold text-slate-700 hover:text-blue-700 hover:bg-slate-50 border-b-2 border-transparent hover:border-blue-700 transition-all">HOME</a>
              <a href="/index.html#about" className="h-full flex items-center px-5 text-sm font-bold text-slate-700 hover:text-blue-700 hover:bg-slate-50 border-b-2 border-transparent hover:border-blue-700 transition-all">ABOUT US</a>
              <a href="/index.html#solutions" className="h-full flex items-center px-5 text-sm font-bold text-slate-700 hover:text-blue-700 hover:bg-slate-50 border-b-2 border-transparent hover:border-blue-700 transition-all">OUR SOLUTIONS</a>
              <a href="/index.html#contact" className="ml-4 px-6 py-2.5 bg-blue-800 text-white text-sm font-bold rounded hover:bg-blue-900 transition-colors flex items-center gap-2">
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
              <a href="/index.html" className="block px-3 py-3 border-b border-slate-100 text-base font-medium text-slate-700">Home</a>
              <a href="/index.html#about" className="block px-3 py-3 border-b border-slate-100 text-base font-medium text-slate-700">About Us</a>
              <a href="/index.html#solutions" className="block px-3 py-3 border-b border-slate-100 text-base font-medium text-slate-700">Our Solutions</a>
              <a href="/index.html#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-blue-700">Contact Us</a>
            </div>
          </div>
        )}
      </nav>

      {/* Dashboard Layout */}
      <div className="flex-1 flex overflow-hidden max-w-7xl mx-auto w-full">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-slate-200 flex flex-col hidden md:flex shrink-0 my-6 rounded-l-xl shadow-sm">
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {modules.map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveModule(module.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeModule === module.id 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <module.icon className={`w-5 h-5 ${activeModule === module.id ? 'text-blue-700' : 'text-slate-400'}`} />
                {module.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <header className="mb-8 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">
                  {modules.find(m => m.id === activeModule)?.label}
                </h1>
                <p className="text-slate-500 mt-1">
                  {activeModule === 'embedded-storage' 
                    ? 'Recommend the best embedded storage product.' 
                    : activeModule === 'products'
                    ? 'Recommend the best embedded memory product.'
                    : `Manage your ${modules.find(m => m.id === activeModule)?.label.toLowerCase()} here.`}
                </p>
              </div>
            </header>

            {/* Module Content */}
            {activeModule === 'embedded-storage' ? (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                {/* Hero Banner replicating the uploaded image */}
                <div className="relative h-[400px] w-full bg-slate-900 flex flex-col items-center justify-center text-center overflow-hidden">
                  {/* Background Image (Circuit board / Server vibe) */}
                  <div 
                    className="absolute inset-0 opacity-50 bg-cover bg-center mix-blend-screen"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop')" }}
                  ></div>
                  <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
                  
                  {/* Glowing flare behind the logo to match the image */}
                  <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/60 blur-[100px] rounded-full pointer-events-none"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center px-4">
                    <div className="flex items-center gap-4 mb-6">
                      <svg viewBox="0 0 450 100" className="h-16 md:h-20 drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="smTopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8fd3f4" />
                            <stop offset="100%" stopColor="#0072b5" />
                          </linearGradient>
                        </defs>
                        <g transform="translate(10, 5) scale(0.9)">
                          {/* Top face */}
                          <polygon points="50,55 15,35 50,15 85,35" fill="url(#smTopGradient)" />
                          {/* Left face */}
                          <polygon points="50,55 15,35 15,75 50,95" fill="#004b87" />
                          {/* Right face */}
                          <polygon points="50,55 85,35 85,75 50,95" fill="#0072b5" />
                          
                          {/* Left face lines */}
                          <circle cx="25" cy="45" r="3" fill="#FFFFFF" />
                          <line x1="25" y1="45" x2="50" y2="60" stroke="#FFFFFF" strokeWidth="3" />
                          
                          <circle cx="40" cy="75" r="3" fill="#FFFFFF" />
                          <line x1="40" y1="75" x2="15" y2="60" stroke="#FFFFFF" strokeWidth="3" />
                          
                          {/* Right face lines */}
                          <circle cx="60" cy="55" r="3" fill="#FFFFFF" />
                          <line x1="60" y1="55" x2="60" y2="89" stroke="#FFFFFF" strokeWidth="3" />
                          
                          <circle cx="75" cy="45" r="3" fill="#FFFFFF" />
                          <line x1="75" y1="45" x2="75" y2="80" stroke="#FFFFFF" strokeWidth="3" />
                        </g>
                        <text x="100" y="70" fontFamily="Arial, Helvetica, sans-serif" fontSize="56" fontWeight="900" fontStyle="italic" fill="#FFFFFF" letterSpacing="-1.5">SiliconMotion</text>
                      </svg>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-2xl max-w-4xl leading-tight" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
                      Driving Innovation <br/> in Flash Storage
                    </h2>
                  </div>
                </div>
                
                {/* Module Details */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Embedded Storage Solutions</h3>
                      <p className="text-slate-500 mt-1">Manage and monitor your flash storage portfolio.</p>
                    </div>
                    <a 
                      href="https://www.siliconmotion.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-800 text-white text-sm font-medium rounded-lg hover:bg-blue-900 transition-colors inline-block text-center"
                    >
                      View Details
                    </a>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { title: 'eMMC Solutions', desc: 'Advanced eMMC product for optimal performance, endurance, and reliability.' },
                      { title: 'UFS Solutions', desc: 'Advanced UFS product for optimal performance, endurance, and reliability.' },
                      { title: 'PCIe NVMe SSD', desc: 'NVMe SATAIII BGA SSD for optimal performance, endurance, and reliability.' }
                    ].map((tech) => (
                      <div key={tech.title} className="p-6 rounded-xl border border-slate-200 bg-slate-50 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group">
                        <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <HardDrive className="w-6 h-6 text-blue-700" />
                        </div>
                        <h4 className="font-bold text-slate-900 mb-2">{tech.title}</h4>
                        <p className="text-sm text-slate-500">{tech.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : activeModule === 'products' ? (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                {/* Hero Banner */}
                <div className="relative h-[400px] w-full bg-slate-900 flex flex-col items-center justify-center text-center overflow-hidden">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 opacity-50 bg-cover bg-center mix-blend-screen"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop')" }}
                  ></div>
                  <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
                  
                  {/* Glowing flare */}
                  <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/60 blur-[100px] rounded-full pointer-events-none"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center px-4">
                    <div className="flex items-center gap-3 mb-6">
                      <img 
                        src="https://www.longsys.com/home/images/logo.png" 
                        alt="LONGSYS Logo" 
                        className="h-12 md:h-16 object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-2xl max-w-4xl leading-tight" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
                      Driving Innovation <br/> in Embedded Memory
                    </h2>
                  </div>
                </div>
                
                {/* Module Details */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Embedded Memory Solutions</h3>
                      <p className="text-slate-500 mt-1">Manage and monitor your embedded memory portfolio.</p>
                    </div>
                    <a 
                      href="https://www.siliconmotion.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-800 text-white text-sm font-medium rounded-lg hover:bg-blue-900 transition-colors inline-block text-center"
                    >
                      View Details
                    </a>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { title: 'LPDDR4x DRAM', desc: 'Advanced LPDDR4x DRAM product for optimal performance, endurance, and reliability.' },
                      { title: 'LPDDR5x DRAM', desc: 'Advanced LPDDR5x DRAM product for optimal performance, endurance, and reliability.' },
                      { title: 'M.2 SSD Module', desc: 'Advanced M.2 SSD Module for optimal performance, endurance, and reliability.' }
                    ].map((tech) => (
                      <div key={tech.title} className="p-6 rounded-xl border border-slate-200 bg-slate-50 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group">
                        <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Package className="w-6 h-6 text-blue-700" />
                        </div>
                        <h4 className="font-bold text-slate-900 mb-2">{tech.title}</h4>
                        <p className="text-sm text-slate-500">{tech.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 min-h-[400px] flex items-center justify-center border-dashed">
                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    {(() => {
                      const ActiveIcon = modules.find(m => m.id === activeModule)?.icon || LayoutDashboard;
                      return <ActiveIcon className="w-8 h-8 text-slate-400" />;
                    })()}
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">Module Framework Ready</h3>
                  <p className="text-slate-500 max-w-md mx-auto mb-6">
                    This is the placeholder for the <strong>{modules.find(m => m.id === activeModule)?.label}</strong> module. 
                    You can inject different components here based on the selected sidebar item.
                  </p>
                  <button className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
                    Configure Module <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
