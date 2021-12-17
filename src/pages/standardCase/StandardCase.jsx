import React from "react";
import CustomCalendar from "../../components/customCalendar/CustomCalendar";
import HourList from "../../components/hoursList/HoursList";

import "./StandardCase.css"

const StandardCase = () => {
    return (
        <div className="standard-case-body">
            <CustomCalendar/>
            <HourList/>
        </div>
    )
}

export default StandardCase