"use client";
import { useClerk } from "@clerk/nextjs";
import { IoIosLogOut } from "react-icons/io";
import { Button } from "@/components/ui/button";

export const SignOutButton = () => {
  const { signOut } = useClerk();

  return (
    <Button onClick={() => signOut({ redirectUrl: "/" })}>
      <IoIosLogOut />
    </Button>
  );
};
