import React from "react"
import "./App.css"

import CustomCalendar from "./components/customCalendar/CustomCalendar";
import HourList from "./components/hoursList/HoursList";

const App = () =>{
  //return(<div><CalendarComponent/></div>)
  return(<div className="app-body">
    <CustomCalendar/>
    <HourList/>
    </div>)
}


export default App;