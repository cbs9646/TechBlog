const sequelize = require('../config/connection');
const { User, TechBlogPost, BlogComment } = require('../models');

const userData = require('./userData.json');
const techBlogPostData = require('./techBlogPostData.json');
const blogCommentData = require('./blogCommentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const techBlogPost of techBlogPostData) {
    await TechBlogPost.create({
      ...techBlogPost,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const blogComment of blogCommentData) {
    await BlogComment.create({
      ...blogComment,
      blog_post_id: Math.floor(Math.random() * techBlogPostData.length + 1),
    });
  }


  process.exit(0);
};

seedDatabase();
