import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FileText, LayoutTemplate, LayoutDashboard, Sparkles } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const navLinkClass = (path) => `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(path) ? 'bg-[#7DF9FF] text-black' : 'text-slate-300 hover:text-[#7DF9FF] hover:bg-white/10'}`;

    return (
        <nav className="bg-slate-900 border-b border-white/10 sticky top-0 z-50 print:hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center gap-4 lg:gap-8">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="p-2 bg-gradient-to-br from-[#7DF9FF] to-blue-500 rounded-lg shadow-inner">
                                <Sparkles size={20} className="text-black" />
                            </div>
                            <span className="font-bold text-lg md:text-xl tracking-tight text-white whitespace-nowrap">AI CV Builder</span>
                        </Link>
                        
                        <div className="hidden md:flex space-x-1">
                            <Link to="/" className={navLinkClass('/')}>Home</Link>
                            <Link to="/builder" className={navLinkClass('/builder')}><FileText size={16}/> Create CV</Link>
                            <Link to="/templates" className={navLinkClass('/templates')}><LayoutTemplate size={16}/> Templates</Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-4">
                            <Link to="/dashboard" className={navLinkClass('/dashboard')}>
                                <LayoutDashboard size={16}/> Dashboard
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                        >
                            {isMenuOpen ? <span className="text-xl">✕</span> : <span className="text-xl">☰</span>}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-slate-900 border-b border-white/10 px-4 py-4 space-y-2 animate-in slide-in-from-top duration-200">
                    <Link to="/" className={navLinkClass('/')} onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link to="/builder" className={navLinkClass('/builder')} onClick={() => setIsMenuOpen(false)}><FileText size={16}/> Create CV</Link>
                    <Link to="/templates" className={navLinkClass('/templates')} onClick={() => setIsMenuOpen(false)}><LayoutTemplate size={16}/> Templates</Link>
                    <div className="pt-4 border-t border-white/10 space-y-4">
                        <Link to="/dashboard" className={navLinkClass('/dashboard')} onClick={() => setIsMenuOpen(false)}>
                            <LayoutDashboard size={16}/> Dashboard
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
