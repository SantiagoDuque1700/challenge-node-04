const Model = require('./model')
var ObjectId = require('mongoose').Types.ObjectId

function addNote(note) {
    const myNote = new Model(note)
    return myNote.save() 
}

function listNotesByUser(userId) {
	if (!userId) {
        return new Promise.reject('Invalid data')
    }

	let filter = {
		user: userId,
	}
	
	    
	return Model.find(filter)  
}

function deleteNote(id) {
    return Model.findByIdAndDelete(id)
}

function updateNote(id, note) {
    return Model.findByIdAndUpdate({ _id: new ObjectId(id)}, note)
}

module.exports = {
    addNote,
    listNotesByUser,
    deleteNote,
    updateNote
}