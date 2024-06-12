import React from 'react';
import { useState } from 'react';
import "./App.css";

const Dicer = () => {
  let [winner, setWinner] = useState("Start Playing!");
  let [player1Dice, setPlayer1Dice] = useState(1);
  let [player2Dice, setPlayer2Dice] = useState(1);

  const updateMove = () => {
    let player1Move = Math.floor(Math.random() * 6);
    let player2Move = Math.floor(Math.random() * 6);
    setPlayer1Dice(player1Move);
    setPlayer2Dice(player2Move);
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
          <img className='hover:rotate-180 duration-300' src={`./dice-${player1Dice}.svg`} alt="Player 1 Dice" />
        </div>
        <div className="flex flex-col gap-4 w-4/5 md:w-full items-center">
          <h2 className='text-2xl'>Player 2</h2>
          <img className='hover:rotate-180 duration-300' src={`./dice-${player2Dice}.svg`} alt="Player 2 Dice" />
        </div>
      </div>
      <button className='bg-red-600 hover:bg-red-400 py-2 px-8 text-lg text-white font-semibold rounded-md' onClick={updateMove}>Play</button>
    </div>
  )
}

export default Dicer;