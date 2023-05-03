import BestFitness from "@/components/Home/BestFitness";
import Slider from "@/components/Home/Slider";
import Choice from "@/components/Home/Choice";
import Plan from "@/components/Home/Plan";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home","header"])),
    },
  };
}

export default function Home(props) {

  return (
    <main>
      <Header/>
      <Slider />
      <BestFitness  />
      <Choice />
      <Plan />
      <Footer />
    </main>
  );
}
