import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, Sparkles, Code, Palette, Share2 } from 'lucide-react';

const Dashboard = () => {
    const { user, cvCount } = useAuth();

    return (
        <div className="min-h-screen bg-slate-900 text-white">
            <div className="max-w-6xl mx-auto px-4 py-8 sm:py-16 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
                    
                    {/* Profile Widget */}
                    <div className="w-full lg:w-1/3 lg:sticky lg:top-24 order-2 lg:order-1">
                        <div className="bg-slate-800/50 backdrop-blur-xl rounded-[1.5rem] sm:rounded-[2rem] border border-white/5 p-6 sm:p-8 shadow-2xl">
                            <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
                                <div className="relative mb-4 sm:mb-6">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#7DF9FF] to-blue-500 flex items-center justify-center text-3xl sm:text-4xl font-extrabold text-slate-900 shadow-inner border-4 border-white/5">
                                        {user.name?.charAt(0) || 'U'}
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 bg-emerald-500 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-4 border-slate-800"></div>
                                </div>
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-black text-white mb-1">{user.name}</h2>
                                    <p className="text-slate-400 font-medium text-xs sm:text-sm truncate max-w-[200px] sm:max-w-none">{user.email}</p>
                                </div>
                            </div>

                            <div className="space-y-4 sm:space-y-6">
                                <div className="p-4 sm:p-6 rounded-2xl bg-slate-900/50 border border-white/5 ring-1 ring-white/5">
                                    <div className="flex justify-between items-center mb-3 sm:mb-4">
                                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-500">Service Plan</span>
                                        <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-tighter px-2 sm:px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                            Free Forever
                                        </span>
                                    </div>
                                    <div className="flex items-end justify-between">
                                        <div className="text-xl sm:text-2xl font-bold">{cvCount}</div>
                                        <div className="text-[9px] sm:text-[10px] text-slate-500 font-bold uppercase">CVs Exported</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 space-y-8 lg:space-y-10 order-1 lg:order-2">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                            <div>
                                <h1 className="text-3xl sm:text-4xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#7DF9FF] to-blue-500 mb-2">
                                    Your Dashboard
                                </h1>
                                <p className="text-slate-400 font-medium text-sm sm:text-base text-left">Welcome back to AI CV Builder!</p>
                            </div>
                            <Link to="/builder" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-black px-6 py-3.5 rounded-2xl text-sm font-bold hover:bg-slate-100 transition-all shadow-xl hover:translate-y-[-2px]">
                                <FileText size={18} /> New CV Draft
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            {/* Recent CV Card */}
                            <div className="bg-slate-800/50 p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-white/5 hover:border-[#7DF9FF]/30 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-[#7DF9FF]/5 rounded-full blur-3xl -mr-12 sm:-mr-16 -mt-12 sm:-mt-16 group-hover:bg-[#7DF9FF]/10 transition-colors"></div>
                                <div className="flex justify-between items-start mb-6 sm:mb-8">
                                    <div className="p-3 sm:p-4 bg-slate-900 rounded-2xl text-[#7DF9FF] ring-1 ring-white/5 shadow-inner">
                                        <FileText size={24} sm:size={28} />
                                    </div>
                                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-900 px-3 py-1 rounded-full border border-white/5">Auto-saved</span>
                                </div>
                                <h3 className="font-black text-lg sm:text-xl mb-1 group-hover:text-[#7DF9FF] transition-colors tracking-tight">Current CV Draft</h3>
                                <p className="text-[10px] sm:text-sm font-bold text-slate-500 mb-6 sm:mb-8 uppercase tracking-tighter italic">Ready to Edit</p>
                                <Link to="/builder" className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#7DF9FF] uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                                    Continue Editing <ArrowRight size={14} sm:size={16} />
                                </Link>
                            </div>

                             {/* Community/Features Card */}
                             <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-white/5 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-[#7DF9FF] to-blue-500"></div>
                                <div className="flex justify-between items-start mb-6 sm:mb-8">
                                    <div className="p-3 sm:p-4 bg-emerald-500/10 text-emerald-400 rounded-2xl ring-1 ring-emerald-500/20">
                                        <Sparkles size={24} sm:size={28} />
                                    </div>
                                </div>
                                <h3 className="font-black text-lg sm:text-xl mb-3 sm:mb-4 tracking-tight">100% Free Tools</h3>
                                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                    <li className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-300">
                                        <div className="p-1 bg-blue-500/10 rounded-lg"><Code size={12} sm:size={14} className="text-blue-400"/></div>
                                        Unlimited Exports
                                    </li>
                                    <li className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-300">
                                        <div className="p-1 bg-blue-500/10 rounded-lg"><Palette size={12} sm:size={14} className="text-blue-400"/></div>
                                        All Premium Themes Unlocked
                                    </li>
                                    <li className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-300">
                                        <div className="p-1 bg-blue-500/10 rounded-lg"><Share2 size={12} sm:size={14} className="text-blue-400"/></div>
                                        No Login Required
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
