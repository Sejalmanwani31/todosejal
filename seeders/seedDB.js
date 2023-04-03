const user = require('../models/users')
const bcrypt = require('bcrypt')
async function seedData(){
    
        const findFirstRole = await roles.findOne({
            authority : 'ROLE_SUPERADMIN'
    
        })
        if (!findFirstRole) {
            await roles.bulkCreate([
               {
                authority : 'ROLE_SUPERADMIN'
               },
               {
                 authority : 'ROLE_ADMIN'
               },
               {
                authority : 'ROLE_USER'
               }
            ])
        
    }
const findAdminRole = await roles.findOne({ authority: "ROLE_SUPERADMIN"})


    const findFirstUser = await user.findOne({
        email: 'manwani.sejal31@gmail.com'
    })
    if (!findFirstUser) {
        await user.create({
            firstName: 'Sejal',
            lastName: 'Manwani',
            email: 'manwani.sejal31@gmail.com',
            password: await bcrypt.hash('123@', 8 ),
            roleId : findAdminRole.id
        })
    }
}
module.exports = seedData;