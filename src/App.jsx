import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import Service from "../pages/Service";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter basename={"/"}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Service" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
