import { SignUp } from "@clerk/nextjs";

const pageSignUp = () => {
  return (
    <section className="w-full my-10 flex justify-center">
      <SignUp />
    </section>
  );
};

export default pageSignUp;
