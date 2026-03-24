import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import cvData from '../cv.json';
import { Mail, Phone, MapPin, Linkedin, Github, Briefcase, GraduationCap, Award, ExternalLink, Sparkles, Download, Edit2, Plus, Trash2, CheckCircle, Crown, Palette, List, FileText } from 'lucide-react';
// --- Theme Definitions ---
const THEMES = {
  executive: {
    id: 'executive',
    name: 'Executive Blue',
    headerBg: 'from-slate-900 to-slate-800',
    primaryText: 'text-slate-900',
    accentText: 'text-slate-600',
    accentBg: 'bg-slate-900',
    accentLight: 'bg-slate-900/10 text-slate-900',
    borderLight: 'border-slate-200'
  },
  emerald: {
    id: 'emerald',
    name: 'Emerald Forest',
    headerBg: 'from-emerald-950 to-teal-900',
    primaryText: 'text-emerald-900',
    accentText: 'text-emerald-700',
    accentBg: 'bg-emerald-950',
    accentLight: 'bg-emerald-950/10 text-emerald-950',
    borderLight: 'border-emerald-200'
  },
  midnight: {
    id: 'midnight',
    name: 'Midnight Purple',
    headerBg: 'from-indigo-950 to-purple-900',
    primaryText: 'text-indigo-950',
    accentText: 'text-indigo-700',
    accentBg: 'bg-indigo-950',
    accentLight: 'bg-indigo-950/10 text-indigo-950',
    borderLight: 'border-indigo-200'
  },
  classicSidebar: {
    id: 'classicSidebar',
    name: 'Classic Sidebar',
    headerBg: 'from-[#425974] to-[#425974]',
    primaryText: 'text-[#425974]',
    accentText: 'text-[#5a7698]',
    accentBg: 'bg-[#4A5D71]',
    accentLight: 'bg-[#4A5D71]/10 text-[#4A5D71]',
    borderLight: 'border-[#4A5D71]/20'
  },
  classicSidebarBurgundy: {
    id: 'classicSidebarBurgundy',
    name: 'Classic Burgundy',
    headerBg: 'from-[#60202a] to-[#60202a]',
    primaryText: 'text-[#60202a]',
    accentText: 'text-[#8a2f3d]',
    accentBg: 'bg-[#782834]',
    accentLight: 'bg-[#782834]/10 text-[#782834]',
    borderLight: 'border-[#782834]/20'
  }
};

// --- Form Input Components ---

const InputGroup = ({ label, children }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>
        {children}
    </div>
);

// --- Paywall Modal Component ---
const PaywallModal = ({ isOpen, onClose, currentTier }) => {
    const navigate = useNavigate();
    if (!isOpen) return null;
    
    // Determine messaging based on tier
    const isBasic = currentTier === 'Basic';
    const title = isBasic ? "Upgrade to Pro" : "Upgrade Your Plan";
    const desc = isBasic 
        ? "You've reached your 5 CV limit on the Basic plan. Upgrade to Pro for unlimited CVs!"
        : "You've used your 1 free CV export. Upgrade to a premium plan to create more!";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in fade-in zoom-in duration-200">
                <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
                    ✕
                </button>
                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30">
                        <Crown className="text-white relative z-10" size={32} />
                    </div>
                </div>
                <h2 className="text-2xl font-bold text-center text-slate-800 mb-2">{title}</h2>
                <p className="text-slate-600 text-center mb-8">{desc}</p>
                
                <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                        <CheckCircle className="text-emerald-500" size={20} /> <span className="text-slate-700 font-medium">{isBasic ? "Unlimited CV Exports" : "Create up to 5 CVs"}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle className="text-emerald-500" size={20} /> <span className="text-slate-700 font-medium">Full AI Rewrite Access</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle className="text-emerald-500" size={20} /> <span className="text-slate-700 font-medium">Premium Color Themes</span>
                    </div>
                </div>

                <button onClick={() => navigate('/pricing')} className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                    <Sparkles size={18} /> View Pricing Plans
                </button>
                <p className="text-center text-xs text-slate-400 mt-4">Upgrade safely and securely.</p>
            </div>
        </div>
    );
};

const ClassicDocument = ({ data, theme }) => (
    <div className="flex flex-col sm:flex-row min-h-full w-full bg-white text-slate-800 print:w-[210mm] print:h-[297mm] print:min-h-[297mm] print:overflow-hidden print:shadow-none print:m-0 print:p-0">
        {/* Left Sidebar */}
        <aside className={`w-full sm:w-[30%] ${theme.accentBg} text-white p-8 space-y-8 print:w-[30%]`}>
            <div className="flex justify-center mb-6">
                 {/* Placeholder for Photo */}
                 <div className="w-32 h-40 bg-white/10 rounded-md shadow-inner flex items-center justify-center border-4 border-white/20 overflow-hidden relative group">
                      {data.photo ? <img src={data.photo} alt="Profile" className="w-full h-full object-cover" /> : <span className="text-sm font-semibold text-white/50 text-center px-2">Profile Photo</span>}
                 </div>
            </div>

            <div className="space-y-4 text-[13px] leading-relaxed break-words border-b border-white/20 pb-8">
                {data.contact?.phone && (
                <div className="flex items-start gap-4">
                    <div className="mt-1"><Phone size={16} /></div>
                    <span>{data.contact.phone}</span>
                </div>
                )}
                {data.contact?.email && (
                <div className="flex items-start gap-4">
                    <div className="mt-1"><Mail size={16} /></div>
                    <span>{data.contact.email}</span>
                </div>
                )}
                {data.contact?.location && (
                <div className="flex items-start gap-4">
                    <div className="mt-1"><MapPin size={16} /></div>
                    <span>{data.contact.location}</span>
                </div>
                )}
                {data.contact?.linkedin && (
                <div className="flex items-start gap-4">
                    <div className="mt-1"><Linkedin size={16} /></div>
                    <span>{data.contact.linkedin.replace(/^https?:\/\/(www\.)?/, '')}</span>
                </div>
                )}
            </div>

            {data.skills && data.skills.length > 0 && (
            <div className="space-y-3">
                <h3 className="text-xl font-bold uppercase tracking-wider mb-4 border-b border-white/20 pb-2">Skills</h3>
                <ul className="space-y-2 text-[13px]">
                   {data.skills.map((skill, i) => (
                       <li key={i} className="flex gap-2.5">
                           <span className="mt-[6px] text-xs">■</span>
                           <span className="font-medium text-white/90">
                              {typeof skill === 'string' ? skill : (skill.items?.[0] || skill.category)}
                           </span>
                       </li>
                   ))}
                </ul>
            </div>
            )}

            {data.certifications && data.certifications.length > 0 && (
            <div className="space-y-3">
                <h3 className="text-xl font-bold uppercase tracking-wider mb-4 border-b border-white/20 pb-2 mt-6">Certifications</h3>
                <ul className="space-y-3 text-[13px]">
                   {data.certifications.map((cert, i) => (
                       <li key={i} className="flex gap-2.5">
                           <span className="mt-[6px] text-xs">■</span>
                           <span className="font-medium text-white/90">
                               {typeof cert === 'string' ? cert : `${cert.name} ${cert.issuer ? `(${cert.issuer})` : ''}`}
                           </span>
                       </li>
                   ))}
                </ul>
            </div>
            )}

            {data.languages && data.languages.length > 0 && (
            <div className="space-y-3">
                <h3 className="text-xl font-bold uppercase tracking-wider mb-4 border-b border-white/20 pb-2 mt-6">Languages</h3>
                <ul className="space-y-3 text-[13px]">
                   {data.languages.map((lang, i) => (
                       <li key={i} className="flex gap-2.5">
                           <span className="mt-[6px] text-xs">■</span>
                           <span className="font-medium text-white/90">
                               {typeof lang === 'string' ? lang : lang.name}
                           </span>
                       </li>
                   ))}
                </ul>
            </div>
            )}

            {data.hobbies && data.hobbies.length > 0 && (
            <div className="space-y-3">
                <h3 className="text-xl font-bold uppercase tracking-wider mb-4 border-b border-white/20 pb-2 mt-6">Hobbies</h3>
                <ul className="space-y-3 text-[13px]">
                   {data.hobbies.map((hobby, i) => (
                       <li key={i} className="flex gap-2.5">
                           <span className="mt-[6px] text-xs">■</span>
                           <span className="font-medium text-white/90">
                               {typeof hobby === 'string' ? hobby : hobby.name}
                           </span>
                       </li>
                   ))}
                </ul>
            </div>
            )}
        </aside>

        {/* Right Main Content */}
        <div className="w-full sm:w-[70%] p-10 print:w-[70%] print:p-8">
            <header className="mb-6">
                <h1 className={`text-5xl font-extrabold uppercase tracking-widest ${theme.primaryText} mb-3`}>{data.name || 'Your Name'}</h1>
                <h2 className="text-xl font-bold text-slate-800">{data.role || 'Professional Title'}</h2>
            </header>

            {data.summary && (
                <p className="text-[14px] text-slate-700 leading-relaxed mb-8">
                    {data.summary}
                </p>
            )}

            {data.experience && data.experience.length > 0 && (
                <div className="mb-8">
                    <h3 className={`text-xl font-bold uppercase tracking-widest ${theme.primaryText} mb-4 border-b-2 border-slate-200 pb-2`}>Experience</h3>
                    <div className="space-y-6">
                        {data.experience.map((exp, i) => (
                            <div key={i}>
                                <div className="font-bold text-[15px] text-slate-800 mb-1">
                                    {exp.role} <span className="text-slate-500 font-normal">| {exp.startDate} To {exp.endDate}</span>
                                </div>
                                <div className="text-[14px] font-semibold text-slate-700 mb-2">
                                    {exp.company}, City, Country
                                </div>
                                <ul className="space-y-1.5 pl-4">
                                    {Array.isArray(exp.responsibilities) ? exp.responsibilities.map((resp, j) => (
                                        <li key={j} className="text-[13px] text-slate-600 flex gap-2 leading-relaxed">
                                            <span className="mt-[4px] text-xs">■</span> <span>{resp}</span>
                                        </li>
                                    )) : (
                                        <li className="text-[13px] text-slate-600 flex gap-2 leading-relaxed">
                                            <span className="mt-[4px] text-xs">■</span> <span className="whitespace-pre-wrap">{exp.responsibilities}</span>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {data.education && data.education.length > 0 && (
                <div className="mb-8">
                    <h3 className={`text-xl font-bold uppercase tracking-widest ${theme.primaryText} mb-4 border-b-2 border-slate-200 pb-2`}>Education</h3>
                    <div className="space-y-4">
                        {data.education.map((edu, i) => (
                            <div key={i}>
                                <div className="font-bold text-[14px] text-slate-800">
                                    {edu.degree}: [Major] | <span className="font-normal text-slate-500">{edu.endDate || edu.startDate}</span>
                                </div>
                                <div className="text-[14px] text-slate-600">
                                    {edu.institution}, [State]
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="mb-8">
                <h3 className={`text-xl font-bold uppercase tracking-widest ${theme.primaryText} mb-4 border-b-2 border-slate-200 pb-2`}>References</h3>
                <p className="text-[14px] text-slate-600">References available on request</p>
            </div>
        </div>
    </div>
);

function CVBuilder() {
  const { user, loading, subscriptionTier, cvCount, incrementCvCount } = useAuth();
  const navigate = useNavigate();

  const initialData = { ...cvData, role: "Senior Software Engineer" };
  if(initialData.experience) {
     initialData.experience = initialData.experience.map(exp => ({
         ...exp,
         responsibilities: Array.isArray(exp.responsibilities) ? exp.responsibilities.join('\n') : exp.responsibilities
     }))
  }

  const [cvState, setCvState] = useState(initialData);
  const [activeTheme, setActiveTheme] = useState('classicSidebar');
  const theme = THEMES[activeTheme];

  const [isPaywallOpen, setIsPaywallOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('edit'); // 'edit' or 'preview'

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white">
        <div className="w-12 h-12 border-4 border-[#7DF9FF] border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-slate-400 font-medium">Loading your CV workspace...</p>
      </div>
    );
  }

  if (!user) return null;

  const handlePersonalChange = (e) => {
      const { name, value } = e.target;
      if (['email', 'phone', 'location', 'linkedin', 'portfolio'].includes(name)) {
          setCvState(prev => ({
              ...prev,
              contact: { ...(prev.contact || {}), [name]: value }
          }));
      } else {
          setCvState(prev => ({ ...prev, [name]: value }));
      }
  };

  const handleSummaryChange = (e) => {
      setCvState(prev => ({ ...prev, summary: e.target.value }));
  };

  const handleArrayItemChange = (arrayName, index, field, value) => {
      setCvState(prev => {
          const newArray = [...(prev[arrayName] || [])];
          if(typeof newArray[index] === 'string') {
              newArray[index] = value;
          } else {
              newArray[index] = { ...newArray[index], [field]: value };
          }
          return { ...prev, [arrayName]: newArray };
      });
  };

  const handlePhotoUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
              setCvState(prev => ({ ...prev, photo: reader.result }));
          };
          reader.readAsDataURL(file);
      }
  };

  const addArrayItem = (arrayName, templateItem) => {
      setCvState(prev => ({
          ...prev,
          [arrayName]: [...(prev[arrayName] || []), templateItem]
      }));
  };

  const removeArrayItem = (arrayName, index) => {
       setCvState(prev => {
          const newArray = [...prev[arrayName]];
          newArray.splice(index, 1);
          return { ...prev, [arrayName]: newArray };
      });
  };

  const handleExport = () => {
      let isLimitReached = false;
      if (subscriptionTier === 'Free' && cvCount >= 1) isLimitReached = true;
      if (subscriptionTier === 'Basic' && cvCount >= 5) isLimitReached = true;
      
      if (isLimitReached) {
          setIsPaywallOpen(true);
      } else {
          incrementCvCount();
          window.print();
      }
  };

  return (
    <div className="h-screen flex flex-col md:flex-row overflow-hidden selection:bg-blue-100 selection:text-blue-900 bg-slate-200 font-inter">
      <PaywallModal isOpen={isPaywallOpen} onClose={() => setIsPaywallOpen(false)} currentTier={subscriptionTier} />
      
      {/* Mobile Tab Switcher */}
      <div className="md:hidden flex bg-slate-900 border-b border-white/10 p-2 gap-2 sticky top-0 z-50">
          <button 
            onClick={() => setActiveTab('edit')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'edit' ? 'bg-[#7DF9FF] text-black shadow-lg shadow-[#7DF9FF]/20' : 'text-slate-400 hover:text-white'}`}
          >
              <Edit2 size={16} /> Edit
          </button>
          <button 
            onClick={() => setActiveTab('preview')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'preview' ? 'bg-[#7DF9FF] text-black shadow-lg shadow-[#7DF9FF]/20' : 'text-slate-400 hover:text-white'}`}
          >
              <FileText size={16} /> Preview
          </button>
      </div>
      
      {/* --- LEFT PANE: CONTROLS & FORM --- */}
      <aside className={`${activeTab === 'edit' ? 'flex' : 'hidden'} md:flex w-full md:w-[35%] h-full bg-slate-50 flex-col border-r border-slate-200 overflow-y-auto print:hidden shadow-xl z-20`}>
          
          <div className="p-4 sm:p-6 border-b border-slate-100 bg-slate-900 text-white sticky top-0 z-30 hidden md:block">
              <div className="flex items-center justify-between">
                 <div className="flex items-center gap-3">
                     <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg shadow-inner"><Sparkles size={20} className="text-white" /></div>
                     <h2 className="text-xl font-bold tracking-tight">Smart AI CV Builder</h2>
                 </div>
                 <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium" onClick={handleExport}>
                     <Download size={16} /> Export ({subscriptionTier})
                 </button>
              </div>
          </div>

          <div className="p-4 sm:p-6 space-y-8 sm:space-y-10 flex-1">
             <div className="md:hidden flex items-center justify-between mb-4">
                 <h2 className="text-xl font-bold text-slate-800">CV Editor</h2>
                 <button className="bg-slate-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-xs font-bold shadow-lg" onClick={handleExport}>
                     <Download size={14} /> EXPORT
                 </button>
             </div>
             
             {/* Theme Switcher Widget */}
             <div className="p-5 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 shadow-sm">
                 <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2"><Palette size={16} className="text-slate-500" /> Color Theme</h3>
                 <div className="grid grid-cols-3 gap-3">
                     {Object.values(THEMES).map(t => (
                         <button 
                            key={t.id} 
                            onClick={() => setActiveTheme(t.id)}
                            className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${activeTheme === t.id ? 'border-slate-800 bg-white shadow-md scale-105' : 'border-transparent hover:bg-white/50 hover:border-slate-200'}`}
                         >
                             <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${t.headerBg} mb-2 shadow-inner border border-black/10`}></div>
                             <span className="text-[10px] font-semibold text-slate-600 text-center leading-tight">{t.name}</span>
                         </button>
                     ))}
                 </div>
             </div>

             {/* Personal Info Form */}
             <div className="space-y-4">
                 <h3 className="text-lg font-semibold flex items-center gap-2 text-slate-800 border-b pb-2"><Edit2 size={16} className="text-slate-400"/> Personal Details</h3>
                 <div className="grid grid-cols-1 gap-y-4">
                     <div className="flex items-center gap-4 border p-3 rounded-lg bg-slate-50 border-slate-200 shadow-sm">
                         <div className="w-16 h-16 bg-slate-200 rounded-md overflow-hidden flex items-center justify-center border border-slate-300">
                             {cvState.photo ? <img src={cvState.photo} alt="Preview" className="w-full h-full object-cover" /> : <span className="text-[10px] text-slate-500 font-medium">No Photo</span>}
                         </div>
                         <div className="flex-1">
                             <label className="text-sm font-semibold text-slate-700 block mb-1">Profile Photo</label>
                             <input type="file" accept="image/*" onChange={handlePhotoUpload} className="text-xs text-slate-500 file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all cursor-pointer w-full" />
                         </div>
                     </div>
                     <InputGroup label="Full Name">
                         <input type="text" name="name" value={cvState.name} onChange={handlePersonalChange} className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm" />
                     </InputGroup>
                     <InputGroup label="Job Title / Role">
                         <input type="text" name="role" value={cvState.role || ''} onChange={handlePersonalChange} className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm" />
                     </InputGroup>
                     <div className="grid grid-cols-2 gap-4">
                         <InputGroup label="Email">
                            <input type="email" name="email" value={cvState.contact?.email || ''} onChange={handlePersonalChange} className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm shadow-sm" />
                         </InputGroup>
                         <InputGroup label="Phone">
                            <input type="tel" name="phone" value={cvState.contact?.phone || ''} onChange={handlePersonalChange} className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm shadow-sm" />
                         </InputGroup>
                     </div>
                     <InputGroup label="Location">
                        <input type="text" name="location" value={cvState.contact?.location || ''} onChange={handlePersonalChange} className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm shadow-sm" />
                     </InputGroup>
                     <div className="grid grid-cols-2 gap-4">
                         <InputGroup label="LinkedIn URL">
                            <input type="text" name="linkedin" value={cvState.contact?.linkedin || ''} onChange={handlePersonalChange} className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm shadow-sm" />
                         </InputGroup>
                         <InputGroup label="GitHub URL">
                            <input type="text" name="portfolio" value={cvState.contact?.portfolio || ''} onChange={handlePersonalChange} placeholder="e.g. github.com/username" className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm shadow-sm" />
                         </InputGroup>
                     </div>
                 </div>
             </div>

             {/* Professional Summary Form */}
             <div className="space-y-4">
                 <div className="flex items-center justify-between border-b pb-2">
                    <h3 className="text-lg font-semibold flex items-center gap-2 text-slate-800"><Briefcase size={16} className="text-slate-400"/> Summary</h3>
                    <button className="text-xs bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1.5 rounded-full font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 opacity-50 cursor-not-allowed">
                        <Sparkles size={12} /> AI Enhance
                    </button>
                 </div>
                 <InputGroup label="Write a brief professional summary">
                     <textarea rows={5} name="summary" value={cvState.summary || ''} onChange={handleSummaryChange} className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm resize-y leading-relaxed" />
                 </InputGroup>
             </div>

             {/* Education Form Component */}
             <div className="space-y-4">
                 <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <h3 className="text-lg font-bold flex items-center gap-2 text-slate-800">🎓 Education</h3>
                    <button 
                        onClick={() => addArrayItem('education', { institution: '', degree: '', startDate: '', endDate: '' })}
                        className="text-xs border border-blue-500 text-blue-600 hover:bg-blue-50 px-4 py-1.5 rounded-full font-bold transition-all flex items-center gap-1 shadow-sm"
                    >
                        + Add Degree
                    </button>
                 </div>
                 
                 <div className="space-y-4">
                     {(cvState.education || []).map((edu, idx) => (
                         <div key={idx} className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm relative group hover:border-blue-300 transition-all">
                             <button onClick={() => removeArrayItem('education', idx)} className="absolute top-4 right-4 p-1.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                 <Trash2 size={18} />
                             </button>
                             <div className="space-y-4 pt-2">
                                <InputGroup label="Institution / University">
                                    <input type="text" value={edu.institution} onChange={(e) => handleArrayItemChange('education', idx, 'institution', e.target.value)} className="w-full px-3 py-2 bg-white border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm" />
                                </InputGroup>
                                <InputGroup label="Degree / Certificate">
                                    <input type="text" value={edu.degree} onChange={(e) => handleArrayItemChange('education', idx, 'degree', e.target.value)} className="w-full px-3 py-2 bg-white border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm" />
                                </InputGroup>
                                <div className="grid grid-cols-2 gap-3">
                                    <InputGroup label="Start Date">
                                        <input type="text" placeholder="e.g. Sep 2018" value={edu.startDate} onChange={(e) => handleArrayItemChange('education', idx, 'startDate', e.target.value)} className="w-full px-3 py-2 bg-white border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm" />
                                    </InputGroup>
                                    <InputGroup label="End Date">
                                        <input type="text" placeholder="e.g. May 2022" value={edu.endDate} onChange={(e) => handleArrayItemChange('education', idx, 'endDate', e.target.value)} className="w-full px-3 py-2 bg-white border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm" />
                                    </InputGroup>
                                </div>
                             </div>
                         </div>
                     ))}
                 </div>
             </div>

              {/* Work Experience Form Component */}
              <div className="space-y-4">
                 <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <h3 className="text-lg font-bold flex items-center gap-2 text-slate-800">💼 Work Experience</h3>
                    <button 
                        onClick={() => addArrayItem('experience', { company: '', role: '', startDate: '', endDate: '', responsibilities: '' })}
                        className="text-xs border border-blue-500 text-blue-600 hover:bg-blue-50 px-4 py-1.5 rounded-full font-bold transition-all flex items-center gap-1 shadow-sm"
                    >
                        + Add Job
                    </button>
                 </div>
                 
                 <div className="space-y-4">
                     {(cvState.experience || []).map((exp, idx) => (
                         <div key={idx} className="p-5 bg-white border border-slate-200 rounded-xl relative shadow-sm group hover:border-blue-300 transition-all">
                             <button onClick={() => removeArrayItem('experience', idx)} className="absolute top-4 right-4 p-1.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                 <Trash2 size={18} />
                             </button>
                             <div className="space-y-4 pt-2">
                                <InputGroup label="Company Name">
                                    <input type="text" value={exp.company} onChange={(e) => handleArrayItemChange('experience', idx, 'company', e.target.value)} className="w-full px-3 py-2 bg-white shadow-sm border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm" />
                                </InputGroup>
                                <InputGroup label="Role / Title">
                                    <input type="text" value={exp.role} onChange={(e) => handleArrayItemChange('experience', idx, 'role', e.target.value)} className="w-full px-3 py-2 bg-white shadow-sm border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm" />
                                </InputGroup>
                                <div className="grid grid-cols-2 gap-3">
                                    <InputGroup label="Start Date">
                                        <input type="text" placeholder="e.g. Jan 2021" value={exp.startDate} onChange={(e) => handleArrayItemChange('experience', idx, 'startDate', e.target.value)} className="w-full px-3 py-2 bg-white shadow-sm border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm" />
                                    </InputGroup>
                                    <InputGroup label="End Date">
                                        <input type="text" placeholder="e.g. Present" value={exp.endDate} onChange={(e) => handleArrayItemChange('experience', idx, 'endDate', e.target.value)} className="w-full px-3 py-2 bg-white shadow-sm border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm" />
                                    </InputGroup>
                                </div>
                                <InputGroup label="Responsibilities & Achievements">
                                    <div className="relative">
                                        <textarea rows={5} placeholder="• List your key achievements..." value={exp.responsibilities} onChange={(e) => handleArrayItemChange('experience', idx, 'responsibilities', e.target.value)} className="w-full px-3 py-2 bg-white shadow-sm border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm resize-y leading-relaxed" />
                                        <button className="absolute bottom-2 right-4 text-xs bg-white border border-slate-200 text-blue-600 px-2 py-1 rounded shadow-sm font-medium hover:bg-blue-50 transition-colors flex items-center gap-1 opacity-50 cursor-not-allowed">
                                            <Sparkles size={12} /> AI Rewrite
                                        </button>
                                    </div>
                                </InputGroup>
                             </div>
                         </div>
                     ))}
                 </div>
             </div>

              {/* Additional Details Forms */}
              <div className="space-y-6 pt-4 border-t border-slate-200">
                 <h3 className="text-lg font-semibold flex items-center gap-2 text-slate-800"><List size={16} className="text-slate-400"/> Additional Details</h3>
                 
                 {/* Skills Form */}
                 <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                        <label className="text-sm font-semibold text-slate-700">Skills</label>
                        <button onClick={() => addArrayItem('skills', { category: '' })} className="p-1 hover:bg-slate-200 rounded text-slate-500 transition-colors"><Plus size={16} /></button>
                    </div>
                    <div className="space-y-2">
                        {(cvState.skills || []).map((skill, idx) => (
                            <div key={idx} className="flex gap-2 relative group">
                                <input type="text" placeholder="e.g. React.js, Sales, Leadership..." value={typeof skill === 'string' ? skill : (skill.category || skill.items?.[0] || '')} onChange={(e) => handleArrayItemChange('skills', idx, 'category', e.target.value)} className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
                                <button onClick={() => removeArrayItem('skills', idx)} className="text-slate-400 hover:text-red-500 px-2"><Trash2 size={16} /></button>
                            </div>
                        ))}
                    </div>
                 </div>

                 {/* Certifications Form */}
                 <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                        <label className="text-sm font-semibold text-slate-700">Certifications</label>
                        <button onClick={() => addArrayItem('certifications', { name: '' })} className="p-1 hover:bg-slate-200 rounded text-slate-500 transition-colors"><Plus size={16} /></button>
                    </div>
                    <div className="space-y-2">
                        {(cvState.certifications || []).map((cert, idx) => (
                            <div key={idx} className="flex gap-2 relative group">
                                <input type="text" placeholder="e.g. AWS Certified Developer" value={typeof cert === 'string' ? cert : cert.name} onChange={(e) => handleArrayItemChange('certifications', idx, 'name', e.target.value)} className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
                                <button onClick={() => removeArrayItem('certifications', idx)} className="text-slate-400 hover:text-red-500 px-2"><Trash2 size={16} /></button>
                            </div>
                        ))}
                    </div>
                 </div>

                 {/* Languages Form */}
                 <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                        <label className="text-sm font-semibold text-slate-700">Languages</label>
                        <button onClick={() => addArrayItem('languages', '')} className="p-1 hover:bg-slate-200 rounded text-slate-500 transition-colors"><Plus size={16} /></button>
                    </div>
                    <div className="space-y-2">
                        {(cvState.languages || []).map((lang, idx) => (
                            <div key={idx} className="flex gap-2 relative group">
                                <input type="text" placeholder="e.g. English - Native" value={typeof lang === 'string' ? lang : lang.name} onChange={(e) => handleArrayItemChange('languages', idx, 'name', e.target.value)} className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
                                <button onClick={() => removeArrayItem('languages', idx)} className="text-slate-400 hover:text-red-500 px-2"><Trash2 size={16} /></button>
                            </div>
                        ))}
                    </div>
                 </div>

                 {/* Hobbies Form */}
                 <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                        <label className="text-sm font-semibold text-slate-700">Hobbies</label>
                        <button onClick={() => addArrayItem('hobbies', '')} className="p-1 hover:bg-slate-200 rounded text-slate-500 transition-colors"><Plus size={16} /></button>
                    </div>
                    <div className="space-y-2">
                        {(cvState.hobbies || []).map((hobby, idx) => (
                            <div key={idx} className="flex gap-2 relative group">
                                <input type="text" placeholder="e.g. Photography, Hiking..." value={typeof hobby === 'string' ? hobby : hobby.name} onChange={(e) => handleArrayItemChange('hobbies', idx, 'name', e.target.value)} className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
                                <button onClick={() => removeArrayItem('hobbies', idx)} className="text-slate-400 hover:text-red-500 px-2"><Trash2 size={16} /></button>
                            </div>
                        ))}
                    </div>
                 </div>
              </div>


          </div>
      </aside>

      {/* --- RIGHT PANE: LIVE PREVIEW --- */}
      <main className={`${activeTab === 'preview' ? 'flex' : 'hidden'} md:flex flex-1 h-full bg-slate-200 overflow-y-auto p-4 sm:p-8 justify-center items-start print:block print:p-0 print:bg-white`}>
        {/* The A4 Document Container */}
        <div className="w-full max-w-[800px] bg-white shadow-2xl origin-top transition-all duration-300 print:shadow-none print:max-w-none print:w-[210mm] print:min-h-[297mm] overflow-x-auto">
            <div className="min-w-[600px] md:min-w-0">
                <ClassicDocument data={cvState} theme={theme} />
            </div>
        </div>
      </main>

      {/* Floating Export Button for Mobile (Preview Tab Only) */}
      {activeTab === 'preview' && (
          <button 
            onClick={handleExport}
            className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-2xl z-[60] animate-bounce"
          >
              <Download size={24} />
          </button>
      )}
    </div>
  );
}

export default CVBuilder;
