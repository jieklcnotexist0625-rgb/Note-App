import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Home() {
    const { user } = useAuth();

    return (
        <div className="min-h-screen bg-gray-950 text-white">
            {/* Hero Section */}
            <div className="max-w-5xl mx-auto px-6 py-24 text-center">
                <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    NoteFlow
                </h1>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                    Capture your thoughts. Organize your ideas. Access them anywhere.
                    The simplest way to keep your notes secure and organized.
                </p>
                <div className="flex gap-4 justify-center">
                    {user ? (
                        <Link to="/dashboard" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition">
                            Go to Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link to="/register" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition">
                                Get Started Free
                            </Link>
                            <Link to="/login" className="border border-gray-600 hover:border-gray-400 px-8 py-3 rounded-lg font-semibold transition">
                                Sign In
                            </Link>
                        </>
                    )}
                </div>
            </div>

            {/* Features */}
            <div className="max-w-5xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-8">
                {[
                    { title: 'Simple & Clean', desc: 'No clutter. Just you and your notes.' },
                    { title: 'Secure & Private', desc: 'Your notes are yours. Only you can see them.' },
                    { title: 'Access Anywhere', desc: 'Cloud-synced and available on any device.' },
                ].map((f, i) => (
                    <div key={i} className="bg-gray-900 p-8 rounded-xl border border-gray-800">
                        <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                        <p className="text-gray-400">{f.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}