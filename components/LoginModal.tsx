'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";
import { signIn } from 'next-auth/react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#1e1e1e] border-none text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-white mb-4">Login</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => signIn('google', { redirectTo: "/" })}
            className="w-full flex items-center justify-center gap-2 bg-slate-400 text-white py-2 px-4 rounded-md hover:bg-slate-500 transition-all"
          >
            <FcGoogle className='w-5 h-5' />
            Sign in with Google
          </button>
          <button
            onClick={() => signIn('github', { redirectTo: "/" })}
            className="w-full flex items-center justify-center gap-2 bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-all"
          >
            <VscGithub className='w-5 h-5' />
            Sign in with GitHub
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 