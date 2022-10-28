import './App.css';
import {useState, useEffect} from "react";
import axios, { Axios } from "axios";

const cardImages = [
  {"src": "/img/baby-yoda.webp"},
  {"src": "/img/among-us.webp"},
  {"src": "/img/cupcake-cat.jpg"},
  {"src": "/img/donut-space.jpg"},
  {"src": "/img/narwhal-gif.gif"},
  {"src": "/img/nyan-cat-space.png"},
  {"src": "/img/nyan-pikachu.jpg"},
  {"src": "/img/pizza-gif.gif"},
  {"src": "/img/snorlax-space.png"},
  {"src": "/img/space-cat-burger.jpg"},
  {"src": "/img/space-cat-pizza-taco.jpg"},
  {"src": "/img/spacecat-gif.gif"},
]

function App() {
  // STATES
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages] // creates double cards
    .sort(() => Math.random() - 0.5)
    .map((card) =>({...card, id: Math.random()})) // make a new array for sorted cards & create ID for cards

    setCards(shuffledCards)
    setTurns(0)
  }

  console.log(cards,turns)

  return (
    <div>
    <h1>Galaxy Matching Game</h1>
    <button onClick={shuffleCards}> New Game</button>
    </div>
  );
}

export default App;
