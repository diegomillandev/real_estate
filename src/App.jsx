import { About } from "./components/About";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";

export const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Projects />
    </div>
  );
};
