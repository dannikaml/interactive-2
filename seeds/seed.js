const sequelize = require('../config/connection');
const { User, Project } = require('../models');

const userData = require('./userData.json');
const seedData = require('./frontEndData.json');
const seedData = require('./backEndData.json');
const seedData = require('./fullStackData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
    });

    for (const project of seedData) {
        await Project.create({
        ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
    }

process.exit(0);
};

seedDatabase();