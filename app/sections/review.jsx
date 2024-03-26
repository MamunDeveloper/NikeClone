import { reviews } from "../constants";
import Slider from "../components/slider/slider";

function Review() {
  return (
    <section className="w-full max-container px-8 md:px-12 mt-20 flex flex-col gap-5 bg-primary py-10">
      <div className=" flex flex-col flex-1 items-center text-center">
        <h2 className="font-palanquin capitalize text-4xl  font-bold">
          What Our<span className="text-coral-red"> Customers </span>Say?
        </h2>
        <p className="mt-6 xl:max-w-lg info-text">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="mt-10 relative flex overflow-hidden items-center gap-5">
        <Slider data={reviews} />
      </div>
    </section>
  );
}

export default Review;
