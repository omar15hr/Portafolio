import { Header } from "./components/Header";
import Navbar from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Stack } from "./components/Stack";

function App() {

  return (
    <div className="box-container">
      <Navbar />
      <Header />
      <Stack />
      <Projects />
    </div>
  )
}

export default App
