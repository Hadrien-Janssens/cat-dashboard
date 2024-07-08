import { Card } from "@/components/ui/card";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function page() {
  const { userId } = auth();
  if (!userId) {
    redirect("/");
  }

  return (
    <div className="m-5">
      <h2 className="text-xl mb-5">Mes chats</h2>
      <ul className="flex flex-col gap-3">
        <Link href={"/rose"}>
          <Card className="p-2">Rose </Card>
        </Link>
        <Link href={"/blue"}>
          <Card className="p-2">Blue </Card>
        </Link>
      </ul>
    </div>
  );
}
