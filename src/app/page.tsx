import { Benefits } from "@/components/benefits";
import { Experiences } from "@/components/experiences";
import { Jumbotron } from "@/components/jumbotron";
import { Materials } from "@/components/materials";
import { Products } from "@/components/products";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <main>
      <Jumbotron />
      <Benefits />
      <Products />
      <Experiences />
      <Materials />
      <Testimonials />
    </main>
  );
}
