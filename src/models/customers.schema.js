'use strict';

module.exports = (sequelizeDB, DataTypes) => sequelizeDB.define('customers', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  pronouns: {
    type: DataTypes.ENUM,
    values: ['they/them', 'she/her', 'he/him'],
    allowNull: true,
  },
});
