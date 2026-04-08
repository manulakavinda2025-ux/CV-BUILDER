import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';

export const ModernMinimalDocument = ({ data, theme }) => (
    <div className="flex flex-col min-h-full w-full bg-[#f9f9f9] text-slate-800 print:w-[210mm] print:h-[297mm] print:min-h-[297mm] print:overflow-hidden print:shadow-none print:m-0 print:p-0">
        <header className={`${theme.accentBg} p-10 flex items-center justify-center gap-10`}>
             {data.photo && (
                 <div className="w-36 h-36 rounded-full overflow-hidden shadow-lg shrink-0 border-4 border-white">
                      <img src={data.photo} alt="Profile" className="w-full h-full object-cover" />
                 </div>
             )}
             <div className="flex-1">
                 <h1 className="text-4xl font-bold text-slate-900 mb-2">{data.name || 'Your Name'}</h1>
                 <h2 className="text-2xl text-slate-600 mb-4">{data.role || 'Professional Title'}</h2>
                 <div className="flex flex-wrap gap-4 text-sm text-slate-700">
                     {data.contact?.email && <div className="flex items-center gap-1.5"><Mail size={16}/> {data.contact.email}</div>}
                     {data.contact?.phone && <div className="flex items-center gap-1.5"><Phone size={16}/> {data.contact.phone}</div>}
                     {data.contact?.location && <div className="flex items-center gap-1.5"><MapPin size={16}/> {data.contact.location}</div>}
                     {data.contact?.linkedin && <div className="flex items-center gap-1.5"><Linkedin size={16}/> {data.contact.linkedin.replace(/^https?:\/\/(www\.)?/, '')}</div>}
                 </div>
             </div>
        </header>

        <div className="p-12 print:p-10 space-y-8 bg-white flex-1">
            {data.summary && (
                <div>
                    <h3 className={`text-center font-bold uppercase tracking-widest py-1.5 mb-6 text-sm ${theme.accentLight}`}>Profile</h3>
                    <p className="text-[14px] text-slate-700 leading-relaxed text-justify">{data.summary}</p>
                </div>
            )}

            {data.experience && data.experience.length > 0 && (
                <div>
                   <h3 className={`text-center font-bold uppercase tracking-widest py-1.5 mb-6 text-sm ${theme.accentLight}`}>Work Experience</h3>
                   <div className="space-y-6">
                       {data.experience.map((exp, i) => (
                           <div key={i} className="flex flex-col sm:flex-row gap-4">
                               <div className="sm:w-1/4 text-sm text-slate-600 font-medium">
                                   {exp.startDate} – {exp.endDate}
                               </div>
                               <div className="sm:w-3/4">
                                   <div className="font-bold text-slate-900 text-lg mb-0.5">{exp.company}</div>
                                   <div className="text-slate-600 mb-2 text-sm">{exp.role}</div>
                                   <ul className="space-y-1">
                                        {Array.isArray(exp.responsibilities) ? exp.responsibilities.map((resp, j) => (
                                            <li key={j} className="text-[14px] text-slate-700 flex gap-2">
                                                <span className="mt-1.5 text-[8px] text-slate-400">●</span> <span>{resp}</span>
                                            </li>
                                        )) : (
                                            <li className="text-[14px] text-slate-700 flex gap-2">
                                                <span className="mt-1.5 text-[8px] text-slate-400">●</span> <span className="whitespace-pre-wrap">{exp.responsibilities}</span>
                                            </li>
                                        )}
                                   </ul>
                               </div>
                           </div>
                       ))}
                   </div>
                </div>
            )}

            {data.education && data.education.length > 0 && (
                <div>
                   <h3 className={`text-center font-bold uppercase tracking-widest py-1.5 mb-6 text-sm ${theme.accentLight}`}>Education</h3>
                   <div className="space-y-6">
                       {data.education.map((edu, i) => (
                           <div key={i} className="flex flex-col sm:flex-row gap-4">
                               <div className="sm:w-1/4 text-sm text-slate-600 font-medium">
                                   {edu.startDate} – {edu.endDate || 'Present'}
                               </div>
                               <div className="sm:w-3/4">
                                   <div className="font-bold text-slate-900 text-[15px] mb-0.5">{edu.degree}</div>
                                   <div className="text-slate-600 text-[14px]">{edu.institution}</div>
                               </div>
                           </div>
                       ))}
                   </div>
                </div>
            )}
            
            {(data.skills && data.skills.length > 0) && (
                <div>
                   <h3 className={`text-center font-bold uppercase tracking-widest py-1.5 mb-6 text-sm ${theme.accentLight}`}>Skills</h3>
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                       {data.skills.map((skill, i) => (
                          <div key={i} className="text-[14px] text-slate-700 flex gap-2">
                              <span className="mt-1.5 text-[8px] text-slate-400">●</span>
                              <span>{typeof skill === 'string' ? skill : (skill.items?.[0] || skill.category)}</span>
                          </div>
                       ))}
                   </div>
                </div>
            )}
            
            {(data.languages && data.languages.length > 0) && (
                <div>
                   <h3 className={`text-center font-bold uppercase tracking-widest py-1.5 mb-6 text-sm ${theme.accentLight}`}>Languages</h3>
                   <div className="flex flex-wrap gap-8">
                       {data.languages.map((lang, i) => (
                          <div key={i} className="text-[14px] text-slate-700 flex items-center gap-2">
                              <span className="font-medium">{typeof lang === 'string' ? lang : lang.name}</span>
                          </div>
                       ))}
                   </div>
                </div>
            )}
        </div>
    </div>
);

export const CorporateDocument = ({ data, theme }) => (
    <div className="flex flex-col min-h-full w-full bg-white text-slate-800 print:w-[210mm] print:h-[297mm] print:min-h-[297mm] print:overflow-hidden print:shadow-none print:m-0 print:p-0 font-sans">
        <header className={`p-10 border-b-8 ${theme?.borderDark || 'border-[#1e3a8a]'} flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between gap-6`}>
             <div className="flex-1 text-center sm:text-left">
                 <h1 className={`text-4xl font-bold mb-1 ${theme.primaryText}`}>{data.name || 'Your Name'}</h1>
                 <h2 className="text-xl text-slate-500 italic mb-4">{data.role || 'Project Engineer'}</h2>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px] text-slate-600">
                     {data.contact?.email && <div className="flex items-center gap-2 border border-slate-200 p-1.5 rounded"><Mail size={14}/> {data.contact.email}</div>}
                     {data.contact?.phone && <div className="flex items-center gap-2 border border-slate-200 p-1.5 rounded"><Phone size={14}/> {data.contact.phone}</div>}
                     {data.contact?.linkedin && <div className="flex items-center gap-2 border border-slate-200 p-1.5 rounded"><Linkedin size={14}/> {data.contact.linkedin.replace(/^https?:\/\/(www\.)?/, '')}</div>}
                     {data.contact?.location && <div className="flex items-center gap-2 border border-slate-200 p-1.5 rounded"><MapPin size={14}/> {data.contact.location}</div>}
                 </div>
             </div>
             {data.photo && (
                 <div className="w-32 h-32 rounded-full overflow-hidden shadow-md shrink-0">
                      <img src={data.photo} alt="Profile" className="w-full h-full object-cover" />
                 </div>
             )}
        </header>

        <div className="p-10 space-y-6">
            {data.summary && (
                <div>
                    <h3 className={`font-bold uppercase tracking-wide text-center py-1 mb-3 text-[14px] ${theme.accentLight}`}>Summary</h3>
                    <p className="text-[13px] text-slate-700 leading-relaxed">{data.summary}</p>
                </div>
            )}

            {data.experience && data.experience.length > 0 && (
                <div>
                   <h3 className={`font-bold uppercase tracking-wide text-center py-1 mb-4 text-[14px] ${theme.accentLight}`}>Professional Experience</h3>
                   <div className="space-y-4">
                       {data.experience.map((exp, i) => (
                           <div key={i} className="flex flex-col sm:flex-row gap-4">
                               <div className={`sm:w-1/4 text-[13px] font-medium pt-0.5 ${theme?.primaryText || 'text-[#1e3a8a]'}`}>
                                   {exp.startDate} – {exp.endDate}
                               </div>
                               <div className="sm:w-3/4">
                                   <div className="font-bold text-slate-800 text-[14px]">{exp.company}, <span className="font-normal italic text-slate-600">{exp.role}</span></div>
                                   <ul className="space-y-1 mt-1.5">
                                        {Array.isArray(exp.responsibilities) ? exp.responsibilities.map((resp, j) => (
                                            <li key={j} className="text-[13px] text-slate-700 flex gap-2">
                                                <span className="mt-1.5 text-[6px] text-slate-500">●</span> <span>{resp}</span>
                                            </li>
                                        )) : (
                                            <li className="text-[13px] text-slate-700 flex gap-2">
                                                <span className="mt-1.5 text-[6px] text-slate-500">●</span> <span className="whitespace-pre-wrap">{exp.responsibilities}</span>
                                            </li>
                                        )}
                                   </ul>
                               </div>
                           </div>
                       ))}
                   </div>
                </div>
            )}

            {data.education && data.education.length > 0 && (
                <div>
                   <h3 className={`font-bold uppercase tracking-wide text-center py-1 mb-4 text-[14px] ${theme.accentLight}`}>Education</h3>
                   <div className="space-y-3">
                       {data.education.map((edu, i) => (
                           <div key={i} className="flex flex-col sm:flex-row gap-4">
                               <div className={`sm:w-1/4 text-[13px] font-medium ${theme?.primaryText || 'text-[#1e3a8a]'}`}>
                                   {edu.startDate} – {edu.endDate || 'Present'}
                               </div>
                               <div className="sm:w-3/4">
                                   <div className="font-bold text-slate-800 text-[14px]">{edu.degree}, <span className="font-normal italic text-slate-600">{edu.institution}</span></div>
                               </div>
                           </div>
                       ))}
                   </div>
                </div>
            )}
            
            {data.skills && data.skills.length > 0 && (
                <div>
                   <h3 className={`font-bold uppercase tracking-wide text-center py-1 mb-4 text-[14px] ${theme.accentLight}`}>Skills</h3>
                   <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4">
                       {data.skills.map((skill, i) => (
                          <div key={i} className="text-[13px] text-slate-700 flex gap-2">
                              <span className="mt-1.5 text-[6px] text-slate-500">●</span> 
                              <span>{typeof skill === 'string' ? skill : (skill.items?.[0] || skill.category)}</span>
                          </div>
                       ))}
                   </div>
                </div>
            )}

            {data.certifications && data.certifications.length > 0 && (
                <div>
                   <h3 className={`font-bold uppercase tracking-wide text-center py-1 mb-4 text-[14px] ${theme.accentLight}`}>Certificates</h3>
                   <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4">
                       {data.certifications.map((cert, i) => (
                          <div key={i} className="text-[13px] text-slate-700 flex gap-2">
                              <span className="mt-1.5 text-[6px] text-slate-500">●</span> 
                              <span>{typeof cert === 'string' ? cert : cert.name}</span>
                          </div>
                       ))}
                   </div>
                </div>
            )}
        </div>
    </div>
);

export const DarkHeaderDocument = ({ data, theme }) => (
    <div className="flex flex-col min-h-full w-full bg-white text-slate-800 print:w-[210mm] print:h-[297mm] print:min-h-[297mm] print:overflow-hidden print:shadow-none print:m-0 print:p-0">
        <header className={`${theme?.accentBg || 'bg-black'} text-white p-10 flex flex-col gap-4`}>
            <div>
                 <h1 className="text-3xl font-bold mb-1 tracking-wide">{data.name || 'Your Name'}</h1>
                 <h2 className="text-lg text-slate-300">{data.role || 'Software Engineer'}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-[13px] text-slate-300 mt-2">
                 {data.contact?.email && <div className="flex items-center gap-2"><Mail size={14}/> {data.contact.email}</div>}
                 {data.contact?.phone && <div className="flex items-center gap-2"><Phone size={14}/> {data.contact.phone}</div>}
                 {data.contact?.location && <div className="flex items-center gap-2"><MapPin size={14}/> {data.contact.location}</div>}
                 {data.contact?.linkedin && <div className="flex items-center gap-2"><Linkedin size={14}/> {data.contact.linkedin.replace(/^https?:\/\/(www\.)?/, '')}</div>}
            </div>
        </header>

        <div className="p-10 space-y-6">
            {data.summary && (
                <div>
                    <h3 className="font-bold text-[18px] flex items-center gap-2 mb-2 border-b border-slate-100 pb-2">
                        <span className="bg-slate-100 p-1 rounded"><Globe size={18} className={theme?.primaryText || "text-black"}/></span> Summary
                    </h3>
                    <p className="text-[13px] text-slate-800 leading-relaxed">{data.summary}</p>
                </div>
            )}

            {data.experience && data.experience.length > 0 && (
                <div>
                   <h3 className="font-bold text-[18px] flex items-center gap-2 mb-4 border-b border-slate-100 pb-2 mt-4">
                       <span className="bg-slate-100 p-1 rounded"><Globe size={18} className={theme?.primaryText || "text-black"}/></span> Professional Experience
                   </h3>
                   <div className="space-y-5">
                       {data.experience.map((exp, i) => (
                           <div key={i}>
                               <div className="flex justify-between items-baseline mb-1">
                                   <div className={`font-bold text-[14px] ${theme?.primaryText || 'text-black'}`}>{exp.role}, <span className="font-normal text-slate-700">{exp.company}</span></div>
                                   <div className="text-[12px] text-slate-500">{exp.startDate} – {exp.endDate}</div>
                               </div>
                               <ul className="space-y-1">
                                    {Array.isArray(exp.responsibilities) ? exp.responsibilities.map((resp, j) => (
                                        <li key={j} className="text-[13px] text-slate-800 flex gap-2">
                                            <span className="mt-1.5 text-[6px] text-slate-500">●</span> <span>{resp}</span>
                                        </li>
                                    )) : (
                                        <li className="text-[13px] text-slate-800 flex gap-2">
                                            <span className="mt-1.5 text-[6px] text-slate-500">●</span> <span className="whitespace-pre-wrap">{exp.responsibilities}</span>
                                        </li>
                                    )}
                               </ul>
                           </div>
                       ))}
                   </div>
                </div>
            )}

            {data.education && data.education.length > 0 && (
                <div>
                   <h3 className="font-bold text-[18px] flex items-center gap-2 mb-4 border-b border-slate-100 pb-2 mt-4">
                       <span className="bg-slate-100 p-1 rounded"><Globe size={18} className={theme?.primaryText || "text-black"}/></span> Education
                   </h3>
                   <div className="space-y-3">
                       {data.education.map((edu, i) => (
                           <div key={i} className="flex justify-between items-baseline mb-1">
                               <div className={`font-bold text-[14px] ${theme?.primaryText || 'text-black'}`}>{edu.degree}, <span className="font-normal text-slate-700">{edu.institution}</span></div>
                               <div className="text-[12px] text-slate-500">{edu.startDate} – {edu.endDate || 'Present'}</div>
                           </div>
                       ))}
                   </div>
                </div>
            )}

            {data.skills && data.skills.length > 0 && (
                <div>
                   <h3 className="font-bold text-[18px] flex items-center gap-2 mb-4 border-b border-slate-100 pb-2 mt-4">
                       <span className="bg-slate-100 p-1 rounded"><Globe size={18} className={theme?.primaryText || "text-black"}/></span> Skills
                   </h3>
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4">
                       {data.skills.map((skill, i) => (
                          <div key={i} className="text-[13px] text-slate-800 flex gap-2">
                              <span className="mt-1.5 text-[6px] text-slate-500">●</span> 
                              <span>{typeof skill === 'string' ? skill : (skill.items?.[0] || skill.category)}</span>
                          </div>
                       ))}
                   </div>
                </div>
            )}
        </div>
    </div>
);

export const ElegantDocument = ({ data, theme }) => (
    <div className="flex flex-col min-h-full w-full bg-white text-slate-800 print:w-[210mm] print:h-[297mm] print:min-h-[297mm] print:overflow-hidden print:shadow-none print:m-0 print:p-0 font-serif">
        <header className="p-8 border-b border-slate-200 flex flex-col md:flex-row items-center gap-6">
             {data.photo && (
                 <div className="w-28 h-28 rounded-full overflow-hidden shrink-0 border-2 border-slate-200">
                      <img src={data.photo} alt="Profile" className="w-full h-full object-cover" />
                 </div>
             )}
             <div className="flex-1 text-center md:text-left">
                 <h1 className="text-3xl font-bold mb-1 tracking-tight text-slate-900">{data.name || 'Your Name'} <span className="font-normal italic text-slate-500 text-xl">{data.role || 'Title'}</span></h1>
                 
                 <div className="flex flex-wrap justify-center md:justify-start gap-4 text-[12px] text-slate-600 mt-2 font-sans">
                     {data.contact?.email && <div className={`flex items-center gap-1 ${theme?.primaryText || 'text-[#b45309]'}`}><Mail size={12}/> <span className="text-slate-600">{data.contact.email}</span></div>}
                     {data.contact?.phone && <div className={`flex items-center gap-1 ${theme?.primaryText || 'text-[#b45309]'}`}><Phone size={12}/> <span className="text-slate-600">{data.contact.phone}</span></div>}
                     {data.contact?.linkedin && <div className={`flex items-center gap-1 ${theme?.primaryText || 'text-[#b45309]'}`}><Linkedin size={12}/> <span className="text-slate-600">{data.contact.linkedin.replace(/^https?:\/\/(www\.)?/, '')}</span></div>}
                     {data.contact?.location && <div className={`flex items-center gap-1 ${theme?.primaryText || 'text-[#b45309]'}`}><MapPin size={12}/> <span className="text-slate-600">{data.contact.location}</span></div>}
                 </div>
             </div>
        </header>

        <div className="flex flex-col md:flex-row flex-1">
             <aside className="w-full md:w-[35%] p-8 bg-slate-50/50 border-r border-slate-100 flex flex-col gap-6">
                 {data.summary && (
                     <div>
                         <h3 className={`font-bold text-[14px] uppercase tracking-wider flex items-center gap-2 mb-3 border-b-2 ${theme?.borderDark || 'border-[#b45309]'} pb-1 w-max`}>
                             <Globe size={16} /> Profilo
                         </h3>
                         <p className="text-[12px] text-slate-700 leading-relaxed">{data.summary}</p>
                     </div>
                 )}

                 {data.skills && data.skills.length > 0 && (
                     <div>
                         <h3 className={`font-bold text-[14px] uppercase tracking-wider flex items-center gap-2 mb-3 border-b-2 ${theme?.borderDark || 'border-[#b45309]'} pb-1 w-max mt-2`}>
                             <Globe size={16} /> Skills
                         </h3>
                         <ul className="space-y-1.5 text-[12px] text-slate-700">
                             {data.skills.map((skill, i) => (
                                <li key={i}>{typeof skill === 'string' ? skill : (skill.items?.[0] || skill.category)}</li>
                             ))}
                         </ul>
                     </div>
                 )}

                 {data.languages && data.languages.length > 0 && (
                     <div>
                         <h3 className={`font-bold text-[14px] uppercase tracking-wider flex items-center gap-2 mb-3 border-b-2 ${theme?.borderDark || 'border-[#b45309]'} pb-1 w-max mt-2`}>
                             <Globe size={16} /> Languages
                         </h3>
                         <ul className="space-y-1.5 text-[12px] text-slate-700">
                             {data.languages.map((lang, i) => (
                                 <li key={i}><span className="font-bold">{typeof lang === 'string' ? lang : lang.name}</span></li>
                             ))}
                         </ul>
                     </div>
                 )}

                 {data.certifications && data.certifications.length > 0 && (
                     <div>
                         <h3 className={`font-bold text-[14px] uppercase tracking-wider flex items-center gap-2 mb-3 border-b-2 ${theme?.borderDark || 'border-[#b45309]'} pb-1 w-max mt-2`}>
                             <Globe size={16} /> Certificates
                         </h3>
                         <ul className="space-y-1.5 text-[12px] text-slate-700">
                             {data.certifications.map((cert, i) => (
                                 <li key={i}>{typeof cert === 'string' ? cert : cert.name}</li>
                             ))}
                         </ul>
                     </div>
                 )}
             </aside>

             <main className="w-full md:w-[65%] p-8 flex flex-col gap-6">
                 {data.experience && data.experience.length > 0 && (
                     <div>
                         <h3 className={`font-bold text-[14px] uppercase tracking-wider flex items-center gap-2 mb-4 border-b-2 ${theme?.borderDark || 'border-[#b45309]'} pb-1 w-max`}>
                             <Globe size={16} /> Professional Experience
                         </h3>
                         <div className="space-y-5">
                             {data.experience.map((exp, i) => (
                                 <div key={i}>
                                     <div className="font-bold text-[14px] text-slate-900">{exp.role}, <span className="font-normal italic text-slate-600">{exp.company}</span></div>
                                     <div className={`text-[12px] ${theme?.primaryText || 'text-[#b45309]'} mb-1 font-sans`}>{exp.startDate} – {exp.endDate}</div>
                                     <ul className="space-y-1">
                                          {Array.isArray(exp.responsibilities) ? exp.responsibilities.map((resp, j) => (
                                              <li key={j} className="text-[13px] text-slate-700 flex gap-2 font-sans">
                                                  <span className="mt-1.5 text-[6px] text-slate-500">●</span> <span>{resp}</span>
                                              </li>
                                          )) : (
                                              <li className="text-[13px] text-slate-700 flex gap-2 font-sans">
                                                  <span className="mt-1.5 text-[6px] text-slate-500">●</span> <span className="whitespace-pre-wrap">{exp.responsibilities}</span>
                                              </li>
                                          )}
                                     </ul>
                                 </div>
                             ))}
                         </div>
                     </div>
                 )}

                 {data.education && data.education.length > 0 && (
                     <div>
                         <h3 className={`font-bold text-[14px] uppercase tracking-wider flex items-center gap-2 mb-4 border-b-2 ${theme?.borderDark || 'border-[#b45309]'} pb-1 w-max`}>
                             <Globe size={16} /> Education
                         </h3>
                         <div className="space-y-3">
                             {data.education.map((edu, i) => (
                                 <div key={i}>
                                     <div className="font-bold text-[14px] text-slate-900">{edu.institution}</div>
                                     <div className="font-normal italic text-[13px] text-slate-600">{edu.degree}</div>
                                     <div className={`text-[12px] ${theme?.primaryText || 'text-[#b45309]'} font-sans`}>{edu.startDate} – {edu.endDate || 'Present'}</div>
                                 </div>
                             ))}
                         </div>
                     </div>
                 )}
             </main>
        </div>
    </div>
);
