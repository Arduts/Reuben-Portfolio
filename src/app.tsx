import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Banner from "./components/banner";
import Footer from "./components/footer";
import image from './assets/rdpic-removebg-preview.png';


// App
const App = () => {
  const [hide, setHide] = useState(true);

  return (
    <BrowserRouter>
      <Banner hide={hide} setHide={setHide} />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar hide={hide} />
          <Hero />
        </div>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '-25rem' }}>
   <img src={image} alt="About image" style={{ maxWidth: '100%', height: 'auto', marginLeft: '20px' }} />

  <About />
</div>

        <Experience />
        <Tech />
        <Works />


        {/* Contact */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
