const express = require('express');
const router = require('./playersRouter');

const playersRouter = require('./playersRouter');
const teamsRouter = require('./teamsRouter');

function routerApi(app){
    const router = express.Router();
    const apiVersion = 'v1';
    app.use(`/api/${apiVersion}`, router);

    router.use('/players', playersRouter);
    router.use('/teams', teamsRouter);
}

module.exports = routerApi;