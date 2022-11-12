const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;



const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake
};

const newFakeProduct = createProduct();
console.log(newFakeProduct);

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );
