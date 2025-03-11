// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
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
import { Contactus } from "../pages/Contactus";
import { UK } from "../pages/UK";
import { US } from "../pages/US";
import { Can } from "../pages/Can";
import { Schengen } from "../pages/Schengen";
import { Egypt } from "../pages/Egypt";
import { East } from "../pages/East";
import { South } from "../pages/South";
import { Aus } from "../pages/Aus";
import { Irs } from "../pages/Irs";
import { Sey } from "../pages/Sey";
import { Turkey } from "../pages/Turkey";
import { Qatar } from "../pages/Qatar";
import { Brazil } from "../pages/Brazil";
import { Kong } from "../pages/Kong";
import { Thai } from "../pages/Thai";
import { BlogDoha } from "../pages/BlogDoha";
import { BlogTrips } from "../pages/BlogTrips";
import { BlogTour } from "../pages/BlogTour";
import { BlogFam } from "../pages/BlogFam";
import { BlogBirth } from "../pages/BlogBirth";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter basename={"/"}>
        <ScrollToTop>
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
            <Route path="/Faqs" element={<Faqs />} />
            <Route path="/Uk" element={<UK />} />
            <Route path="/US" element={<US />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/Can" element={<Can />} />
            <Route path="/Schengen" element={<Schengen />} />
            <Route path="/Egypt" element={<Egypt />} />
            <Route path="/East" element={<East />} />
            <Route path="/South" element={<South />} />
            <Route path="/Aus" element={<Aus />} />
            <Route path="/Irs" element={<Irs />} />
            <Route path="/Sey" element={<Sey />} />
            <Route path="/Turkey" element={<Turkey />} />
            <Route path="/Qatar" element={<Qatar />} />
            <Route path="/Brazil" element={<Brazil />} />
            <Route path="/Kong" element={<Kong />} />
            <Route path="/Thai" element={<Thai />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/BlogDet" element={<BlogDet />} />
            <Route path="/BlogDoha" element={<BlogDoha />} />
            <Route path="/BlogTrips" element={<BlogTrips />} />
            <Route path="/BlogTour" element={<BlogTour />} />
            <Route path="/BlogFam" element={<BlogFam />} />
            <Route path="/BlogBirth" element={<BlogBirth />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
