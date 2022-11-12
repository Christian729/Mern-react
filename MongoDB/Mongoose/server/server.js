const express = require("express");
const app = express();
    
require("./config/mongoose.config");
    
app.use(express.json(), express.urlencoded({ extended: true }));// not exactly sure what this is
    
const AllMyUserRoutes = require("./routes/user.routes");
AllMyUserRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));// this is what launches the server, and 
// the message you receive when launched 