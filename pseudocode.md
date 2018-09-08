make title;

make instructions;

make userGuess counter;

make computerRandomNumber;
  number should be from 19 - 120;

make win counter;
  if userGuess is equal to computerRandomNumber win;
    win counter goes up by 1;
    print winStatement;
    reset computerRandomNumber;
    reset gemRandomNumber for each gem;

make loss counter;
  if userGuess > computerRandomNumber;
    loss counter goes up by 1;
    print lossStatement;
    reset computerRandomNumber;

make 4 different gem pictures;
  have each gem hold a different random number:
    random number should be from 1 - 12;
  if user clicks on a gem:
    userGuess counter goes up by the random number that was on the gem that they clicked;