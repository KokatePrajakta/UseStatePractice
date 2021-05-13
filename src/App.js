import "./styles.css";
import { Name } from "./Name";
import { useState } from "react";

export default function App() {
  ///state--->initial value jo useSate()///(varibale)
  ///setState====> function

  // const [state, setState] = useState(1);
  // console.log("1st");

  // function incrementCount() {
  //   setState((aloo) => aloo + 1);

  // }

  const [aloo, setAloo] = useState("prajakta");

  console.log("1st......");

  function changeAloo() {
    setAloo("kokate");

    console.log("2nd........");
  }

  ///Q1.button -> pratim
  /////button Click ----> prajakta

  function HomePage() {
    return (
      <>
        <h1>I am in a home page</h1>
      </>
    );
  }

  function AboutPage() {
    return (
      <>
        <h1>I am in ABOUT Page</h1>
      </>
    );
  }

  const [route, setRoute] = useState("homepage");

  return (
    <div className="App">
      <button onClick={() => setRoute("homepage")}>HomePage</button>

      <button onClick={() => setRoute("aboutPage")}>AboutPage</button>

      {route === "homepage" && <HomePage />}

      {route === "aboutPage" && <AboutPage />}
    </div>
  );
}
