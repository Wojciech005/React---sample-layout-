import React from 'react';
import './style.css';

const Stage = ({data}) => {
  // console.log(data)
  return(
    <div className="stage">
      <img className="stage__img" src={data.image} alt=""/>
      <h1>{data.siteTitle}</h1>
      <h2>{data.siteSubTitle}</h2>
    </div>
  )
}

export default Stage;
