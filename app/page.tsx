import Link from "next/link";

export default function Home() {
  return (
    <div className="m-5">
      <h2 className="text-xl mb-5">Mes chats</h2>
      <ul className="flex gap-3">
        <Link href={"/rose"}>Rose</Link>
        <Link href={"/blue"}>Blue</Link>
      </ul>
    </div>
  );
}
