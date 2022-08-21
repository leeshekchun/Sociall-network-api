const router = require('express').Router();
const userRoutes = require('./users-routes');
const thoughtRoutes = require('./thoughts-routes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;