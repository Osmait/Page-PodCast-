import { Beneficion } from "./components/Beneficion";
import { CreaTuPodcast } from "./components/CreaTuPodcast";
import { Estadisticas } from "./components/Estadisticas";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Planes } from "./components/Planes";
import { Testimoniales } from "./components/Testimoniales";

function App() {
  return (
    <>
    <Header/>
    <CreaTuPodcast/>
    <Beneficion/>
    <Estadisticas/>
    <Planes/>
    <Testimoniales/>
    <Footer/>
    </>
  );
}

export default App;
