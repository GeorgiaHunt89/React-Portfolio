import React from "react";
import Header from "../src/components/Header";
import Project from "../src/components/Project";
import Navigation from "../src/components/Navigation";
import Footer from "../src/components/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
