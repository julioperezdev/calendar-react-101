import React from "react";
import ReactTooltip from 'react-tooltip';

import {allHours, allHoursObject} from "./HoursMock"

import {isAvailableHour, returnToolTip, decideStyleToHoursListEach} from "./HoursService.js"

import "./HourList.css"


const HourList = () =>{
    return(
        <div className="hours-list-body">
            {allHoursObject.map(hour => (
                <>
                    <div 
                    
                    data-tip="reserved"
                    data-tip-disable={hour.availableHour}
                    onClick={() => isAvailableHour(hour.availableHour) }
                    className={decideStyleToHoursListEach(hour.availableHour)}>
                    <p className="hours-list-each-hour">{hour.hour}</p>
                    <p className="hours-list-each-ampm">{hour.ampm}</p>
                    {hour.availableHour?null: <ReactTooltip/>}
                    </div>
                </>
            ))}
        </div>
    )
}

export default HourList;