const express = require('express');
const cors = require('cors');

const chessRouters = require('./routes/ecochess.routes');


let app = express();
let port = 3001;

app.use(cors());
app.use(express.json());

app.use("/",chessRouters);

        


app.listen(process.env.PORT);

   
    









