import React from 'react'
import Series from './Series';
import './series.css'
import seriesdata from './seriesdata';

function serieslogic() {

    function showseries(seriesdata)
    {
        console.log(seriesdata.date)
        return(
            <Series 
            key={seriesdata.id}
            to={seriesdata.to}
            img={seriesdata.img}
            title={seriesdata.title}
            date={seriesdata.date}
            />
        )
    }
    return (
        <div className='prbox'>
            <h3>This is Series Information</h3>
        <div className='srbox'>
            
            {seriesdata.map(showseries)}

        </div>
        </div>
    )
}
export default serieslogic;