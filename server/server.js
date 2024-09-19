//pk_test_51Q03QEP3NQclC9uBX0EbViCVy4VyPIMBhF7Uhy40LlNitsRbXwcdILxHQN5cqJVlFh0Jisz7SKHYd1eFn3zdYyuk005wGJvsJe
//Sunglasses: price_1Q03gIP3NQclC9uBTcXtJl07
//Coffee:  price_1Q03cXP3NQclC9uBvw8tWUZp
//Camera:  price_1Q03n4P3NQclC9uBYeOTZ47c

const express = require('express');
const cors = require("cors");
const stripe = require("stripe")('sk_test_51Q03QEP3NQclC9uB12EZxX2Z9pVjqXa3SlSfNIss7VQBhxRkH71rndzq3E4k8QuWiAW7AVJCYeKdfvu6515fgi4f008adV7Qpq')
const PORT = 5000;

const app = express()
app.use(cors()) // to allow cross-origin requests
app.use(express.static('public')) // to serve static files
app.use(express.json()) // for parsing application/json

app.get('/', (req, res) => {
    res.send("App is running")
})

app.post('/checkout', async (req, res) => {
    /*
    from the frontend, we will receive items by tapping into:
        req.body.items
    And this data will look like so:

            [
            { 
                id: 1,
                quantity: 4
            }
            ]
    BUT stripe wants this data to come like:
        
            [
            { 
                price: 1,
                quantity: 4
            }
            ]
        And for the API call this array should be called lineItems
     */
    const items = req.body.items;
    let lineItems = [];
    //transform the array objects received from req.body.items to the format required by stripe
    items.forEach(item => {
        lineItems.push(
            {
                price: item.id,
                quantity:item.quantity
            }
        )
    })

    //Initialize stripe session
    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode:'payment',
        success_url: 'http://localhost:5173/success',
        cancel_url: 'http://localhost:5173/cancel'
    })

    res.send(JSON.stringify({
        url: session.url
    }))

})
app.listen(PORT, () => console.log('App is running on port:', PORT))