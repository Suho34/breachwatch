"use server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { signUpSchema, signInSchema } from "@/lib/validations/auth";

export async function signUpAction(formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  // Validate with Zod
  const parsed = signUpSchema.safeParse(data);

  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors;
    return { error: errors };
  }

  const { email, password, name } = parsed.data;

  await auth.api.signUpEmail({
    body: { email, password, name },
  });

  redirect("/dashboard");
}

export async function signInAction(formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  const parsed = signInSchema.safeParse(data);

  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors;
    return { error: errors };
  }

  const { email, password } = parsed.data;

  await auth.api.signInEmail({
    body: { email, password },
  });

  redirect("/dashboard");
}

export async function signOutAction() {
  await auth.api.signOut({
    headers: await headers(),
  });
  redirect("/");
}
