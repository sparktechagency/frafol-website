import FrafolChoiceSection from '@/components/Dashboard/Professional/FrafolChoice/FrafolChoiceSection';
import TagTypes from '@/helpers/config/TagTypes';
import { fetchWithAuth } from '@/lib/fetchWraper';
import React from 'react';


export interface ISubscriptionData {
    hasActiveSubscription: boolean,
    subscriptionExpiryDate: string,
    subscriptionDays: number
}

const page = async () => {

    const res = await fetchWithAuth(`/users/me/subscription`, {
        next: {
            tags: [TagTypes.subscriptionOrder],
        },
    });

    const data = await res.json();

    console.log(data)
    const subscriptionData = data?.data

    return (
        <div>
            <FrafolChoiceSection subscriptionData={subscriptionData} />
        </div>
    );
};

export default page;