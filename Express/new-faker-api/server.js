const faker = require("faker");

const express = require("express");

const app = express();
const port = 8000;// this data helps us run the server on a localhost:8000 page


// console.log(faker.datatype.uuid());
// console.log(faker.phone.phoneNumber());
//  here we are logging in our terminal the result of a uuid, to show that faker makes 
//fake data.

const makeUserObj = () => ({ // all of this information on faker can be found in the faker library
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password()
});
// console.log(makeUserObj());
        

const createCompany = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipcode: faker.address.zipCode(),
        country: faker.address.country()
    },
});

app.get('/api/users/new', (req, res) => { // this is the get route that is being created and passed through
    const newUser = makeUserObj(); // so here we are making a new user
    res.json(newUser); // and here we are sending the user through on the server side
});


app.get('/api/companies/new', (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany); // this should do essentially the same thing as the users get request,
    // but this time through a different url
})
// console.log(createCompany());
app.get('/api/user/company', (req, res) => {
    const newUser= makeUserObj();
    const newCompany= createCompany()
    const responseObject = {
        user: newUser,
        company: newCompany
    }
    res.json(responseObject);
})

app.listen(port, () => console.log(`Listening on port: ${port}`)); 
// to test this in the terminal, write out-- node server.js

// you may need to go into the windows powershell on your desktop
// if you are having problems running nodemon. 

// a TA helped me by suggesting the command 
// Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
// I hit yes and this allowed me to render the script with nodemon

// the main reason we want to use nodemon is so we dont need to 
// constantly re-launch our server.
