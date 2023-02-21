import "./App.scss";
import {
  Header,
  WhatGPT3,
  Features,
  Possibilities,
  Blog,
  Footer,
} from "./containers";
import { Brand, Navbar, GetStarted } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradinet__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibilities />
      <GetStarted />
      <Blog />
    </div>
  );
}

export default App;
