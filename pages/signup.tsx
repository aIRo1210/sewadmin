"use client"; 

import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { auth, database } from '../firebaseConfig';
import Link from 'next/link';
import Image from 'next/image';

import { User } from 'firebase/auth';  

const Signup = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleEmailSignup = async () => {
    if (password !== confirmPassword) {
      setError('The passwords do not match. Please try again.');
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const displayName = `${firstName} ${lastName}`;
      saveUserData(userCredential.user, displayName);
      alert('Welcome to SewSkillz!');
      window.location.href = '/login'; 
    } catch (err) {
      setError('Error signing up. Please check your details and try again.');
      console.error('Signup error:', err);
    } finally {
      setLoading(false);
    }
  };

  const saveUserData = (user: User, displayName: string) => {  
    set(ref(database, 'users/' + user.uid), {
      displayName: displayName || '',
      email: user.email,
      profilePicture: user.photoURL || '',
    });
  };

  return (
    <div className="w-full px-12 mx-auto flex flex-col items-center">
      <div className="top-0 mt-18 mb-4">
        <Image
          src="https://drive.google.com/uc?export=view&id=1_Gj7oI5wKW77DpzJ6um9QWLwOZ95JFJX"
          alt="Logo"
          width={150}
          height={150}
          className="m-auto"
        />
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <div className="w-[300px] mt-4">
        <input
          type="text"
          className="border-b-2 border-black p-2 w-full mb-4 h-12 text-black"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          className="border-b-2 border-black p-2 w-full mb-4 h-12 text-black"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          className="border-b-2 border-black p-2 w-full mb-4 h-12 text-black"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="border-b-2 border-black p-2 w-full mb-4 h-12 text-black"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          className="border-b-2 border-black p-2 w-full mb-4 h-12 text-black"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          className={`bg-black text-white w-full mt-4 p-4 font-semibold text-xl ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleEmailSignup}
          disabled={loading}
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </div>

      <Link href="/login" className="font-semibold text-xl mt-4">
        Already have an account? Login here
      </Link>
    </div>
  );
};

export default Signup;
