const express = require ('express');
const app = express();
const mainRouters = require('./routers/mainRouters.js');
app.use(express.static('public'));

app.use('/', mainRouters);

app.listen(3000, () => {
    console.log('servidor funcionando')
});

/*
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req,res,next) => {
    res.status(404).render((__dirname + '/views/no_encontrado.ejs'));
})
*/


