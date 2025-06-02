'use client';

import { signIn } from 'next-auth/react';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#131313]">
      <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold text-center text-white mb-4">Login</h2>
        <button
          onClick={() => signIn('google', {redirectTo: "/"})}
          className="w-full flex items-center justify-center gap-2 bg-slate-400 text-white py-2 px-4 rounded-md hover:bg-slate-500 transition-all"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.76 12.27c0-.84-.07-1.44-.22-2.07H12v4.14h6.79c-.3 1.57-1.28 2.9-2.81 3.79v3.14h4.55c2.67-2.45 4.23-6.07 4.23-8.99z" />
          </svg>
          Sign in with Google
        </button>
        <button
          onClick={() => signIn('github', {redirectTo: "/"})}
          className="w-full flex items-center justify-center gap-2 bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-all mt-3"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.21.68-.47v-1.69c-2.79.6-3.37-1.18-3.37-1.18-.45-1.14-1.11-1.44-1.11-1.44-.9-.62.07-.61.07-.61 1 .07 1.53 1.05 1.53 1.05.88 1.5 2.32 1.07 2.88.82.09-.64.34-1.07.62-1.32-2.22-.25-4.56-1.12-4.56-4.96 0-1.1.39-2 1.03-2.7-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02A9.4 9.4 0 0 1 12 6.84c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.39.2 2.42.1 2.67.64.7 1.03 1.6 1.03 2.7 0 3.85-2.34 4.71-4.57 4.96.35.3.66.88.66 1.77v2.63c0 .26.18.57.69.47A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
          </svg>
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
}