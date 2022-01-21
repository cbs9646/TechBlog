const User = require('./User');
const TechBlogPost = require('./TechBlogPost');
const BlogComment = require('./BlogComment');

User.hasMany(TechBlogPost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

TechBlogPost.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

BlogComment.belongsTo(User, {
  foreignKey: 'user_id'
});

TechBlogPost.hasMany(BlogComment, {
    foreignKey: 'techBlogPost_id'
});

module.exports = { User, TechBlogPost, BlogComment };