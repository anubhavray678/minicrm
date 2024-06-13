// "use client";
// import { useSession, signIn, signOut } from "next-auth/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGoogle } from "@fortawesome/free-brands-svg-icons";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export default function Home() {
//   // const { session } = useSession();
//   const { status } = useSession();

//   const router = useRouter();
//   useEffect(() => {
//     // Check if window is defined (client-side)
//     if (typeof window !== "undefined") {
//       // wrap your async call here
//       const loadData = async () => {
//         if (status === "loading") {
//           return <div>Loading...</div>;
//         }

//         if (status === "authenticated") {
//           router.push("/");
//         }
//       };

//       // then call it here
//       loadData();
//     }
//   }, [status, router]);

//   return (
//     <div>
//       {!status && (
//         <div className="flex justify-center items-center h-screen bg-red-100">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h1 className="text-center p-2">
//               Customer relationship management
//             </h1>

//             <img
//               src="https://plus.unsplash.com/premium_photo-1681487814165-018814e29155?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="Placeholder"
//               className="w-full h-56 object-cover rounded-t-lg"
//             />
//             <button
//               onClick={() => signIn()}
//               className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
//             >
//               <FontAwesomeIcon icon={faGoogle} className="mr-2" />
//               Sign in with Google
//             </button>
//           </div>
//         </div>
//       )}
//       {status && (
//         <>
//           <button onClick={() => signOut()}>Sign out</button>
//         </>
//       )}
//     </div>
//   );
// }

"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
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
    <>
      <div className="flex justify-end items-center  h-[80vh] md:flex-row flex-col bg-[url('/login.jpg')] bg-contain bg-no-repeat bg-white mr">
        <div className="mt-12 flex flex-col items-center bg-white p-5 rounded">
          <h1 className="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
          <h1>Welcome back!</h1>
          <div className="w-full flex-1 ">
            <div className="flex flex-col items-center">
              <button
                className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5"
                onClick={() => signIn("google")}
              >
                <div className="bg-white p-1 rounded-full ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                </div>
                <span className=" pl-5 pr-5">Sign Up with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
