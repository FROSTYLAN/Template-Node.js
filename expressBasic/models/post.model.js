const { DataTypes } = require('sequelize')
const { db } = require('../utils/database')

const Post = db.define('post', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = { Post };