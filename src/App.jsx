import { About } from "./components/About";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Testimonials } from "./components/Testimonials";

export const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Projects />
      <Testimonials />
    </div>
  );
};
