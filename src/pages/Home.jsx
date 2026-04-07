import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, CheckCircle, Star, Layers, Cpu, Zap } from 'lucide-react';

const Home = () => {
    return (
        <div className="bg-[#0f172a] min-h-screen text-slate-100 overflow-hidden font-inter relative selection:bg-cyan-500/30">
            {/* Ambient Background 3D Glows */}
            <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-600/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>

            {/* Hero Section */}
            <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 z-10">
                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-cyan-300 text-sm font-semibold mb-8 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                        <Sparkles size={16} /> Next-Gen 3D Resume Builder
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 leading-[1.1]">
                        Craft Your <br className="hidden md:block"/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 drop-shadow-sm">
                            Professional Future
                        </span>
                    </h1>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                        Experience the most advanced AI-driven CV creation. Build, customize, and export stunning professional resumes with our dynamic 3D-enhanced platform in minutes.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
                        <Link to="/builder" className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-bold text-lg transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] flex items-center justify-center gap-3 hover:-translate-y-1 overflow-hidden">
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                            <span className="relative z-10 flex items-center gap-2">Start Building Free <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <Link to="/templates" className="px-8 py-4 glass-dark text-slate-200 border border-slate-700/50 rounded-2xl font-bold text-lg hover:bg-slate-800/80 transition-all flex items-center justify-center gap-3 hover:-translate-y-1 hover:border-slate-500/50">
                            Explore Templates
                        </Link>
                    </div>
                    
                    <div className="mt-12 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 font-medium">
                        <div className="flex items-center gap-2"><CheckCircle size={16} className="text-cyan-500"/> No credit card</div>
                        <div className="flex items-center gap-2"><CheckCircle size={16} className="text-cyan-500"/> Instant PDF Export</div>
                    </div>
                </div>

                {/* Right 3D Visual */}
                <div className="flex-1 w-full max-w-lg lg:max-w-full perspective-1000">
                    <div className="relative w-full aspect-square transform-style-3d hover:rotate-x-12 hover:-rotate-y-12 transition-transform duration-700 ease-out animate-float">
                        {/* Main 3D Card */}
                        <div className="absolute inset-4 glass-dark rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col p-6 z-10 translate-z-10 bg-gradient-to-br from-slate-800/80 to-slate-900/90">
                            <div className="flex items-center gap-3 mb-5 border-b border-white/5 pb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex flex-shrink-0 items-center justify-center shadow-lg border border-white/10">
                                    <span className="text-white font-black text-xl tracking-wider">MK</span>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg leading-tight tracking-wide">Manula Kavinda</h3>
                                    <p className="text-cyan-400 text-sm font-medium">Senior Software Engineer</p>
                                </div>
                            </div>
                            
                            {/* Mock Summary */}
                            <div className="space-y-4 flex-1">
                                <p className="text-xs text-slate-400 leading-relaxed font-light">
                                    Architecting high-performance web applications and AI-driven platforms. Passionate about beautiful UI and scalable backend systems.
                                </p>
                                
                                {/* Mock Skills */}
                                <div className="flex flex-wrap gap-2 pt-1">
                                    <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-md">React.js</span>
                                    <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-md">Node.js</span>
                                    <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-md">AI Integration</span>
                                    <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-md">Tailwind</span>
                                </div>

                                {/* Mock Experience Timeline */}
                                <div className="mt-5 space-y-4 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                                    <div className="relative flex items-start justify-between gap-3 group">
                                         <div className="w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center z-10 shrink-0 mt-0.5 shadow-[0_0_10px_rgba(34,211,238,0.4)]">
                                             <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                         </div>
                                         <div className="flex-1">
                                             <h4 className="text-sm font-bold text-slate-200">Tech Lead</h4>
                                             <p className="text-[10px] text-cyan-500/80 mb-1">2023 - Present</p>
                                             <div className="h-2 w-3/4 bg-slate-700/50 rounded-full"></div>
                                         </div>
                                    </div>
                                    <div className="relative flex items-start justify-between gap-3 group">
                                         <div className="w-6 h-6 rounded-full bg-slate-900 border-2 border-blue-500/50 flex items-center justify-center z-10 shrink-0 mt-0.5"></div>
                                         <div className="flex-1">
                                             <h4 className="text-sm font-bold text-slate-300">Frontend Engineer</h4>
                                             <p className="text-[10px] text-slate-500 mb-1">2020 - 2023</p>
                                             <div className="h-2 w-1/2 bg-slate-700/50 rounded-full mb-1"></div>
                                             <div className="h-2 w-2/3 bg-slate-700/50 rounded-full"></div>
                                         </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating elements behind/around */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl opacity-50 blur-xl translate-z-0"></div>
                        
                        {/* 3D Floating Badge */}
                        <div className="absolute -bottom-8 -left-8 glass-dark p-4 rounded-2xl border border-white/20 shadow-2xl z-20 translate-z-20 flex items-center gap-3 animate-float-delayed">
                            <div className="bg-yellow-500/20 p-2 rounded-xl text-yellow-400">
                                <Star size={24} fill="currentColor" />
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm">Pro Quality</p>
                                <p className="text-slate-400 text-xs">ATS-Friendly</p>
                            </div>
                        </div>
                        
                        <div className="absolute -top-8 right-10 glass-dark p-3 rounded-2xl border border-white/20 shadow-2xl z-20 translate-z-20 flex items-center justify-center animate-float-delayed" style={{ animationDelay: '1s' }}>
                             <Zap className="text-cyan-400" size={28} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Professional Features Section */}
            <section className="relative py-24 bg-slate-900/50 border-t border-white/5 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Designed for the <span className="text-cyan-400">Future</span></h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="glass-dark p-8 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all hover:-translate-y-2 group">
                            <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Sparkles size={28} className="text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">AI Content Generation</h3>
                            <p className="text-slate-400 leading-relaxed">Instantly generate professional summaries and role descriptions using advanced AI explicitly tuned for recruiters.</p>
                        </div>
                        {/* Feature 2 */}
                        <div className="glass-dark p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all hover:-translate-y-2 group">
                            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Layers size={28} className="text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Premium 3D Layouts</h3>
                            <p className="text-slate-400 leading-relaxed">Present your experience in breathtaking, modern formats that break the mold of traditional, boring resumes.</p>
                        </div>
                        {/* Feature 3 */}
                        <div className="glass-dark p-8 rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-all hover:-translate-y-2 group">
                            <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <CheckCircle size={28} className="text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">ATS Optimized Export</h3>
                            <p className="text-slate-400 leading-relaxed">Downloads are processed exactly to pass Application Tracking Systems while maintaining visual superiority.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* User Profile Section */}
            <section className="py-24 bg-[#0a0f1d] border-t border-white/5 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Account Holder Details</h2>
                        <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="max-w-3xl mx-auto perspective-1000">
                        <div className="glass-dark p-10 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl transform-style-3d hover:rotate-x-2 transition-transform duration-500 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-indigo-500"></div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-6 relative translate-z-10">
                                    <div className="group">
                                        <p className="text-cyan-400/80 text-xs uppercase tracking-[0.2em] font-bold mb-1">Full Name</p>
                                        <p className="text-2xl text-white font-bold group-hover:text-cyan-300 transition-colors">Manula Kavinda</p>
                                    </div>
                                    <div className="group">
                                        <p className="text-cyan-400/80 text-xs uppercase tracking-[0.2em] font-bold mb-1">Location</p>
                                        <p className="text-2xl text-white font-bold group-hover:text-cyan-300 transition-colors">Sri Lanka</p>
                                    </div>
                                </div>
                                <div className="space-y-6 relative translate-z-10">
                                    <div className="group">
                                        <p className="text-cyan-400/80 text-xs uppercase tracking-[0.2em] font-bold mb-1">Contact Number</p>
                                        <p className="text-2xl text-white font-bold group-hover:text-cyan-300 transition-colors">0778015278</p>
                                    </div>
                                    <div className="group">
                                        <p className="text-cyan-400/80 text-xs uppercase tracking-[0.2em] font-bold mb-1">Email Address</p>
                                        <p className="text-2xl text-white font-bold group-hover:text-cyan-300 transition-colors truncate">manulakavinda2025@gmil.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
