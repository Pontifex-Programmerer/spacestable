//Global imports
const express = require('express');

//local imports
const router = require('./router/default-routes');

//Initializing constants
const app = express();
const PORT = 3000 | process.env.PORT;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('home'));
app.use(router);


console.log(`Building stable environment for spaceponies..`);

app.listen(PORT, ()=>{
    console.log(`Spacepony stable build completed. It can now be found @ port ${PORT}`);
    console.log('Go get those ponies! Be a good ponyboy!');
});