import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";
// import Firts from "./components/Firts";
// import Second from "./components/Second";
// import Third from "./components/Third";
// import Fouth from "./components/Fouth";
// import Fifth from "./components/Fifth";
import Sixth from "./components/Sixth";
export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Firts />{" "} */}
      {/* <Second /> */}
      {/* <Third /> */}
      {/* <Fouth /> */}
      {/* <Fifth /> */}
      <Sixth />
    </>
  );
}
