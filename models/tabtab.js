const Sequelize = require('sequelize')
const sequelize = require('./index').sequelize
const todos = sequelize.define('todos',{
    todo: {
        type: Sequelize.STRING,
        allowNull : false
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull : false
    },
    isDone: {
        type : Sequelize.BOOLEAN,
        allowNull : false
    }
    
    
}
);
todos.belongsTo(users);
module.exports = todos 