import React from "react";
import { Link } from 'react-router-dom'

const BaseHeader = () => {
    return (<div>
        <Link to="/">standard case</Link>
        <Link to="/schedule/meet">schedule meet</Link>

    </div>)
}

export default BaseHeader