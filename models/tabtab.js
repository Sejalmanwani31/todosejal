const Sequelize = require('sequelize')
const sequelize = require('./index').sequelize
const Todo = sequelize.define('Todo',{
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
Todo.belongsTo(users);
module.exports = Todo