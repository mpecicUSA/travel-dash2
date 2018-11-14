const login = require("../controllers/loginAndIndex.js");
const airlines = require('../controllers/airlines.js');
const trips = require('../controllers/trips.js');

module.exports = function (app) {
  app.get('/', login.index);
}
