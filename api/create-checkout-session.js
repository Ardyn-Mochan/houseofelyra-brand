import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { items } = req.body;

            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: items.map((item) => ({
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: item.name,
                            // You can add images here if available in your item object
                            // images: [item.image], 
                        },
                        // Amount in cents
                        unit_amount: Math.round(item.price * 100),
                    },
                    quantity: item.quantity,
                })),
                mode: 'payment',
                success_url: `${req.headers.origin}/?success=true`,
                cancel_url: `${req.headers.origin}/?canceled=true`,
            });

            res.status(200).json({ id: session.id });
        } catch (err) {
            console.error(err);
            res.status(err.statusCode || 500).json({ message: err.message });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
