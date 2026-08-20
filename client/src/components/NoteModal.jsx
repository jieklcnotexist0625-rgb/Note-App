import { useState } from 'react';

export default function NoteModal({ note, onSave, onClose }) {
    const [title, setTitle] = useState(note?.title || '');
    const [content, setContent] = useState(note?.content || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ title, content });
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 border border-gray-800 rounded-xl w-full max-w-lg p-6">
                <h2 className="text-xl font-bold mb-4">{note ? 'Edit Note' : 'New Note'}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                        required
                    />
                    <textarea
                        placeholder="Write your note..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none resize-none"
                        required
                    />
                    <div className="flex gap-3 justify-end">
                        <button type="button" onClick={onClose} className="px-6 py-2 rounded-lg border border-gray-700 hover:bg-gray-800 transition">
                            Cancel
                        </button>
                        <button type="submit" className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 font-semibold transition">
                            {note ? 'Update' : 'Create'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}