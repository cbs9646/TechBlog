const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BlogComment extends Model {}

BlogComment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        blog_post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'techBlogPost',
                key: 'id',
            },
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
            user_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'user',
                    key: 'id',
                },
            },
        },
             
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogcomment',
    }
);

module.exports = BlogComment;