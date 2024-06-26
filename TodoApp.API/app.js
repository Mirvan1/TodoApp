const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/config');
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

sequelize.authenticate()
    .then(() => console.log('Database connected successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));


const authRoutes = require('./routes/authRoutes');

const todoRoutes = require('./routes/todoRoutes');

app.use(express.static(path.join(__dirname, './dist/todo-app.ui/browser')));


app.use('/auth', authRoutes);
app.use('/todo', todoRoutes);
app.use(exceptionMiddleware); 
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/todo-app.ui/browser/index.html'),err=>{
        if (err) {
            res.status(500).send("Error serving index.html: " + err.message);
          }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
