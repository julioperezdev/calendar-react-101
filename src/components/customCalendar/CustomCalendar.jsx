import React ,{useState, useEffect}from "react"
import moment from "moment"

import HeaderComponent from "./HeaderComponent"

import buildCalendar from "./BuildCalendar"
import {dayStyles, beforeToday} from "./CustomCalendarService"

import "./CustomCalendar.css"



const CustomCalendar = () =>{

    const [calendar, setCalendar] = useState([])
    const [time, setTime] = useState(moment())

    useEffect(() =>{
        //defineAfterDaysOfMonth(time)
        setCalendar(buildCalendar(time))
        //defineAfterDaysOfMonth(time)
    },[time ])
    
    return (
        <div className="custom-calendar">
            
            <HeaderComponent
            time={time}
            setTime={setTime}/>

            <div className="custom-calendar-body">
            <div 
            className="custom-calendar-names">
                {["s", "m", "t", "w", "t", "f", "s"].map(dayName => <div>{dayName}</div>)}
            </div>
            {calendar.map(week =>
            <div 
            className="custom-calendar-weeks-body">
                {week.map( day => 
                <div 
                onClick={() => !beforeToday(day) && setTime(day)}
                className="custom-calendar-days-body">
                    <div
                    className={dayStyles(time, day)}>
                        {day.format("D").toString()}</div>
                </div>)
                }
            </div>)}
        </div>
        </div>
    )
}


export default CustomCalendar
