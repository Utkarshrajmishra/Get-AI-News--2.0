import "./App.css";
import Banner from "./components/Banner";
import NavSection from "./components/NavSection";
import HeroSection from "./components/HeroSection";
import NewsFeed from "./components/NewsFeed";


function App() {
  return (
    <>
     <Banner/>
     <NavSection/>
      <HeroSection />
      <NewsFeed />
    </>
  );
}

export default App;
