import "./App.css";
import Hero from "./hero/Hero";
import Marketing from "./marketing/Marketing";
import Listing from "./listing/Listing";
import NewsVideo from "./media/NewsVideo";
import NewsFeatured from "./media/NewsFeatured";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Marketing />
      <Listing />
      <NewsVideo />
      <NewsFeatured />
      <Footer />
    </div>
  );
}

export default App;
