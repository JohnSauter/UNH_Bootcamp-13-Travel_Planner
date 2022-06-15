const router = require('express').Router();
const traveller_routes = require('./traveller_routes');
const location_routes = require('./location_routes');

router.use('/travellers', traveller_routes);
router.use('/locations', location_routes);

module.exports = router;
