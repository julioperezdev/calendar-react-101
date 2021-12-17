import React from "react";
import { Link } from 'react-router-dom'
const ScheduleMeetBuilder = () => {
    return (<div>
        <Link to="/schedule/meet/teacher">Teacher Dashboard</Link>
        <Link to="/schedule/meet/student">Student Dashboard</Link>
    </div>)
}

export default  ScheduleMeetBuilder