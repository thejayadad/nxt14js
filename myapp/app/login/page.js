'use client'
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const { status } = useSession();

    const router = useRouter();
  
    if (status === "loading") {
      return <div>Loading...</div>;
    }
  
    if (status === "authenticated") {
      router.push("/")
    }
    
  return (
    <div>
        <h2 className="text-center">LoginPage</h2>
        <div className="text-center" onClick={() => signIn()}>
          Sign in with Google
        </div>

    </div>
  )
}

export default LoginPage