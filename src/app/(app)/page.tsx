import { About } from "./_home/About";
import { Approach } from "./_home/Approach";
import { Community } from "./_home/Community";
import { Contact } from "./_home/Contact";
import { Hero } from "./_home/Hero";
import { Partnership } from "./_home/Partnership";
import { Services } from "./_home/Services";
import { Testimonial } from "./_home/Testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <Approach />
      <Services />
      <Partnership />
      <Testimonial />
      <About />
      <Community />
      <Contact />
    </main>
  );
}
