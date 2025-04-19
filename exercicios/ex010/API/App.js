// Importing Express Module - Create a web server
const express = require("express");

// Creating an Instance of Express
const app = express();

// Middlewares to Process

/* Allows Express to Interpret Data from HTML Forms sent via POST Requests
Content-Type: application/x-www-form-urlencoded */
app.use(express.urlencoded({ extended: true }));

/* Converts the Request Body (if in JSON) into a JavaScript Object acessible via "req.body"
Content-Type: application/json */
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello API!"
    })
});

app.post("/create", (req, res) => {
    const name = req.body.name;
    const price = req.body.price;

    if (!name) {
        res.status(422).json({ message: "Name is Required!" });
        return;
    }

    console.log(name);
    console.log(price);

    res.status(201).json({ message: `Product ${name} Created Successfully!` })
});

// Initialize the HTTP Server on PORT and Listening for Requests
app.listen(5000);