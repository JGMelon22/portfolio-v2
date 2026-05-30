import Box from "@mui/material/Box";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Box component="main" id="top">
        <Hero />
        <About />
        <TechStack />
        <Work />
        <Contact />
      </Box>
      <Footer />
    </>
  );
}
