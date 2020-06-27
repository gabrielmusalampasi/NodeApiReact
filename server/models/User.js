const Sequelize = require('sequelize');
const db = require('../database/db');
module.exports = db.sequelize.define(
    'user',
    {
      id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: {
        type: Sequelize.INTEGER
      },
      last_name: {
              type: Sequelize.STRING
        },
      email: {
               type: Sequelize.STRING
             },
      password: {
               type: Sequelize.STRING
             },
      createdAt: {
               allowNull: false,
              type: Sequelize.DATE,
              defaultValue: Sequelize.NOW
             },
      updatedAt: {
               allowNull: false,
              type: Sequelize.DATE
           }

    }
);

