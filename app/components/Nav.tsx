import { currentUser } from "@clerk/nextjs/server";
import { ModeToggle } from "./ModeToggle";
import { SignOutButton } from "./SignOutButton";

const Nav = async () => {
  const user = await currentUser();
  return (
    <div className="flex justify-between items-center p-5 border border-b-slate-400  ">
      {user ? <h2>Bonjour {user.firstName} 👋</h2> : <h2>Pas connecté</h2>}
      <div className="flex gap-2">
        <ModeToggle />
        <SignOutButton />
      </div>
    </div>
  );
};

export default Nav;
