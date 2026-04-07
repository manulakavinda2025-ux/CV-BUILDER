import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    // Provide a dummy local user so components that depend on 'user' still work perfectly
    const [user] = useState({
        uid: 'local-user',
        name: 'Guest User',
        email: 'Local Session',
        photo: null
    });
    const loading = false;
    
    // Always Pro tier
    const subscriptionTier = 'Pro';
    
    // No limits so cvCount is just for stats if needed
    const [cvCount, setCvCount] = useState(() => {
        const saved = localStorage.getItem('cv_export_count');
        return saved ? parseInt(saved, 10) : 0;
    });

    const login = async () => {};
    const logout = async () => {};
    const upgradeSubscription = () => {};

    const incrementCvCount = () => {
        const newCount = cvCount + 1;
        setCvCount(newCount);
        localStorage.setItem('cv_export_count', newCount.toString());
    };

    const value = {
        user,
        loading,
        login,
        logout,
        subscriptionTier,
        upgradeSubscription,
        cvCount,
        incrementCvCount,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
