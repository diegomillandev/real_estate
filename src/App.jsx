import { ToastContainer } from "react-toastify";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
};
