const router = require('express').Router();
const { BlogComment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id/:comment_id', async (req, res) => {
    try {
        const blogCommentData = await BlogComment.findAll({
            include: [
                {
                    model: BlogComment,
                    attributes: ['comment'],
                },
            ],
        });
        
        const TechBlogPosts = techBlogPostData.map((techBlogPost) => techBlogPost.get({ plain: true }));

        res.render('homepage', {
            techBlogPosts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/:id:comment_id', withAuth, async (req, res) => {
    try {
        const newBlogComment = await BlogComment.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newBlogComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;