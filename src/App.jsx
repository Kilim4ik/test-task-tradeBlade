import React from "react";

import "./App.css";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Numbers } from "./components/numbers/Numbers";
import { PastTransactions } from "./components/pastTransactions/PastTransictions";
import { AboutUs } from "./components/aboutUs/AboutUs";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Numbers />
        <PastTransactions />
        <AboutUs />
      </main>
    </>
  );
}

export default App;
