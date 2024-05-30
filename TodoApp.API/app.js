const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const exceptionMiddleware = require('./middlewares/exceptionMiddleware');

const cors = require('cors');

const app = express();
require('dotenv').config();


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


app.use('/auth', authRoutes);
app.use('/todo', todoRoutes);
app.use(exceptionMiddleware); 


// Server configuration
console.log(process.env.PORT)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
