import React from "react";
import './playerrank.css'

function Playerranks(props)
{
    
    return(
        
        <div className="prbox">
            {/* <div>
                <img src={props.image} alt=""/>
             </div>*/}
             
                <ul className="rul">
                    <li><p className="pli">{props.rank}</p></li>
                    <li><p className="plin">{props.pname}</p></li>
                    <li><p className="plit">{props.tname}</p></li>
                    <li><p className="plip">{props.point}</p></li>
                </ul>
        </div>
        
    )
}
export default Playerranks;