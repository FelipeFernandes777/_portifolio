import About from "../templates/About";
import Projects from "../templates/Projects";

export default function HomePage() {
  return (
    <div className="home_page_container">
      <About />
      <Projects />
    </div>
  );
}
