const router = require('express').Router();

const jobRoutes = require('./jobRoutes');
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');

router.use('/', homeRoutes);
router.use('/', jobRoutes);
router.use('/', userRoutes);


module.exports = router;
