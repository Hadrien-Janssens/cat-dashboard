import { ModeToggle } from "./ModeToggle";

const Nav = () => {
  return (
    <div className="flex justify-between p-5 border border-b-slate-50">
      <h1>Dashboard</h1>
      <ModeToggle />
    </div>
  );
};

export default Nav;
