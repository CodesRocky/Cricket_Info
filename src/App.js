import Match from "./components/Match";
import Navbar from "./components/Navbar";
import News from "./news/News";
import Playerrank from "./Playerrank/Playerrank";
import Serieslogic from "./series/Serieslogic";
import Teamrank from "./teamrank/Teamrank";
import Upcoming from "./components/Upcoming";
import {Routes,Route} from "react-router-dom";
// import Sidebar from "./components/Sidebar";
import Javascript from "./lngcomponent/Javascript";
import Python from "./lngcomponent/Python";
import Angular from "./lngcomponent/Angular";
import C from "./lngcomponent/C";
import Vue from "./lngcomponent/Vue";
import Node from "./lngcomponent/Node";
import './components/home.scss'
import Cinfo from "./components/Cinfo";
import Playerball from "./Playerrank/Playerball";
import Playerall from "./Playerrank/Playerall";
import Footer from "./footer/Footer";
import Indvsaus from "./series/Indvsaus";
import Indvspak from "./series/Indvspak";
import About from './footer/About';
import Location from './footer/Location';
import Term from './footer/Term';
import Careers from './footer/Careers';




function App() {
   
  return (
    <div >
      <Navbar />
      {/* <Sidebar/> */}
      <div className='ple'>
        
       <Routes> 
        <Route excet path="home" element={<Cinfo />} />
        <Route excet path="home" element={<Cinfo />} />
        <Route excet path="match" element={<Match />} />
        <Route excet path="quotes" element={<News />} />
        <Route excet path="playerrank/batsman" element={<Playerrank />} />
        <Route excet path="playerrank/bowler" element={<Playerball />} />
        <Route excet path="playerrank/allrounder" element={<Playerall />} />
        <Route excet path="series" element={<Serieslogic />} />
        <Route excet path="series/indvsaus" element={<Indvsaus />} />
        <Route excet path="series/indvspak" element={<Indvspak />} />
        <Route excet path="teamrank" element={<Teamrank />} />
        <Route excet path="upcoming" element={<Upcoming />} />
        <Route excet path="about" element={<About />} />
        <Route excet path="careers" element={<Careers />} />
        <Route excet path="term" element={<Term />} />
        <Route excet path="location" element={<Location />} />
        <Route excet path="js" element={<Javascript />} />
        <Route excet path="python" element={<Python />} />
        <Route excet path="angular" element={<Angular />} />
        <Route excet path="node" element={<Node />} />
        <Route excet path="c" element={<C />} />
        <Route excet path="vue" element={<Vue />} />
      </Routes>
    </div>
    <div>
      <Footer/>
    </div>
  </div>
  );
}

export default App;
