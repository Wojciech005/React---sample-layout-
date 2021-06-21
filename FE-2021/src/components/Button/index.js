import React from 'react';
import data from '../../data.json';
import './style.css';

const Button = (props) => {

const showCards = data.page.components[2].buttonLabelShow;
const hideCards = data.page.components[2].buttonLabelHide;
  
  return (
     <div>
      <a className="btn" href="/" onClick={props.click} >{props.active ? hideCards : showCards}</a>
    </div> 
  )
}

export default Button;
