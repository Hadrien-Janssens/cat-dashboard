import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();
  if (userId) {
    redirect("/dashboard");
  }
  return (
    <div className=" flex flex-col justify-center items-center h-screen">
      <h2 className="text-xl my-10 text-center">
        Pour accéder à votre dashboard , il faut être connecté
      </h2>
      <ul className="flex gap-3 w-full justify-center">
        <Link href={"/signin"}>
          <Button>Se connecter</Button>
        </Link>
        <Link href={"/signup"}>
          <Button>S'inscrire </Button>
        </Link>
      </ul>
    </div>
  );
}
