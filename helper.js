const fs = require('fs');
function getUsers() {
    const userStr = fs.readFileSync('./users.json', utf-8);

    const users = JSON.parse(userStr);

    return users;
}

module.exports = {
    getUsers,
};