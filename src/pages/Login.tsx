import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // handle login logic here
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-center py-12 px-6">
      <div className="w-full max-w-md bg-emerald-600 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-white mb-8 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-white mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-4 rounded-lg text-gray-800"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-white mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-4 rounded-lg text-gray-800"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-emerald-600 font-semibold py-3 rounded-lg hover:bg-emerald-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-white">
          <p>
            Don’t have an account? <Link to="/signup" className="underline">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
