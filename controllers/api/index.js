const router = require('express').Router();
const userRoutes = require('./userRoutes');
const techBlogRoutes = require('./techBlogRoutes');
const commentingRoutes = require('./commentingRoutes');

router.use('/users', userRoutes);
router.use('/techblogpost', techBlogRoutes);
router.use('/commenting', commentingRoutes);

module.exports = router;