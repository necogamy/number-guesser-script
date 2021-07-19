  let humanScore = 0;
  let computerScore = 0;
  let currentRoundNumber = 1;

  // Write your code below:
  const generateTarget = () => {
    return parseInt(Math.random() * 9);
  }

  const compareGuesses = (human, computer, secret) => {
    if (human === secret) {
      return true;
    } else if (computer === secret) {
      return false;
    }

    if (secret > computer) {
      computer = secret - computer;
    } else if (secret < computer) {
      computer = computer - secret;
    }
    
    if (secret > human) {
      human = secret - human;
    } else if (secret < human) {
      human = human - secret;
    }

    return human < computer || human === computer ? true : false;
  }

  const updateScore = winner => {
    if (winner === 'human') {
      humanScore += 1;
    } else {
      computerScore += 1;
    }
  }

  const advanceRound = () => currentRoundNumber += 1;