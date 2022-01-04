const router = require('express').Router();
const userRoutes = require('./userRoutes');
const techBlogRoutes = require('./techBlogRoutes');

router.use('/users', userRoutes);
router.use('/techblogpost', techBlogRoutes);

module.exports = router;