import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, FileText, LayoutTemplate, ShieldCheck, ArrowRight } from 'lucide-react';

const Home = () => {
    return (
        <div className="bg-slate-900 min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-32">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-100/50 to-transparent rounded-[100%] blur-3xl pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-8 border border-blue-100">
                        <Sparkles size={16} /> AI-Powered Resume Builder
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-[#7DF9FF] tracking-tight mb-8 leading-tight">
                        Build a professional CV <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">in minutes, not hours.</span>
                    </h1>
                    <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                        Leverage the power of AI to write compelling summaries and bullet points. Stand out from the crowd and land your dream job faster.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                        <Link to="/builder" className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-xl font-bold text-lg hover:bg-slate-200 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 hover:-translate-y-1">
                            Create Free CV <ArrowRight size={20} />
                        </Link>
                        <Link to="/templates" className="w-full sm:w-auto px-8 py-4 bg-black text-[#7DF9FF] border border-[#7DF9FF] rounded-xl font-bold text-lg hover:bg-slate-900 transition-all shadow-sm flex items-center justify-center gap-2 hover:-translate-y-1">
                            View Templates
                        </Link>
                    </div>
                </div>
            </section>

            {/* User Profile Section */}
            <section className="py-24 bg-zinc-950 border-t border-zinc-900 border-b border-zinc-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Account Holder Details</h2>
                        <div className="w-20 h-1 bg-[#7DF9FF] mx-auto rounded-full"></div>
                    </div>
                    <div className="max-w-2xl mx-auto bg-slate-900/50 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            <div className="space-y-4">
                                <div>
                                    <p className="text-slate-500 text-sm uppercase tracking-wider font-semibold">Full Name</p>
                                    <p className="text-xl text-white font-bold">Manula Kavinda</p>
                                </div>
                                <div>
                                    <p className="text-slate-500 text-sm uppercase tracking-wider font-semibold">Location</p>
                                    <p className="text-xl text-white font-bold">Sri Lanka</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-slate-500 text-sm uppercase tracking-wider font-semibold">Contact Number</p>
                                    <p className="text-xl text-white font-bold">0778015278</p>
                                </div>
                                <div>
                                    <p className="text-slate-500 text-sm uppercase tracking-wider font-semibold">Email Address</p>
                                    <p className="text-xl text-white font-bold">manulakavinda2025@gmil.com</p>
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
