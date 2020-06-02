const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/:userId', (req, res) => {
    controller.listNotesByUser(req.params.userId)
        .then(data => {
            response.success(req, res, data, 200)
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err)
        })
})

router.post('/', (req, res) => {
    controller.addNote(req.body)
        .then(data => {
            response.success(req, res, data, 201)
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err)
        })
})

router.put('/:id', (req, res) => {
    controller.updateNote(req.params.id, req.body)
        .then(data => {
            response.success(req, res, data, 200)
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err)
        })
})

router.delete('/:id', (req, res) => {
    controller.deleteNote(req.params.id)
        .then(data => {
            response.success(req, res, data, 200)
        })
        .catch(err => {
            response.error(req, res, 'Invalid error', 500, err)
        })
})

module.exports = router