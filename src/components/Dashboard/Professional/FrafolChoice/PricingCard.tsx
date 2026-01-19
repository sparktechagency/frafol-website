// components/PricingCard.tsx
import { cn } from "@/lib/utils";
import { FaRegCircleCheck } from "react-icons/fa6";
import { StaticImageData } from "next/image";
import PricingCardPaymentButton from "./PricingCardPaymentButton";
import { ISubscriptionData } from "@/app/(withDashboardLayout)/dashboard/professional/frafol-choice/page";
import ReuseButton from "@/components/ui/Button/ReuseButton";
import { formatDate } from "@/utils/dateFormet";

export interface IPricingPlan {
    id: number;
    name: string;
    price: number;
    features: {
        text: string;
        included: boolean;
    }[];
    period: number;
    popular?: boolean;
    badge?: string;
    icon: StaticImageData | string;
    description: string
}

interface PricingCardProps {
    plan: IPricingPlan;
    subscriptionData: ISubscriptionData
}
export default function PricingCard({
    plan, subscriptionData
}: PricingCardProps) {
    const {
        price,
        features,
        period,
        badge,
    } = plan;

    const isSubscribed = subscriptionData?.hasActiveSubscription && subscriptionData?.subscriptionDays === plan?.id;
    return (
        <div
            className={cn(
                "max-w-[400px]  relative flex flex-col rounded-2xl border border-[#0000001A]  bg-white transition-all duration-300 p-5 shadow hover:shadow-lg hover:-translate-y-1 hover:scale-101 hover:border-[#0000001A]",
            )}
        >

            {/* Icon + Plan Name */}
            <div className="">
                <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl text-base-color font-bold">
                        {period} month
                    </h3>
                    {badge && (
                        <ReuseButton variant="secondary" className="cursor-pointer bg-warning! border-warning! py-2! !w-fit px-4! text-base! text-secondary-color! font-bold! rounded-full! shadow" disabled>{badge}</ReuseButton>
                    )}
                </div>
                <div className="mt-2 h-1 w-full border-b border-dashed border-[#D4DBEA]"></div>


                <div className="mt-2 flex items-baseline">
                    <p className="text-3xl sm:text-4xl lg:text-5xl text-[#2C2C2C] font-black ">
                        €{price}
                    </p>
                </div>

            </div>
            {/* Subscription Status */}
            {isSubscribed && (
                <div className="mt-4 px-4 py-2.5 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-center text-sm">
                        <span className="font-semibold text-green-700">Active until: </span>
                        <span className="text-green-600">{formatDate(subscriptionData?.subscriptionExpiryDate)}</span>
                    </p>
                </div>
            )}

            {/* Features List */}
            <ul className="mt-8 flex-1 space-y-4 p-2 border border-[#E1E1E1] shadow-inner mb-3 rounded-lg">
                <ReuseButton variant="secondary" className="cursor-pointer bg-warning! border-warning! py-2! !w-fit px-4! text-base! text-secondary-color! font-bold! shadow" disabled>Included</ReuseButton>
                {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">

                        <FaRegCircleCheck className="size-4 mt-1.5 shrink-0 text-secondary-color" />

                        <span
                            className={cn(
                                "text-base leading-relaxed",
                                feature.included ? "text-[#364153]" : "text-[#99A1AF]"
                            )}
                        >
                            {feature.text}
                        </span>
                    </li>
                ))}
            </ul>
            <p className="text-sm text-[#99A1AF] mb-5">{plan?.description}</p>

            <div className="">
                {(subscriptionData?.hasActiveSubscription && subscriptionData?.subscriptionDays === plan?.id) ? <ReuseButton variant="secondary" className="cursor-default! bg-success! border-success!">Active</ReuseButton> : <PricingCardPaymentButton plan={plan} />}
            </div>
        </div>
    );
}
