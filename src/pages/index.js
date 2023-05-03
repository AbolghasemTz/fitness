import BestFitness from "@/components/Home/BestFitness";
import Slider from "@/components/Home/Slider";
import Choice from "@/components/Home/Choice";
import Plan from "@/components/Home/Plan";

export default function Home() {
  return (
    <main>
      <Slider />
      <BestFitness />
      <Choice />
      <Plan />
    </main>
  );
}
