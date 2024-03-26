import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

function Services() {
  return (
    <section
      id="services"
      className=" w-full max-container flex-wrap gap-9 px-4 md:px-12 mt-20 flex justify-center items-center"
    >
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
}

export default Services;
