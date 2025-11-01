"use client";

import { useState } from "react";
import { signIn } from "@/lib/auth-client";
import { BsGoogle } from "react-icons/bs";
import { Loader2 } from "lucide-react";

interface OAuthButtonsProps {
  mode?: "signin" | "signup";
}

export function OAuthButtons({ mode = "signup" }: OAuthButtonsProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
      });
    } catch (error) {
      console.error("Sign in failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-600/50"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-3 bg-gray-800 text-gray-400 text-xs font-medium tracking-wide uppercase">
            Or continue with
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <button
          onClick={handleGoogleSignIn}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-3 px-4 py-3.5 border border-gray-600 rounded-xl hover:bg-gray-750 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-gray-800/50 text-white shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <BsGoogle className="text-lg text-gray-300 group-hover:text-white transition-colors" />
          )}
          <span className="text-sm font-medium">
            {isLoading ? "Connecting..." : "Continue with Google"}
          </span>
        </button>
      </div>
    </>
  );
}
