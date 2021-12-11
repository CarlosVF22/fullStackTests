const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

routerApi(app);

app.listen(port, () =>{
    console.log('my port' + port)
});