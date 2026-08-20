import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Register() {
    const [form, setForm] = useState({ username: '', email: '', password: '' });
    const [error, setError] = useState('');
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError('');
            await register(form.username, form.email, form.password);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center">Create Account</h2>
                {error && <p className="text-red-400 mb-4 text-center">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={form.username}
                        onChange={(e) => setForm({ ...form, username: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password (min 6 characters)"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                        minLength={6}
                        required
                    />
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition">
                        Register
                    </button>
                </form>
                <p className="text-center text-gray-400 mt-4">
                    Already have an account? <Link to="/login" className="text-blue-400 hover:underline">Sign in</Link>
                </p>
            </div>
        </div>
    );
}