import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import Service from "../pages/Service";

import "./App.css";
import Layout from "./Layout";
import About from "../pages/About";
import VisaService from "../pages/VisaService";
import Ticket from "../pages/Ticket";
import HolidayPack from "../pages/HolidayPack";
import BirthService from "../pages/BirthService";
import RelocateServ from "../pages/RelocateServ";
import { Blog } from "../pages/Blog";
import { BlogDet } from "../pages/BlogDet";
import { Faqs } from "../pages/Faqs";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter basename={"/"}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/VisaService" element={<VisaService />} />
          <Route path="/Ticket" element={<Ticket />} />
          <Route path="/HolidayPack" element={<HolidayPack />} />
          <Route path="/BirthService" element={<BirthService />} />
          <Route path="/RelocateServ" element={<RelocateServ />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/BlogDet" element={<BlogDet />} />
          <Route path="/Faqs" element={<Faqs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
