import React from 'react'
import './news.css'

function Newslogic(props) {
    return (
        
            <div className='newsbox'>
                <ul>
                    <li className='newsct'>{props.category}</li>
                    <li className='newscn'>{props.content}</li>
                    <li className='newsau'>{props.author}</li>
                </ul>
            </div>
            
    )
}
export default Newslogic;