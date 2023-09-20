const express = require('express'); //import the express module
const app = express();  //instantiate the express server in app
const port = 3000; //reserved port
const userRoute = require("./userRoute") //import the userRoute module for use

app.use(express.json()) // why does this need to be on top? It does not work if it's under the other app.use

app.use('/user', userRoute) //this is how you use the routes from the userRoute file after importing


app.listen(port, () => { //this is required in every express program so you can listen on the the port
    console.log("Server is Running")
})

