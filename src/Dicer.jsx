import React from 'react';
import { useState } from 'react';
import "./App.css";
import dice1 from './assets/dice-1.svg';
import dice2 from './assets/dice-2.svg';
import dice3 from './assets/dice-3.svg';
import dice4 from './assets/dice-4.svg';
import dice5 from './assets/dice-5.svg';
import dice6 from './assets/dice-6.svg';

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

function Dicer() {
  let [winner, setWinner] = useState("Start Playing!");
  let [player1Dice, setPlayer1Dice] = useState(diceImages[0]);
  let [player2Dice, setPlayer2Dice] = useState(diceImages[0]);

  function updateMove() {
    let player1Move = Math.floor(Math.random() * 6);
    let player2Move = Math.floor(Math.random() * 6);
    setPlayer1Dice(diceImages[player1Move]);
    setPlayer2Dice(diceImages[player2Move]);
    if (player1Move > player2Move) {
      setWinner("Player 1 wins!");
    } else if (player1Move < player2Move) {
      setWinner("Player 2 wins!");
    } else {
      setWinner("Draw!");
    }
  }

  return (
    <div className="bg-black w-4/5 md:3-/5 lg:w-2/5 text-red-400 flex flex-col justify-center items-center gap-6 md:gap-14 p-10 md:p-14 rounded-2xl">
      <h1 className='text-3xl font-semibold text-center'>{winner}</h1>
      <div className="dices w-full flex flex-col items-center md:flex-row justify-evenly gap-12">
        <div className="flex flex-col gap-4 w-4/5 md:w-full items-center">
          <h2 className='text-2xl'>Player 1</h2>
          <img className='hover:rotate-180 duration-300' src={player1Dice} alt="Player 1 Dice" />
        </div>
        <div className="flex flex-col gap-4 w-4/5 md:w-full items-center">
          <h2 className='text-2xl'>Player 2</h2>
          <img className='hover:rotate-180 duration-300' src={player2Dice} alt="Player 2 Dice" />
        </div>
      </div>
      <button className='bg-red-600 hover:bg-red-400 py-2 px-8 text-lg text-white font-semibold rounded-md' onClick={updateMove}>Play</button>
    </div>
  )
}

export default Dicer;