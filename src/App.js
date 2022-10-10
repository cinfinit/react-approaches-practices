import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [covid19, setCovid19] = useState(0);
  useEffect(() => {
    fetch("https://api.covid19api.com/summary", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setCovid19(result.Global.NewConfirmed);
        // console.log(result.Global);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>New COVID-19 Confirmed Cases in World: {covid19}</p>
      </header>
    </div>
  );
}

export default App;
