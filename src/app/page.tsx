import Navbar from "./components/navbar";
import Splashbox from "./components/splashbox";
import About from "./components/about";
import Resume from "./components/resume";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar></Navbar>
      <div className="snap-y snap-always snap-mandatory scroll-smooth overflow-y-scroll h-screen">
        <section id="home" className="snap-center">
          <Splashbox></Splashbox>
        </section>
        <section id="about" className="snap-center">
          <About></About>
        </section>
        <section id="resume" className="snap-center">
          <Resume></Resume>
        </section>
      </div>
    </main>
  );
}
