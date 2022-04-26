const { Sequelize } = require('sequelize');

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'aniviagod',
    database: 'expressBasic',
    port: 5432
});

module.exports = { db };