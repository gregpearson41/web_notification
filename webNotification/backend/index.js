const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

// Create express app.
const app = express();

// Use body parser which we will use to parse request body that sending from client.
app.use(bodyParser.json());

// We will store our client files in ./client directory.
app.use(express.static(path.join(__dirname, "client")))

const publicVapidKey = "BOnNUoPIf3z2uvcY6aXrS0mmH_FfslcjdETmOYYWYgW-ldgPIJyQdMgpQ0Q5L6mcYNqbO68ImPEJhnhv1EyFgvM";

const privateVapidKey = "POB76Ix97YvLV1n5l7N7mxQo27on6J8ao8A3RhPyvvw";

// Setup the public and private VAPID keys to web-push library.
webpush.setVapidDetails("mailto:test@test.com", publicVapidKey, privateVapidKey);

// Create route for allow client to subscribe to push notification.
app.post('/subscribe', (req, res) => {
    const subscription = req.body;
    res.status(201).json({});
    const payload = JSON.stringify({ title: "Hello World", body: "This is your first push notification" });

    webpush.sendNotification(subscription, payload).catch(console.log);
})

const PORT = 5001;

app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});