import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About.tsx";

function App() {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <Hero />
                <About />
            </main>
        </div>
    );
}

export default App;
