export default function NoteCard({ note, onEdit, onDelete }) {
    return (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition group">
            <h3 className="text-lg font-semibold mb-2 truncate">{note.title}</h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-3">{note.content}</p>
            <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">
                    {new Date(note.updatedAt).toLocaleDateString()}
                </span>
                <div className="gap-2 flex">
                    <button onClick={onEdit} className="text-sm text-blue-400 hover:text-blue-300">Edit</button>
                    <button onClick={onDelete} className="text-sm text-red-400 hover:text-red-300">Delete</button>
                </div>
            </div>
        </div>
    );
}