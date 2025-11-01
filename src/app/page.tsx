"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-white">YourApp</div>
            <div className="flex gap-4">
              <Link
                href="/signin"
                className="px-4 py-2 text-gray-300 hover:text-white font-medium"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Welcome to YourApp
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            The simplest way to get things done. Start building something
            amazing today.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium text-lg"
            >
              Get Started
            </Link>
            <Link
              href="#features"
              className="px-8 py-3 border border-gray-700 text-gray-300 rounded-md hover:bg-gray-800 font-medium text-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
