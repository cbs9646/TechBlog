const router = require('express').Router();
const { TechBlogPost } = require('../../models');
const withAuth = require('../../utils/auth');


//Blog Post route 

router.post('/', withAuth, async (req, res) => {
  try {
    const newBlog = await TechBlogPost.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const techBlogData = await TechBlogPost.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!techBlogData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(techBlogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req,res)=> {
  try {
    const updateTechBlogPost = await TechBlogPost.update(
      {
        title: req.body.title,
        description: req.body.description,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(updateTechBlogPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
