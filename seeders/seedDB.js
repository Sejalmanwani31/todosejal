const user = require('../models/users')
const bcrypt = require('bcrypt')
async function seedData(){
    const findFirstUser = await user.findOne({
        email: 'manwani.sejal31@gmail.com'
    })
    if (!findFirstUser) {
        await user.create({
            firstName: 'Sejal',
            lastName: 'Manwani',
            email: 'manwani.sejal31@gmail.com',
            password: await bcrypt.hash('123@', 8 )
        })
    }
}
module.exports = seedData;