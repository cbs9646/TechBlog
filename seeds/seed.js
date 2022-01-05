const sequelize = require('../config/connection');
const { User, TechBlogPost, Commenting } = require('../models');

const userData = require('./userData.json');
const techBlogPostData = require('./techBlogData.json');
const commentingData = require('./commentingData.json');

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

  for (const commenting of commentingData) {
    await Commenting.create({
      ...commenting,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }


  process.exit(0);
};

seedDatabase();
