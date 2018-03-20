import React from 'react';
import clickIcon from '../images/click-icon.svg';

const BitLink = (props) => {
    const {hash, url, long_url} = props.details.shorten;
    const {global_clicks} = props.details.clicks[0];
    const {title} = props.details.info;
    
    return (
      <div className='bit-link'>
        <div className="title-lurl">
          <a target='_blank' className='title' href={long_url}>{title ? title : long_url}</a>
          <a target='_blank' className='long-url' href={long_url}>{long_url}</a>
        </div>
        <div className='url-click'>
          <a target='_blank' value={url} className='short-url'>bit.ly/<span>{hash}</span></a>
          <div className="global-div">
            <p className='global-click'>{global_clicks}</p>
            <img src={clickIcon} alt="bargraph icon"/>
          </div>
        </div>
      </div>
    )
}

export default BitLink;