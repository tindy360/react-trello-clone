import React from 'react'
import Card from './Card'

const List = ({title, cards, addCard}) => {
  console.log('Props',addCard);
  return(
    <div>
       <p>the title of the card is {title}</p>
          {cards.map((card, index) => (
            <Card key={index} text={card} />
          ))}
          <form onSubmit={(e) => {
            e.preventDefault();

            const cardInput = e.target.cardInput.value;
            addCard(cardInput);
            e.target.cardInput.value = '';

            addCard(cardInput)

          }}>

             <input type="text" name="cardInput"/>
              <button>submit</button>
         </form>

        </div>


  )
}

export default List;
