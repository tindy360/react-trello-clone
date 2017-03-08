import React, {Component} from 'react';
import './App.css';
import Board from './components/Board'

class App extends Component {
    constructor() {
        super()

        this.state ={
            boardTitles:[
                {
                    text: 'test title',
                    cards: ['card1', 'card2', 'card3']
                }, {
                    text: 'test title2',
                    cards: ['card1', 'card2', 'card3']
                }, {
                    text: 'test title3',
                    cards: ['card1', 'card2', 'card3']
                }
            ]

        }
        //bind this here
        this.addCard =this.addCard.bind(this)
    }

    addCard(text) {
        console.log('input', text)
    }

    render() {
        return (

            <div className="App">
                <Board data={this.state.boardTitles} addCard={this.addCard}/>
            </div>
        );
    }
}

export default App;
