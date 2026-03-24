import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Check, Info } from 'lucide-react';

const Pricing = () => {
    const { user, subscriptionTier, upgradeSubscription } = useAuth();
    const [loading, setLoading] = useState(null);

    const handleUpgrade = (tier) => {
        setLoading(tier);
        // Simulate network request
        setTimeout(() => {
            upgradeSubscription(tier);
            setLoading(null);
            alert(`Successfully upgraded to ${tier} plan!`);
        }, 1000);
    };

    const plans = [
        {
            name: 'Free',
            price: '$0',
            duration: 'forever',
            features: [
                'Create 1 complete CV',
                'Basic AI suggestions',
                'Standard templates',
                'PDF Export'
            ],
            tier: 'Free'
        },
        {
            name: 'Basic',
            price: '$3.50',
            duration: 'one-time',
            isPopular: true,
            features: [
                'Create up to 5 CVs',
                'Advanced AI Rewriting',
                'All Standard Themes',
                'High-Resolution PDF',
                'No Watermarks'
            ],
            tier: 'Basic'
        },
        {
            name: 'Pro',
            price: '$49',
            duration: 'per month',
            features: [
                'Unlimited CV Creation',
                'Full AI Suite Access',
                'Premium Themes',
                'Cover Letter Builder',
                'Priority Support'
            ],
            tier: 'Pro'
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl font-extrabold text-[#7DF9FF] sm:text-5xl tracking-tight mb-4">
                    Simple, transparent pricing
                </h1>
                <p className="text-xl text-blue-100">
                    Start for free, upgrade when you need more power. Build the perfect resume for your next career move.
                </p>
                {!user && (
                    <div className="mt-6 flex items-center justify-center gap-2 text-amber-200 bg-amber-900/40 px-4 py-2 rounded-lg inline-flex w-auto border border-amber-700/50">
                        <Info size={16} /> <span className="text-sm font-medium">Log in to upgrade your plan</span>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch px-4 sm:px-0">
                {plans.map((plan) => (
                    <div 
                        key={plan.name}
                        className={`relative p-6 sm:p-8 bg-white rounded-3xl border flex flex-col ${plan.isPopular ? 'border-blue-500 shadow-2xl lg:scale-105 z-10' : 'border-slate-200 shadow-sm'}`}
                    >
                        {plan.isPopular && (
                            <div className="absolute top-0 inset-x-0 flex justify-center -translate-y-1/2">
                                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                    Most Popular
                                </span>
                            </div>
                        )}
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                            <span className="text-slate-500 font-medium">/{plan.duration}</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex gap-3 text-slate-600">
                                    <Check size={20} className="text-emerald-500 shrink-0" />
                                    <span className="text-sm">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        
                        <button
                            disabled={!user || subscriptionTier === plan.tier || (subscriptionTier === 'Pro' && plan.tier !== 'Pro') || loading === plan.tier}
                            onClick={() => handleUpgrade(plan.tier)}
                            className={`w-full py-3.5 rounded-xl font-bold transition-all flex justify-center items-center gap-2 ${
                                subscriptionTier === plan.tier
                                    ? 'bg-emerald-100 text-emerald-700 cursor-not-allowed border border-emerald-200'
                                    : plan.isPopular
                                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 active:scale-95'
                                        : 'bg-slate-900 hover:bg-slate-800 text-white shadow-md active:scale-95'
                            } disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                            {loading === plan.tier ? 'Processing...' : subscriptionTier === plan.tier ? 'Current Plan' : `Get ${plan.name}`}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
