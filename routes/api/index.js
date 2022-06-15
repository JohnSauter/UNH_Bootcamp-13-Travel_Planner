const router = require('express').Router();
const traveller_routes = require('./traveller_routes');

router.use('/travellers', traveller_routes);

module.exports = router;
