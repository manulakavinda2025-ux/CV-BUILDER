import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FileText, LayoutTemplate, Tag, LayoutDashboard, LogIn, LogOut, Sparkles } from 'lucide-react';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

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
                            <Link to="/pricing" className={navLinkClass('/pricing')}><Tag size={16}/> Pricing</Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-4">
                            {user ? (
                                <>
                                    <Link to="/dashboard" className={navLinkClass('/dashboard')}>
                                        <LayoutDashboard size={16}/> Dashboard
                                    </Link>
                                    <div className="flex items-center gap-3 border-l border-white/10 pl-4 ml-2">
                                        <div className="text-sm">
                                            <p className="font-medium text-slate-300 leading-none">{user.name}</p>
                                        </div>
                                        <button onClick={handleLogout} title="Log Out" className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-950 rounded-lg transition-colors">
                                            <LogOut size={18} />
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <Link to="/login" className="flex items-center gap-2 px-4 py-2 bg-[#7DF9FF] hover:bg-blue-300 text-black text-sm font-medium rounded-lg transition-colors shadow-sm">
                                    <LogIn size={16} /> Login / Sign Up
                                </Link>
                            )}
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
                    <Link to="/pricing" className={navLinkClass('/pricing')} onClick={() => setIsMenuOpen(false)}><Tag size={16}/> Pricing</Link>
                    <div className="pt-4 border-t border-white/10">
                        {user ? (
                            <div className="space-y-4">
                                <Link to="/dashboard" className={navLinkClass('/dashboard')} onClick={() => setIsMenuOpen(false)}>
                                    <LayoutDashboard size={16}/> Dashboard
                                </Link>
                                <div className="flex items-center justify-between px-3">
                                    <p className="text-sm font-medium text-slate-300">{user.name}</p>
                                    <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="text-xs text-red-400 font-bold uppercase tracking-widest">Logout</button>
                                </div>
                            </div>
                        ) : (
                            <Link to="/login" className="flex items-center justify-center gap-2 w-full py-3 bg-[#7DF9FF] text-black text-sm font-bold rounded-xl" onClick={() => setIsMenuOpen(false)}>
                                <LogIn size={16} /> Login / Sign Up
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
