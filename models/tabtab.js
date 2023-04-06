const Sequelize = require('sequelize')
const sequelize = require('./index').sequelize
const table = sequelize.define('Todo',{
    todo: {
        type: Sequelize.STRING,
        allowNull : false
    },
    userId: {
        type: Sequelize.STRING,
        allowNull : false
    },
    isDone: {
        type : Sequelize.BOOLEAN,
        allowNull : false
    }
    
    
}
)