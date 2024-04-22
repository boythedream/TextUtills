import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";



function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("The Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("The White mode enabled", "Success");
    }
  };

  return (
    <>
    <Navbar title="TextUtils"/>
    {<TextFrom  mode = {mode} toggleMode = {toggleMode} heading = "Enter the Text to analyze below" alert = {alert} showAlert = {showAlert}/>} 
    {<About />}

       
    </>
  );
}

export default App;
