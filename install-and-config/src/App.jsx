import { useState } from "react";
import "./App.css";
import Header from "./components/header";

function App() {
  let [angka, setAngka] = useState(0);

  function plus() {
    if (angka < 11) {
      angka++;
      setAngka(angka);
    }
    if (angka == 11) {
      setAngka("done");
    }
  }

  function minus() {
    if (angka == 0) {
      setAngka("done");
    }
    if (angka > 0) {
      angka--;
      setAngka(angka);
    }
  }

  function reset() {
    angka = 0;
    setAngka(angka);
  }

  return (
    <>
      <Header name="Night" />
      <div className="box">
        <button onClick={minus} disabled={angka == "done"}>
          -
        </button>
        {angka}
        <button onClick={plus} disabled={angka == "done"}>
          +
        </button>
      </div>
      <div>
        <button className="reset" onClick={reset} disabled={angka !== "done"}>
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
