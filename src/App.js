import "./App.css";
import { Routes, Route } from "react-router-dom";
import EntrancePage from "./screens/EntrancePage/EntrancePage";
import Home from "./screens/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<EntrancePage />} />
        <Route path="/home" element={<Home />} />;
      </Routes>
    </>
  );
}

export default App;
