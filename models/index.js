const User = require('./user');
const Jobs = require('./jobs');

User.hasMany(Jobs, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Jobs.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Jobs};
  
