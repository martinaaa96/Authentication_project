const express = require('express');

const config = require('./config');

const setupViewEngine = require('./config/viewEngine');
const initDataBase = require('./config/dataBaseInit');

const app = express();

setupViewEngine(app);

app.use(express.static('./src/public'));
app.use(express.urlencoded({extended: false}));
app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/login',(req,res)=>{
    res.render('login')
});

app.get('/register', (req,res)=>{
    res.redirect('register')
})

initDataBase()
.then(()=> app.listen(config.PORT, ()=> console.log(`Server is listening on port ${config.PORT}...`)))
.catch((err) => console.log(err.message));
