const store = require('./store')

function addNote(note) {
    if(!note) {
        return new Promise.reject('Invalid data')
    }

    return store.addNote(note)
}

function listNotesByUser(userId) {
    return store.listNotesByUser(userId)
}

function deleteNote(id) {
    return store.deleteNote(id)
}

function updateNote(id, note) {
    return store.updateNote(id, note)
}

module.exports = {
    addNote,
    listNotesByUser,
    deleteNote,
    updateNote
}