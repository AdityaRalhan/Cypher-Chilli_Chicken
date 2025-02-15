"use client"; // For App Router
import { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation"; // Import useRouter

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter(); // Initialize useRouter

  // Redirect when logged in
  useEffect(() => {
    if (session) {
      router.push("/dashboard/universalDashboard"); // Redirect to the dashboard
    }
  }, [session, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {session ? (
        <p>Redirecting...</p> // Optional: Show a loading message
      ) : (
        <>
          <p>Please sign in:</p>
          <button onClick={() => signIn("google")} className="bg-blue-500 text-white px-4 py-2 rounded">
            Sign in with Google
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
