"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const handleCreateAudience = async (rules) => {
    const response = await axios.post("http://localhost:3001/api/audiences", {
      rules,
    });
    setAudienceSize(response.data.size);
  };
  const { session } = useSession();
  const { status } = useSession();

  const router = useRouter();
  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      // wrap your async call here
      const loadData = async () => {
        if (status === "loading") {
          return <div>Loading...</div>;
        }

        if (status === "authenticated") {
          router.push("/");
        }
      };

      // then call it here
      loadData();
    }
  }, [status, router]);

  return (
    <div>
      {!session && (
        <div className="flex justify-center items-center h-screen bg-red-100">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-center p-2">
              Customer relationship management
            </h1>

            <img
              src="https://plus.unsplash.com/premium_photo-1681487814165-018814e29155?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Placeholder"
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <button
              onClick={() => signIn()}
              className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faGoogle} className="mr-2" />
              Sign in with Google
            </button>
          </div>
        </div>
      )}
      {session && (
        <>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  );
}
