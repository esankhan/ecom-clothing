import React from 'react';
import {withRouter} from 'react-router-dom'
import './menu-item.scss'

 const MenuItem=({title,imageUrl,size,linkUrl,match,history})=> {
    return (
        <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)} >
            <div className="backgound-image" style={{backgroundImage:`url(${imageUrl})`}}/>
          <div className='content'>
            <div className='title'>{title.toUpperCase()}</div>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
    )
}
export default withRouter(MenuItem);