const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./routes');
// Set up Handlebars.js engine
const hbs = exphbs.create(); 

const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;


const sess = {
  secret: 'this is a secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
};

app.use(session(sess));

// Inform Express.js on which template engine to use
// Use handlebars engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening...'));
});
