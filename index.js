const express = require('express');
require("./src/db/mongoose");
const app = express();
const port = process.env.PORT

app.use(express.json())

app.listen(port, () =>{
    console.log('Server is up on port ' + port)
})