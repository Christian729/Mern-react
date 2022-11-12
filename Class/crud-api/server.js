const express = require('express');
const app = express();
const port= 8000;

const myUsers= []


app.use(express.json())
app.use(express.urlencoded( { extended: true } ))

app.get('/api', (req, res)=> {
    res.json({msg:"Hello World"});
});
// Create
app.post('/api/person', (req, res)=> {
    const person= {
        email: email,
        password: password
    }
    myUsers.push(person)
    res.json({myUsers})
})
// Read
app.get('/api/person', (req, res)=> {
    res.json({msg:Read})
})
// Update
app.put('/api/person', (req, res)=> {
    res.json({msg:Update})
})
// Delete
app.delete('/api/person', (req, res)=> {
    res.json({msg:Delete})
});

app.listen(port, ()=> console.log(`Listening on port: ${port}`) );