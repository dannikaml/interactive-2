const router = require('express').Router();
const { Jobs, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const jobsData = await Jobs.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });


    const jobsDataPlain = jobsData.map((Jobs) => Jobs.get({ plain: true }));
    res.render('homepage', {
      jobsDataPlain,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const jobsData = await Jobs.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });


    const jobsDataPlain = jobsData.map((Jobs) => Jobs.get({ plain: true }));
    res.render('dashboard', {
      jobsDataPlain,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

// router.get('/jobs/:id', withAuth, async (req, res) => {
//   try {
//     const jobsData = await Jobs.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const Jobs = jobsData.get({ plain: true });

//     res.render('jobs', {
//       ...Jobs,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Use withAuth middleware to prevent access to route
// router.get('/jobsPost', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Jobs }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('jobsPost', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;
