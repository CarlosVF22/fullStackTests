const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.send('Mi server esta funcionando');
})

routerApi(app);

app.listen(port, () =>{
    console.log('my port en fullstackTest ' + port);
});