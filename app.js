  let express = require('express');

let cors = require('cors');

const chessRouters = require('./routes/ecochess.routes');

let app = express();
let port = 3001;

(async () => {

    try{
        //await mongo.connect();

        app.use(cors());
        app.use(express.json());

        app.use((req,res,next) => {
            console.log("Middleware Api called!!!!!!");
            next();
        })

        app.use("/chess",chessRouters);


        app.listen(process.env.PORT || port);

    }catch(err){
        console.log(err);
    }
    


})();















