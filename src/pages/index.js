import BestFitness from "@/components/Home/BestFitness";
import Slider from "@/components/Home/Slider";
import Choice from "@/components/Home/Choice";
import Plan from "@/components/Home/Plan";
import Layout from "@/components/Layout";



export default function Home(props) {
  return (
    <main>
     
      <Layout>
        <Slider />
        <BestFitness />
        <Choice />
        <Plan />
      </Layout>
    
    </main>
  );
}
