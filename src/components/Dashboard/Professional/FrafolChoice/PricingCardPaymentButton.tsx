"use client";
import ReuseButton from '@/components/ui/Button/ReuseButton';
import { completePayment } from '@/services/PaymentService/PaymentServiceApi';
import tryCatchWrapper from '@/utils/tryCatchWrapper';
import React from 'react';
import { IPricingPlan } from './PricingCard';
import { ISubscription } from '@/app/(withDashboardLayout)/dashboard/professional/frafol-choice/page';

const PricingCardPaymentButton = ({ plan, pack }: { plan: IPricingPlan, pack: ISubscription }) => {
    const handlePayment = async (data: { period: number, price: number }) => {
        const value = {
            paymentType: "subscription",
            "amount": data.price,
            "days": data.period === 12 ? 365 : data.period * 30
        };

        const res = await tryCatchWrapper(
            completePayment,
            { body: value },
            {
                toastLoadingMessage: "Please wait...",
                toastSuccessMessage: "Redirecting to Stripe to Complete Payment From Stripe",
                toastErrorMessage: "Something went wrong! Please try again.",
            }
        );

        if (res?.success) {
            window.location.replace(res?.data?.checkoutUrl); // Opens in a new tab
        }
    };
    return (
        <div>
            <ReuseButton variant="secondary" className="cursor-pointer" onClick={() => handlePayment({ period: plan.period, price: pack.price })}> €{pack.price}</ReuseButton>
        </div>
    );
};

export default PricingCardPaymentButton;