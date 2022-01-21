const User = require('./User');
const TechBlogPost = require('./TechBlogPost');
const Commenting = require('./Commenting');

User.hasMany(TechBlogPost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

TechBlogPost.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Commenting.belongsTo(User, {
  foreignKey: 'user_id'
});

TechBlogPost.hasMany(Commenting, {
    foreignKey: 'techBlogPost_id'
});

module.exports = { User, TechBlogPost, Commenting };