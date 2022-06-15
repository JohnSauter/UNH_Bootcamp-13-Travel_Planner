const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Location, Traveller, Trips } = require('../../models');

// GET all travellers
router.get('/', async (req, res) => {
  try {
    const traveller_data = await Traveller.findAll();
    res.status(200).json(traveller_data);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* Create a traveller */
router.post('/', async (req, res) => {
  try {
    const {name, email } = req.body;
    const new_traveller = await Traveller.create( {
      name: name,
      email: email
    });
    res.status(201).json(new_traveller);
  } catch (err) {
    res.status(500).json(err);
  }
})
// GET a single traveller
router.get('/:id', async (req, res) => {
  try {
    const traveller_data = await Traveller.findByPk(req.params.id, {
      include: [{model: Location}]
    });
    if (!traveller_data) {
      res.status(404).json({ message: 'No traveller found with that id!' });
      return;
    }
    res.status(200).json(traveller_data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a traveller
router.delete('/:id', async (req, res) => {
  try {
    const traveller_data = await Traveller.findByPk(req.params.id);
    if (!traveller_data) {
      res.status(404).json({ message: 'No traveller found with that id!' });
      return;
    }
    const result = await Traveller.destroy({
      where: {
        id: traveller_data.id
      }
    })
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
