const express = require('express');
const Note = require('../models/Note');
const auth = require('../middleware/auth');

const router = express.Router();

// All routes require authentication
router.use(auth);

// Get all notes for the logged-in user
router.get('/', async (req, res) => {
    try {
        const notes = await Note.find({ user: req.userId }).sort({ createdAt: -1 });
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Create a note
router.post('/', async (req, res) => {
    try {
        const { title, content } = req.body;
        const note = new Note({ title, content, user: req.userId });
        await note.save();
        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Update a note
router.put('/:id', async (req, res) => {
    try {
        const note = await Note.findOne({ _id: req.params.id, user: req.userId });
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }

        note.title = req.body.title || note.title;
        note.content = req.body.content || note.content;
        await note.save();
        res.json(note);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete a note
router.delete('/:id', async (req, res) => {
    try {
        const note = await Note.findOneAndDelete({ _id: req.params.id, user: req.userId });
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.json({ message: 'Note deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;