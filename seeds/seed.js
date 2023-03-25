const sequelize = require('../config/connection');
const { User, Jobs } = require('../models');

const userData = require('./userData');
const jobsData = require('./frontEndData');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        // returning: true,
    });
    const createdUsers = await User.findAll()

    for (const jobData of jobsData) {
        await Jobs.create({
            ...jobData,
            type: jobData.type,
            user_id: createdUsers[Math.floor(Math.random() * createdUsers.length)].id,
        });
    }

};


seedDatabase();
