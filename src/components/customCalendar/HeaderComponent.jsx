import React from "react"

import {currentMonthName, currentYearNumber, previousMonth, nextMonth, thisMonth} from "./CustomCalendarService"

import "./CustomCalendar.css"

const HeaderComponent = ({time, setTime}) => {
    return (
        <div className="custom-calendar-header">
                <div
                onClick={() => !thisMonth(time) && setTime(previousMonth(time))}>
                    {!thisMonth(time) ? String.fromCharCode(171) : null}</div>
                <div>
                    {currentMonthName(time)} {currentYearNumber(time)}
                </div>
                <div
                onClick={() => setTime(nextMonth(time))}>
                    {String.fromCharCode(187)}
                </div>
        </div>
    )
}

export default HeaderComponent
