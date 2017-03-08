import React from 'react'
import List from './List'

const Board = ({data, addCard}) => {
  console.log('props', addCard)
  return(
    <div>
      {data.map((obj, index) => (
        <List title={obj.text} key={index}
         cards={obj.cards}
       addCard={addCard} />))}
  </div>
)}

export default Board

//Board should contain a title prop that has the tilte of the board
//a list prop that contains an array of the boards lists
