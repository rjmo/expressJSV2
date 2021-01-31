const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const exphbs  = require('express-handlebars');
const members = require('./Members');


const app = express();

// middleware
// app.use(logger);

// handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// homepage
app.get('/', (req, res) => res.render('index', {
    title: 'Member app',
    members
}))

//Static folder
// app.use(express.static(path.join(__dirname, 'public')));

// members API routes

app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
