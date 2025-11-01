"use client";

import { useState } from "react";
import { signInAction } from "@/app/actions/auth";
import { OAuthButtons } from "@/components/oauth-button";
import { Loader2, Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function SignInPage() {
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const result = await signInAction(formData);

    if (result?.error) {
      setErrors(result.error);
    }
    setIsLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-850 to-gray-900 px-4 py-8">
      <div className="w-full max-w-md">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 p-8 hover:shadow-2xl transition-all duration-500">
          {/* Header */}
          <div className="mb-10 text-center">
            <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent mb-3">
              Welcome Back
            </h2>
            <p className="text-gray-400 text-sm font-light tracking-wide">
              Sign in to continue to your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-300 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-11 pr-4 py-3.5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 outline-none transition-all duration-300 bg-gray-900/50 text-white placeholder-gray-500 hover:border-gray-500 backdrop-blur-sm"
                  autoComplete="email"
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-400 flex items-center gap-2 mt-2 animate-pulse">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  {errors.email[0]}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-300"
                >
                  Password
                </label>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full pl-11 pr-12 py-3.5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 outline-none transition-all duration-300 bg-gray-900/50 text-white placeholder-gray-500 hover:border-gray-500 backdrop-blur-sm"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-400 flex items-center gap-2 mt-2 animate-pulse">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  {errors.password[0]}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-4 rounded-xl hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
            >
              <div className="relative z-10 flex items-center justify-center gap-2">
                {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
                {isLoading ? "Signing In..." : "Sign In"}
              </div>
              <div className="absolute inset-0 bg-linear-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </form>

          {/* OAuth Buttons */}
          <div className="mt-8">
            <OAuthButtons mode="signin" />
          </div>

          {/* Footer Link */}
          <p className="mt-8 text-center text-sm text-gray-400">
            Don&apos;t have an account?{" "}
            <a
              href="/signup"
              className="font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-200 hover:underline"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
