const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, 'secret', (err, user) => {
            if (err) {
                return res.sendStatus(403); 
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401); 
    }
};

module.exports = authenticate;
