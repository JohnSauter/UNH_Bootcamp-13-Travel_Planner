const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Location, Traveller, Trips } = require('../../models');

// GET all trips
router.get('/', async (req, res) => {
  try {
    const trips_data = await Trips.findAll();
    res.status(200).json(trips_data);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* Create a trip */
router.post('/', async (req, res) => {
  try {
    const {trip_budget, traveller_amount, traveller_id, location_id } = req.body;
    const new_trip = await Trips.create( {
      trip_budget: trip_budget,
      traveller_amount: traveller_amount,
      traveller_id: Number(traveller_id),
      location_id: Number(location_id)
    });
    res.status(201).json(new_trip);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a trip
router.delete('/:id', async (req, res) => {
  try {
    const trip_data = await Trips.findByPk(req.params.id);
    if (!trip_data) {
      res.status(404).json({ message: 'No trip found with that id!' });
      return;
    }
    const result = await Trips.destroy({
      where: {
        id: trip_data.id
      }
    })
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
