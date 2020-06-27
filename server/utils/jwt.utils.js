const jwt = require('jsonwebtoken');

//const JWT_SIGN_SECRET= '0sj6gfmk9nwfhr5hvpxmpgtty34tfx8GZ17sy6jnm0xuc65bi9rcc';
const secret = 'secret';


module.exports = {
    generateToken: function(userData) {
        return jwt.sign({
            userData: userData.id,
            first_name: userData.first_name,
            last_name: userData.last_name,
            email: userData.email
        }, secret,{
            expiresIn: '1h'
        })
    }
};