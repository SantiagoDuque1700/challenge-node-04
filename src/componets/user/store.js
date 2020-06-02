const Model = require('./model')

function addUser(user) {
    const myUser = new Model(user)
    return myUser.save()
}

function listUsers() {
    return Model.find()
}

function getUser(id) {
    return Model.findById(id)
}

function deleteUser(id) {
    return Model.findByIdAndDelete(id)
}

function updateUser(id, user) {
    return Model.findOneAndUpdate({ _id: id}, user)
}

module.exports = {
    addUser,
    listUsers,
    getUser,
    deleteUser,
    updateUser
}