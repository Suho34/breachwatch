import React from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { signOutAction } from "../actions/auth";
export default async function dashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 gap-4 ">
      <h2 className="text-4xl text-amber-50 font-bold">
        Welcome to Breach Watch
      </h2>
      <div className="mt-8 text-center">
        <p className="text-lg mb-4"> User ID:{session?.user.id}</p>
        <p className="text-lg mb-4"> Email:{session?.user.email}</p>
        <p className="text-lg mb-4"> Name:{session?.user.name}</p>

        <form action={signOutAction}>
          <button
            type="submit"
            className="bg-amber-700 p-2 hover:bg-amber-500 rounded-md"
          >
            logout
          </button>
        </form>
      </div>
    </div>
  );
}
