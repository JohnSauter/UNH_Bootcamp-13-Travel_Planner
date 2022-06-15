const Traveller = require('./Traveller');
const Location = require('./Location');
const Trips = require('./Trips');

Traveller.belongsToMany(Location, { 
    through: Trips,
    onDelete: 'CASCADE'
});
Location.belongsToMany(Traveller, { 
    through: Trips,
    onDelete: 'CASCADE'
});

module.exports = { Traveller, Location, Trips };
