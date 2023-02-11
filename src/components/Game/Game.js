import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessList from '../GuessList';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
let status = 'running';

function Game() {
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guessArray, setGuessArray] = React.useState([]);

  function handleSubmitGuess(guess) {
    // Prevent delayed update to state
    const nextGuessArray = [...guessArray, guess];
    setGuessArray(nextGuessArray);

    if (guess === answer) {
      setGameStatus('won');
      console.log(status);
    } else if (nextGuessArray.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
      console.log(status);
    }
  }

  return (
    <>
      <GuessList guessArray={guessArray} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      {gameStatus === 'won' && (
        <WonBanner numOfGuesses={guessArray.length} />
      )}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
