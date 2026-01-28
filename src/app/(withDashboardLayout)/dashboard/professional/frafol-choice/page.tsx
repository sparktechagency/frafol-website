import FrafolChoiceSection from '@/components/Dashboard/Professional/FrafolChoice/FrafolChoiceSection';
import TagTypes from '@/helpers/config/TagTypes';
import { fetchWithAuth } from '@/lib/fetchWraper';
import React from 'react';


export interface ISubscriptionData {
    hasActiveSubscription: boolean,
    subscriptionExpiryDate: string,
    subscriptionDays: number
}

export interface ISubscription {
    _id: string;
    title: string;
    duration: number;
    price: number;
    isActive: boolean;
    createdAt: string; // or Date if you parse it
    updatedAt: string; // or Date if you parse it
}

const page = async () => {

    const res = await fetchWithAuth(`/users/me/subscription`, {
        next: {
            tags: [TagTypes.subscriptionOrder],
        },
    });

    const data = await res.json();

    const subscriptionData = data?.data


    const packRes = await fetchWithAuth(`/subscription`, {
        next: {
            tags: [TagTypes.subscriptionOrder],
        },
    });

    const packData = await packRes.json();

    const allPacks = packData?.data
    console.log(allPacks)

    return (
        <div>
            <FrafolChoiceSection subscriptionData={subscriptionData} allPacks={allPacks} />
        </div>
    );
};

export default page;