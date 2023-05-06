import { loadStripe, Stripe } from '@stripe/stripe-js';

const stripe = await loadStripe(process.env.STRIPE_NEXT_PUBLISHABLE_KEY!);
