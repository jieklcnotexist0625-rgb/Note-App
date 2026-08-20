import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
    const { user, logout } = useAuth();

    return (
        <nav className="bg-gray-950 border-b border-gray-800 px-6 py-3">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-white">NoteFlow</Link>
                <div className="flex gap-4 items-center">
                    {user ? (
                        <>
                            <Link to="/dashboard" className="text-gray-400 hover:text-white transition text-sm">Dashboard</Link>
                            <button onClick={logout} className="text-gray-400 hover:text-white transition text-sm">Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="text-gray-400 hover:text-white transition text-sm">Login</Link>
                            <Link to="/register" className="bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-lg text-sm transition">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}