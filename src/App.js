import React from "react"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import ScheduleMeetBuilder from "./pages/scheduleMeet/ScheduleMeetBuilder/ScheduleMeetBuilder";
import BaseHeader from "./components/baseHeader/BaseHeader";
import "./App.css"

import CustomCalendar from "./components/customCalendar/CustomCalendar";
import HourList from "./components/hoursList/HoursList";

import StandardCase from "./pages/standardCase/StandardCase";
import DefinerAvailableTime from "./pages/scheduleMeet/DefinerAvailableTime/DefinerAvailableTime";
import SelectDateToMeet from "./pages/scheduleMeet/SelectDateToMeet/SelectDateToMeet";

const App = () =>{
  //return(<div><CalendarComponent/></div>)
  return(<Router>
    <BaseHeader/>
    {/*<div>*/}
    {/*  <Link to="/">/==standard case==/</Link>*/}
    {/*  <Link to="/schedule/meet">/==schedule meet==/</Link>*/}
    {/*</div>*/}
    <Routes>
      <Route exact path="/" element ={<StandardCase/>}/>
      <Route path="/schedule/meet" element ={<ScheduleMeetBuilder/>}/>
      <Route path="/schedule/meet/teacher" element ={<DefinerAvailableTime/>}/>
      <Route path="/schedule/meet/student" element ={<SelectDateToMeet/>}/>

    </Routes>
    </Router>)
}


export default App;