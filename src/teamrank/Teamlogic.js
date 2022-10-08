import React from "react";
import './teamrank.css'

function Teamlogic(props) {
    
      
    return (
        <div className="tbox">
            <ul className="trul">
                <li className="trank">{props.rank}</li>
                <li className="tname">{props.name}</li>
                <li className="tpoint">{props.point}</li>
            </ul>
        </div>
    )
}
export default Teamlogic;