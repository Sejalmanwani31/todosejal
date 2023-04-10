const { Model } = require('sequelize');
const Sequelize = require('sequelize');
const user = require('./users');
const sequelize = require('./index').sequelize
const users = require('./users')
const todos = sequelize.define('todos',{
    todo: {
        type: Sequelize.STRING,
        allowNull : false
    },
    
    
    isDone: {
        type : Sequelize.BOOLEAN,
     
    }
    
    
}
);

todos.belongsTo(users);
module.exports = todos 