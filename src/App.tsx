import HeroSection from "./heroSection";
import Booking from "./booking";
import Header from "./header";

function App() {
  return (
    <>
      <div className="grid grid-cols-1 gap-40">
        <Header></Header>
        <HeroSection></HeroSection>
        <Booking></Booking>
      </div>
    </>
  );
}

export default App;
