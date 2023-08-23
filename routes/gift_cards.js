require("dotenv").config();
const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const {v4: uuidv4} = require("uuid");

router.post('/buy-gift-card', async (req, res) => {

    const { product_name, buyer, recipient, comment, amount, quantity, location } = req.body;
    const id = uuidv4();

	try {
        const product = await stripe.products.retrieve(
            'prod_OPq6f0MEfgaUEu'
          );
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			mode: 'payment',
			line_items: [
					{
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: product_name,
                                images: product.images,
                                description: product.description
                            },
                            unit_amount: amount,
                        },
                        quantity: quantity,
                    }
				],
            customer_email: buyer.email,
            metadata: {
                'order_id': id,
                'buyer_name': buyer.name,
                'image': product.images[0],
                'price': amount
              },
			// redirect urls 
			success_url: "https://govindas.vercel.app/order/success?session_id={CHECKOUT_SESSION_ID}",
            cancel_url: "https://govindas.vercel.app/"
            })
            res.json({url: session.url});
	} catch (e) {
		res.status(500).json({ error: e.message})
	}
});

module.exports = router;