const User = require('./User');
const Commenting = require('./Commenting');
const TechBlogPost = require('./Techblog');

User.hasMany(TechBlogPost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

TechBlogPost.belongsTo(User, {
  foreignKey: 'user_id'
});

Commenting.belongsTo(TechBlogPost, {
  foreignKey: 'user_id'
});

module.exports = { User, TechBlogPost, Commenting };