const router = require('express').Router();
const userRoutes = require('./userRoutes');
const techBlogRoutes = require('./techBlogRoutes');
const blogCommentRoute = require('./blogCommentRoute');

router.use('/users', userRoutes);
router.use('/techblogpost', techBlogRoutes);
router.use('/blogcomment', blogCommentRoute);

module.exports = router;