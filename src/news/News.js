import React from "react";
import './news.css'
import Newslogic from "./Newslogic";
import Newsdata from "./Newsdata"
import './news.css'

function News()
{
    function shownews(Newsdata)
    {
    return(
            <Newslogic
            key={Newsdata.id}
            category={Newsdata.category}
            content={Newsdata.content}
            author={Newsdata.author}
            />
    )
    }

    return(
        <div className="dnws">
            {Newsdata.map(shownews)}
        </div>
        
    )
}

export default News;