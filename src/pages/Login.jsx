import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Navigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const Login = () => {
    const { login, user, loading } = useAuth();
    const navigate = useNavigate();

    // If already logged in, redirect to dashboard
    if (user) {
        return <Navigate to="/dashboard" />;
    }

    if (loading) {
        return <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">Loading...</div>;
    }

    const handleGoogleLogin = async () => {
        try {
            await login();
            navigate('/dashboard');
        } catch (error) {
            console.error('Login Error:', error);
        }
    };

    return (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-slate-900 p-4">
            <div className="max-w-md w-full bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-white/5">
                <div className="p-10 pb-8 bg-slate-900/50 text-white text-center backdrop-blur-md">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-gradient-to-br from-[#7DF9FF] to-blue-500 rounded-2xl shadow-lg ring-4 ring-[#7DF9FF]/10">
                            <Sparkles size={36} className="text-black" />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold mb-3 tracking-tight">Welcome Back</h2>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-[250px] mx-auto">Sign in to manage your CVs and access premium AI features.</p>
                </div>
                <div className="p-10 space-y-8 bg-slate-800/50">
                    <div className="flex flex-col items-center gap-4">
                        <button 
                            onClick={handleGoogleLogin}
                            className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-white hover:bg-slate-100 text-black rounded-2xl text-base font-bold transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
                            Sign in with Google
                        </button>
                        
                        <div className="relative w-full text-center py-2">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/5"></div>
                            </div>
                            <div className="relative flex justify-center text-xs">
                                <span className="px-4 bg-slate-800 text-slate-500 font-semibold uppercase tracking-widest">Secure Access</span>
                            </div>
                        </div>

                        <p className="text-xs text-slate-500 text-center px-4">
                            By signing in, you agree to our Terms of Service and Privacy Policy.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;