import { useState } from "react";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";

function App() {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <Hero />
            </main>
        </div>
    );
}

export default App;
