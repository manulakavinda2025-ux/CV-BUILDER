import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

const Templates = () => {
    const templates = [
        {
            id: 'executive',
            name: 'Executive Blue',
            description: 'A clean, modern design with a commanding blue header. Perfect for corporate and leadership roles.',
            color: 'bg-blue-600',
            badge: 'Popular'
        },
        {
            id: 'emerald',
            name: 'Emerald Forest',
            description: 'Fresh and vibrant green accents that stand out while remaining professional. Great for creative and tech roles.',
            color: 'bg-emerald-600',
            badge: 'Pro'
        },
        {
            id: 'midnight',
            name: 'Midnight Purple',
            description: 'A bold, striking dark purple theme that leaves a lasting impression. Ideal for design and marketing.',
            color: 'bg-purple-600',
            badge: 'Pro'
        },
        {
            id: 'modernMinimal',
            name: 'Modern Minimal',
            description: 'A clean, centered design with grey accents. Perfect for clean and simple presentations.',
            color: 'bg-[#e5e7eb]',
            badge: 'New'
        },
        {
            id: 'corporate',
            name: 'Corporate Clean',
            description: 'A crisp, two-column header with light blue section accents.',
            color: 'bg-[#e0f2fe]',
            badge: 'New'
        },
        {
            id: 'darkHeader',
            name: 'Dark Header',
            description: 'A striking black header that commands attention.',
            color: 'bg-[#1e293b]',
            badge: 'New'
        },
        {
            id: 'elegant',
            name: 'Elegant Serif',
            description: 'A refined sidebar design with elegant typography and gold accents.',
            color: 'bg-[#b45309]',
            badge: 'New'
        },
        {
            id: 'classicSidebar',
            name: 'Classic Sidebar',
            description: 'A traditional two-column layout with a deep blue sidebar and crisp white content area.',
            color: 'bg-[#425974]'
        },
        {
            id: 'classicSidebarBurgundy',
            name: 'Classic Burgundy',
            description: 'An elegant variation of the classic layout featuring a sophisticated deep red sidebar.',
            color: 'bg-[#782834]'
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#7DF9FF] to-blue-500">
                    Professional CV Templates
                </h1>
                <p className="text-xl text-slate-400">
                    Choose a starting point. Every template is ATS-friendly, fully customizable, and designed to get you hired.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {templates.map((tpl) => (
                    <div key={tpl.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group flex flex-col">
                        <div className="h-48 bg-slate-100 p-6 flex items-start justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiAvPgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')]"></div>
                            
                            {/* Abstract Template Preview */}
                            <div className="w-3/4 h-full bg-white rounded-t-xl shadow-lg border border-slate-200 relative z-10 flex flex-col overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500">
                                <div className={`h-12 w-full ${tpl.color} opacity-90`}></div>
                                <div className="p-3 space-y-2">
                                    <div className="w-1/3 h-2 bg-slate-200 rounded"></div>
                                    <div className="w-1/2 h-2 bg-slate-200 rounded"></div>
                                    <div className="w-full h-12 bg-slate-50 border border-slate-100 rounded mt-4"></div>
                                </div>
                            </div>
                            
                            {tpl.badge && (
                                <span className={`absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded-full z-20 ${tpl.badge === 'Pro' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}`}>
                                    {tpl.badge}
                                </span>
                            )}
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{tpl.name}</h3>
                            <p className="text-slate-600 text-sm mb-6 flex-1">{tpl.description}</p>
                            <Link to="/builder" className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 rounded-xl font-medium text-sm transition-colors flex items-center justify-center gap-2">
                                Use Template <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-20 bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">Ready to build your CV?</h2>
                <p className="text-slate-400 mb-8 max-w-2xl mx-auto">Join thousands of job seekers who have successfully landed their dream jobs using our professional builder.</p>
                <Link to="/builder" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-all shadow-lg hover:translate-y-[-2px]">
                    Start Building Now <ArrowRight size={20} />
                </Link>
            </div>
        </div>
    );
};

export default Templates;
