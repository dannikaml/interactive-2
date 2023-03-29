const router = require('express').Router();
const { Jobs, User } = require('../models');
const { Op } = require('sequelize');

const withAuth = require('../utils/auth');

router.get('/jobs/:id', async (req, res) => {
  try {
    const jobData = await Jobs.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const jobDataClean = jobData.get({ plain: true });

    res.render('job', {
      ...jobDataClean,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/job/new', withAuth, async (req, res) => {
  try {
    res.status(200)
    res.render('newJobForm')
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/jobs', withAuth, async (req, res) => {
  try {
    const newJob = await Jobs.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newJob);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/jobs', withAuth, async (req, res) => {
  try {
    const deletedJob = await Jobs.destroy({
      where: {
        id: req.body.id,
        user_id: req.session.user_id,
      },
    });

    if (!deletedJob) {
      res.status(404).json({ message: 'No Jobs found with this id!' });
      return;
    }

    res.status(200).json(deletedJob);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/job', async (req, res) => {
  try {
    const query = req.query.q;
    let jobData;

    if (query) {
      jobData = await Jobs.findAll({
        where: {
          [Op.or]: [
            { title: { [Op.like]: `%${query}%` } },
            { description: { [Op.like]: `%${query}%` } },
          ],
        },
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
    } else {
      jobData = await Jobs.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
    }

    const jobs = jobData.map((job) => job.get({ plain: true }));

    res.render('jobs', {
      jobs,
      query,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
