import React from 'react';
import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import Cta from "@/app/components/cta";

function App(props) {
    return (
        <div>
            <Navbar />
            <Hero />
            <Cta />
        </div>
    );
}

export default App;