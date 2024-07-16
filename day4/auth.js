const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

//get env values
dotenv.config();

generateToken : function generateToken(username) {
  return jwt.sign(username, process.env.JWT_SECRET, { expiresIn: '1800s' });
}

checkToken : function checkToken(req) {
  result = false;
  const token = req.headers['x-token'];
  
  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if(err) {
      result = false;
    } else {
      result = true;
    }
  });

  return result;
}

module.exports = {generateToken, checkToken}

