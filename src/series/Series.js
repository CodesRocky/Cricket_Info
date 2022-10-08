import React from "react";
import { Link } from "react-router-dom";
import './series.css'

function Series(props)
{
    //take date from data and show upcoming series , on going and end series through compair with starting date and ending date
    //get real time date from function and compair it into seriesdata date and show matchs starting date to ending date 
    return(
        <div className="series">
                    <Link to={props.to}><img className="imgs" src={props.img} alt='news_info'></img></Link>
                    <div className="dtl">
                        <h4>{props.title}</h4>
                        <p>{props.date}</p>
                    </div>
                
        </div>      
    )
}

export default Series;