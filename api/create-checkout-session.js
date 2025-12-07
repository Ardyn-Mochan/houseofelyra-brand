import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    console.log("API Function invoked:", req.method);

    if (req.method === 'POST') {
        if (!process.env.STRIPE_SECRET_KEY) {
            console.error("Missing Stripe Secret Key");
            return res.status(500).json({ message: 'Internal Server Error: Missing Stripe Secret Key.' });
        }

        try {
            // Vercel usually parses JSON automatically. If not, it's a string.
            let body = req.body;
            if (typeof body === 'string') {
                try {
                    body = JSON.parse(body);
                } catch (e) {
                    console.error("Failed to parse request body:", e);
                    return res.status(400).json({ message: 'Invalid JSON request body' });
                }
            }

            const { items } = body;
            console.log("Items received:", items ? items.length : 0);

            if (!items || !Array.isArray(items) || items.length === 0) {
                return res.status(400).json({ message: 'No items provided for checkout.' });
            }

            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: items.map((item) => ({
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: item.name,
                        },
                        unit_amount: Math.round(item.price * 100),
                    },
                    quantity: item.quantity,
                })),
                mode: 'payment',
                success_url: `${req.headers.origin}/?success=true`,
                cancel_url: `${req.headers.origin}/?canceled=true`,
            });

            console.log("Session created:", session.id);
            res.status(200).json({ id: session.id, url: session.url });
        } catch (err) {
            console.error("Stripe Error Details:", err);
            res.status(500).json({ message: `Stripe Error: ${err.message}` });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
