import { SignIn } from "@clerk/nextjs";

const pageSignIn = () => {
  return (
    <section className="w-full flex mt-10 justify-center">
      <SignIn />
    </section>
  );
};

export default pageSignIn;
