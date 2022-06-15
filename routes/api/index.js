const router = require('express').Router();
const traveller_routes = require('./traveller_routes');
const location_routes = require('./location_routes');
const trips_routes = require('./trips');

router.use('/travellers', traveller_routes);
router.use('/locations', location_routes);
router.use('/trips', trips_routes);

module.exports = router;
