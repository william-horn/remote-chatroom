/*
? @document-start
======================
| SERVER APPLICATION |
==================================================================================================================================

? @author:                 William J. Horn
? @document-name:          server.js
? @document-created:       05/13/2022
? @document-modified:      05/13/2022

==================================================================================================================================

? @document-info
==================
| ABOUT DOCUMENT |
==================================================================================================================================

it do stuff

==================================================================================================================================
*/

/* ----------------------- */
/* Import Environment Vars */
/* ----------------------- */
require('dotenv').config();

/* ---------------- */
/* Import Libraries */
/* ---------------- */
const express = require('express');
const expresshbs = require('express-handlebars');
const sequelizeConnection = require('./config/sequelizeConnection');
const routes = require('./controllers');

/* ----------------- */
/* Application Setup */
/* ----------------- */
// create express application
const app = express();
const PORT = process.env.PORT || 3333;
const RESET_DB_ON_LOAD = process.env.DB_RESET_ON_LOAD === 'true';

console.log('reset database on load: ', RESET_DB_ON_LOAD);

// set view engine for app
const handlebars = expresshbs.create();
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// implement express middleware
// add 'public' folder when sending files
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

// routes
app.use(routes);

// sync db and activate server
sequelizeConnection.sync({force: RESET_DB_ON_LOAD}).then(() => {
    app.listen(PORT, () => {
        console.log(`Chat server is running on port: ${PORT}`);

        // set base seeds
        if (RESET_DB_ON_LOAD) require('./seeds');
    })
});