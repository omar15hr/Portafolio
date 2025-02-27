import { About } from "./components/About";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import Navbar from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Stack } from "./components/Stack";

function App() {
  return (
    <div className="relative max-w-5xl mx-auto">
      <Navbar />
      <Header />
      <Stack />
      <Projects />
      <Experience />
      <Education />
      <About />
    </div>
  );
}

export default App;
