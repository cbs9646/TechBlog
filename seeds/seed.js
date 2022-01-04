const sequelize = require('../config/connection');
const { User, TechBlog } = require('../models');

const userData = require('./userData.json');
const techBlogData = require('./techBlogData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const tlog of techBlogData) {
    await TechBlog.create({
      ...tlog,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
