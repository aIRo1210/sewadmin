"use client"; 

import { useState, useEffect } from 'react';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import Image from 'next/image';
import { FirebaseError } from 'firebase/app';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        window.location.href = 'signup';
      }
    });
    return unsubscribe;
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = 'signup'; 
    } catch (err: FirebaseError) {  
      if (err.code === 'auth/user-not-found') {
        setError('User not found. Please register.');
      } else if (err.code === 'auth/wrong-password') {
        setError('Incorrect password. Try again.');
      } else {
        setError('An unexpected error occurred. Try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mt-12 px-6 mx-auto flex flex-col items-center">
      <div className="mt-12 mb-4">
        <Image
          src="https://drive.google.com/uc?export=view&id=1_Gj7oI5wKW77DpzJ6um9QWLwOZ95JFJX"
          alt="Logo"
          width={150}
          height={150}
          className="w-[150px] h-[150px] m-auto"
        />
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <input
        type="email"
        className="border-b-2 border-black p-2 w-[300px] mb-4 h-16 text-black"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="border-b-2 border-black p-2 mt-4 w-[300px] mb-4 h-16 text-black"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className={`bg-black text-white w-[300px] items-center mt-4 p-4 font-semibold text-xl ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handleLogin}
        disabled={loading}
      >
        {loading ? 'Logging in...' : 'Log In'}
      </button>
      
      <Link href="/Signup" className="font-semibold text-xl mt-4">
        New here? Register here
      </Link>
    </div>
  );
};

export default Login;
