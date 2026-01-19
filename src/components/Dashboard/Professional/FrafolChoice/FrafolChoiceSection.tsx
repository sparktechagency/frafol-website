import React from 'react';
import { AllImages } from '../../../../../public/assets/AllImages';
import PricingCard, { IPricingPlan } from './PricingCard';
import { ISubscriptionData } from '@/app/(withDashboardLayout)/dashboard/professional/frafol-choice/page';



const FrafolChoiceSection = ({ subscriptionData }: { subscriptionData: ISubscriptionData }) => {
    const features = [
        { text: "Profile visibility on the Frafol homepage", included: true },
        { text: "Higher placement in client search results", included: true },
        { text: "Recommended by Frafol badge", included: true },
        { text: "Priority visibility compared to standard profiles", included: true },

    ]
    const pricingPlans: IPricingPlan[] = [
        {
            id: 1 * 30,
            name: "Frafol Choice",
            price: 15,
            period: 1,
            icon: AllImages?.batch,
            features,
            description: "Short-term profile highlighting."
        },
        {
            id: 3 * 30,
            name: "Frafol Choice",
            price: 45,
            period: 3,
            icon: AllImages?.batch,
            features,
            description: "More stable profile visibility over a longer period."
        },
        {
            id: 6 * 30,
            name: "Frafol Choice",
            price: 90,
            period: 6,
            icon: AllImages?.batch,
            features,
            popular: true,
            badge: "Best Value",
            description: "Long-term visibility with the best monthly price."
        },
        {
            id: 365,
            name: "Frafol Choice",
            price: 180,
            period: 12,
            icon: AllImages?.batch,
            features,
            description: "Full-year profile highlighting without interruptions."
        },
    ];

    console.log(pricingPlans)
    return (
        <div>
            <div className="mt-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-color">
                    Frafol Choice
                </h2>
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-3">
                    Profile Highlighting for Higher Visibility
                </h4>
                <p className="text-sm sm:text-base lg:text-lg mt-4 text-base-color/80">
                    Frafol Boost is a paid profile highlighting feature that makes your profile more visible to clients on the Frafol platform.
                </p>
            </div>
            <div className="flex flex-wrap gap-8 mt-16 items-baseline">
                {pricingPlans.map((plan) => (
                    <PricingCard key={plan?.id} plan={plan} subscriptionData={subscriptionData} />
                ))}
            </div>
        </div>
    );
};

export default FrafolChoiceSection;