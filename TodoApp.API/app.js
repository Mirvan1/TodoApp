const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const exceptionMiddleware = require('./middlewares/exceptionMiddleware');
const path = require('path');

const cors = require('cors');

const app = express();
require('dotenv').config();
app.set('trust proxy', 1);


app.use(helmet());
app.use(rateLimit({
    windowMs: 30 * 60 * 1000,
    max: 150 
}));

app.use(bodyParser.json());
app.use(cors());

// Test database connection
sequelize.authenticate()
    .then(() => console.log('Database connected successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));


// Require route modules
const authRoutes = require('./routes/authRoutes');

const todoRoutes = require('./routes/todoRoutes');

app.use(express.static(path.join(__dirname, './dist/Todo-App.UI/browser/index.html')));

app.use('/auth', authRoutes);
app.use('/todo', todoRoutes);
app.use(exceptionMiddleware); 
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/Todo-App.UI/browser/index.html'));
});
// Server configuration
console.log(process.env.PORT)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
