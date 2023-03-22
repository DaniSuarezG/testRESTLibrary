const { DataTypes } = require('sequelize')
const sequelize = require ('../db')

const User = sequelize.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

// (async function () {
//     try {
//         await User.sync({alter: true})
//     } catch (error) {
//         console.log('ERROR: Cannot sync model User')
//     }
// }

// )

module.exports = User