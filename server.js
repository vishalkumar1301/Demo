const express = require('express');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'))
app.set("view engine", "ejs");

app.get('/', function (req, res) {
    res.render('home.ejs');
});

app.get('/signin', function (req, res) {
    res.render('signin.ejs');
});

app.get('/signup', function (req, res) {
    res.render('signup.ejs');
});

app.listen(port, function() {
    console.log(`App running on port ${port}`)
});