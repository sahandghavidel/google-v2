import { useSession, signIn, signOut } from "next-auth/react";

export default function Avator({ className }) {
  const { data: session } = useSession();
  if (session) {
    return (
      <div
        onClick={() => signOut()}
        className="hover:bg-gray-200 cursor-pointer rounded-full h-12 w-12 flex items-center justify-center"
      >
        <img src={session.user.image} className="h-10 w-10  rounded-full " />
      </div>
    );
  }
  return (
    <>
      <button
        className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}
