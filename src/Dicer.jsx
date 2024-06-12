import React from 'react'
import { useState } from 'react'
import "./App.css"

function Dicer() {
  let [winner, setWinner] = useState("Start Playing!")
  let [player1Dice, setPlayer1Dice] = useState('src/assets/dice-1.svg')
  let [player2Dice, setPlayer2Dice] = useState('src/assets/dice-1.svg')

  function updateMove(){

    let player1Move = Math.floor(Math.random() * 6) + 1;
    let player2Move = Math.floor(Math.random() * 6) + 1;

    let player1play = `src/assets/dice-${player1Move}.svg`;
    let player2play =`src/assets/dice-${player2Move}.svg`;

    setPlayer1Dice(player1play);
    setPlayer2Dice(player2play);

    if(player1Move > player2Move){
      setWinner("Player 1 wins!")
    } else if (player1Move < player2Move){
      setWinner("Player 2 wins!")
    } else{
      setWinner("Draw!")
    }

  }

  return (
    <div className="bg-black w-2/5 text-red-400 flex flex-col justify-center items-center gap-14 p-14 rounded-2xl">
      <h1 className='text-3xl font-semibold'>{winner}</h1>
      <div className="dices w-full flex justify-evenly gap-12">
        <div className="flex flex-col gap-4 w-full items-center">
          <h2 className='text-2xl'>Player 1</h2>
          <img className='hover:rotate-180 duration-300' src={player1Dice} alt="Player 1 Dice" />
        </div>
        <div className="flex flex-col gap-4 w-full items-center">
          <h2 className='text-2xl'>Player 2</h2>
          <img className='hover:rotate-180 duration-300' src={player2Dice} alt="Player 1 Dice" />
        </div>
      </div>
      <button className='bg-red-600 hover:bg-red-400 py-2 px-8 text-lg text-white font-semibold rounded-md' onClick={updateMove}>Play</button>
    </div>
  )
}

export default Dicer