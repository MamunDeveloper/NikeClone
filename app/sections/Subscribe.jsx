import Button from "../components/Button";

function Subscribe() {
  return (
    <section className=" w-full max-container mt-20 mb-20 px-8 md:px-12 flex flex-col gap-6 justify-center items-center">
      <h2 className="font-palanquin capitalize text-4xl font-bold">
        Sign Up for <span className="text-coral-red"> Updates </span>&
        Newsletter
      </h2>
      <div className=" w-full border-2 border-coral-red py-5 px-10 flex items-center justify-between rounded-full max-sm:flex-col max-sm:border-none">
        <input type="text" placeholder="Subscribe@nike.com" className=" w-[60%] outline-none info-text max-sm:border-2 max-sm:border-coral-red max-sm:rounded-full max-sm:w-full max-sm:p-5 max-sm:mb-3" />
        <Button label={"Sign Up"} />
      </div>
    </section>
  );
}

export default Subscribe;
