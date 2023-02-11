import React from 'react';

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    
    handleSubmitGuess(guess);

    setGuess('');
  }

  return (
    <form class="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required={true}
        disabled={gameStatus !== 'running'}
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        maxLength={5}
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
