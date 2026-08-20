import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import NoteCard from '../components/NoteCard';
import NoteModal from '../components/NoteModal';

const API_URL = 'https://note-app-iu3g.onrender.com/api';

export default function Dashboard() {
    const [notes, setNotes] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [editingNote, setEditingNote] = useState(null);
    const { user, logout } = useAuth();

    const fetchNotes = async () => {
        try {
            const res = await axios.get(`${API_URL}/notes`);
            setNotes(res.data);
        } catch (error) {
            console.error('Failed to fetch notes');
        }
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    const handleSave = async (noteData) => {
        try {
            if (editingNote) {
                await axios.put(`${API_URL}/notes/${editingNote._id}`, noteData);
            } else {
                await axios.post(`${API_URL}/notes`, noteData);
            }
            fetchNotes();
            setModalOpen(false);
            setEditingNote(null);
        } catch (error) {
            console.error('Failed to save note');
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Delete this note?')) return;
        try {
            await axios.delete(`${API_URL}/notes/${id}`);
            fetchNotes();
        } catch (error) {
            console.error('Failed to delete note');
        }
    };

    const handleEdit = (note) => {
        setEditingNote(note);
        setModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-gray-950 text-white">
            {/* Header */}
            <div className="border-b border-gray-800 px-6 py-4 flex justify-between items-center max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold">My Notes</h1>
                <div className="flex items-center gap-4">
                    <span className="text-gray-400">{user?.username}</span>
                    <button onClick={logout} className="text-sm text-gray-400 hover:text-white transition">
                        Logout
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-6 py-8">
                <button
                    onClick={() => { setEditingNote(null); setModalOpen(true); }}
                    className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold mb-8 transition"
                >
                    + New Note
                </button>

                {notes.length === 0 ? (
                    <div className="text-center text-gray-500 py-20">
                        <p className="text-xl">No notes yet</p>
                        <p className="mt-2">Create your first note to get started!</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {notes.map((note) => (
                            <NoteCard
                                key={note._id}
                                note={note}
                                onEdit={() => handleEdit(note)}
                                onDelete={() => handleDelete(note._id)}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Modal */}
            {modalOpen && (
                <NoteModal
                    note={editingNote}
                    onSave={handleSave}
                    onClose={() => { setModalOpen(false); setEditingNote(null); }}
                />
            )}
        </div>
    );
}