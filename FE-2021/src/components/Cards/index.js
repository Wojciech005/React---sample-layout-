import React from 'react';
import './style.css';

const Cards = (props) => {
  const cards = props.cards
  const listCards = cards.map(card => {
    return(
      <div id="cards__section" className="cards__section" key={card.title} >  
        <div className="card__box">
        <img src={card.image} alt="images" />
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        <a href={card.anchorUrl}>{card.anchorText}</a>
        </div>
       </div>
    )
  })
    return(
      <> 
      <h2 className="cards__title" >Lorem ipsum dolor sit amet</h2>
      <div className="wrap__cards">
        <div className='box__card' >{props.active ? listCards : null }  </div>
      </div>
      </>
      
    )

  }


export default Cards;

