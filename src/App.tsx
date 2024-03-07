import HeroSection from "./components/heroSection";
import Header from "./components/ui/header";

function App() {
  return (
    <div className="flex justify-center flex-col gap-16">
      <Header></Header>
      <HeroSection></HeroSection>
    </div>
  );
}

export default App;
