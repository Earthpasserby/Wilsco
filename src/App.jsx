import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import Service from "../pages/Service";

import "./App.css";
import VisaService from "../pages/VisaService";
import Ticket from "../pages/Ticket";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter basename={"/"}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/VisaService" element={<VisaService />} />
          <Route path="/Ticket" element={<Ticket />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
