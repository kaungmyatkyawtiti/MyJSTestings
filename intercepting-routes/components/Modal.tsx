"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function Modal({ children }: { children: ReactNode }) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-lg w-full">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white p-1 rounded-full hover:bg-red-500/80"
        >
          <X />
        </button>
        {children}
      </div>
    </div>
  );
}
