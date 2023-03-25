const router = require('express').Router();
const { Jobs } = require('../../models');

const withAuth = require('../../utils/auth');

router.post('/',  async (req, res) => {
  try {
    const newJobs = await Jobs.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newJobs);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const JobsData = await Jobs.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!JobsData) {
      res.status(404).json({ message: 'No Jobs found with this id!' });
      return;
    }

    res.status(200).json(JobsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
