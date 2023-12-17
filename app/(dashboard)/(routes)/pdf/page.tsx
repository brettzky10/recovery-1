import React from 'react'
import { getUserSubscriptionPlan } from '@/lib/stripe'
import Dashboard from '@/components/pdfchat/dashboard'

const FilePage = async () => {
    const subscriptionPlan = await getUserSubscriptionPlan()

    return <Dashboard subscriptionPlan={subscriptionPlan} />
}

export default FilePage