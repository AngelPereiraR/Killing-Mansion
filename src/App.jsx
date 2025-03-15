import "./App.css";
import Header from "./components/Header";
import GameDescription from "./components/GameDescription";
import Trailer from "./components/Trailer";
import Carousel from "./components/Carousel";
import CharacterSection from "./components/CharacterSection";
import ScenarioSection from "./components/ScenarioSection";
import Footer from "./components/Footer";
import { useRef } from "react";

function App() {
  const audioRef = useRef(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <GameDescription audioRef={audioRef} />
        <Trailer audioRef={audioRef} />
        <Carousel />

        {/* Contenedor para CharacterSection y ScenarioSection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CharacterSection />
          <ScenarioSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
