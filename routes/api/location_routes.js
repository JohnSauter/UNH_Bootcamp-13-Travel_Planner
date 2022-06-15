const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Location, Traveller, Trips } = require('../../models');

// GET all locations
router.get('/', async (req, res) => {
  try {
    const location_data = await Location.findAll();
    res.status(200).json(location_data);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* Create a location */
router.post('/', async (req, res) => {
  try {
    const {location_name } = req.body;
    const new_location = await Location.create( {
      location_name: location_name
    });
    res.status(201).json(new_location);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single location
router.get('/:id', async (req, res) => {
  try {
    const location_data = await Location.findByPk(req.params.id, {
      include: [{model: Trips}]
    });
    if (!location_data) {
      res.status(404).json({ message: 'No location found with that id!' });
      return;
    }
    res.status(200).json(location_data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a location
router.delete('/:id', async (req, res) => {
  try {
    const location_data = await Location.findByPk(req.params.id);
    if (!location_data) {
      res.status(404).json({ message: 'No location found with that id!' });
      return;
    }
    const result = await Location.destroy({
      where: {
        id: location_data.id
      }
    })
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
