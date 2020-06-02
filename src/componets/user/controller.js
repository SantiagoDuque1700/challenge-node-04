const store = require('./store')

function addUser(user) {
    if(!user) {
        return new Promise.reject('Invalid data')
    }

    return store.addUser(user)
}

function listUsers() {
    return store.listUsers()
}

function getUser(id) {
    return store.getUser(id)
}

function deleteUser(id) {
    return store.deleteUser(id)
}

function updateUser(id, user) {
    return store.updateUser(id, user)
}

module.exports = {
    addUser,
    listUsers,
    getUser,
    deleteUser,
    updateUser
}