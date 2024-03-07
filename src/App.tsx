import HeroSection from "./components/heroSection";
import Booking from "./components/ui/booking";
import Header from "./components/ui/header";

function App() {
  return (
    <div className="flex justify-center flex-col gap-32">
      <Header></Header>
      <HeroSection></HeroSection>
      <Booking></Booking>
    </div>
  );
}

export default App;
