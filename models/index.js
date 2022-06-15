const Traveller = require('./Traveller');
const Location = require('./Location');
const Trips = require('./Trips');

Traveller.belongsToMany(Location, { through: Trips });
Location.belongsToMany(Traveller, { through: Trips });

module.exports = { Traveller, Location, Trips };
