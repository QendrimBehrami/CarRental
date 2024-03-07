import HeroSection from "./heroSection";
import Booking from "./booking";
import Header from "./header";

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
