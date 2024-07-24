"use client";
import { useEffect, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function DashboardPage() {
  const { user, isLoading } = useUser();
  const [stripeCustomerId, setStripeCustomerId] = useState(null);

  useEffect(() => {
    if (user && !isLoading) {
      const createStripeCustomer = async () => {
        try {
          const res = await fetch('/api/createstripecustomer', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await res.json();
          if (data.stripeCustomerId) {
            setStripeCustomerId(data.stripeCustomerId);
          }
        } catch (error) {
          console.error('Error fetching Stripe customer ID:', error);
        }
      };

      createStripeCustomer();
    }
  }, [user, isLoading]);

  return (
    <div>
    
    </div>
  );
}
