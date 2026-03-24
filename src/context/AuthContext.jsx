import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, loginWithGoogle, logoutUser } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const [subscriptionTier, setSubscriptionTier] = useState(() => {
        return localStorage.getItem('cv_subscription') || 'Free'; 
    });

    const [cvCount, setCvCount] = useState(() => {
        const saved = localStorage.getItem('cv_export_count');
        return saved ? parseInt(saved, 10) : 0;
    });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser({
                    uid: currentUser.uid,
                    name: currentUser.displayName,
                    email: currentUser.email,
                    photo: currentUser.photoURL
                });
            } else {
                setUser(null);
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        localStorage.setItem('cv_subscription', subscriptionTier);
    }, [subscriptionTier]);

    useEffect(() => {
        localStorage.setItem('cv_export_count', cvCount.toString());
    }, [cvCount]);

    const login = async () => {
        try {
            await loginWithGoogle();
        } catch (error) {
            console.error("Login Error:", error);
        }
    };

    const logout = async () => {
        try {
            await logoutUser();
        } catch (error) {
            console.error("Logout Error:", error);
        }
    };

    const upgradeSubscription = (tier) => {
        setSubscriptionTier(tier);
    };

    const incrementCvCount = () => {
        setCvCount((prev) => prev + 1);
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
