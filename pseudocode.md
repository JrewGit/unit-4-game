*make title;

*make instructions;

*make computerRandomNumber;
  *umber should be from 19 - 120;

*make userGuess counter;

*make win counter;
  *if userGuess is equal to computerRandomNumber win;
    *win counter goes up by 1;
    *print winStatement;
    *reset computerRandomNumber;
    *reset gemRandomNumber for each gem;

*make loss counter;
  *if userGuess > computerRandomNumber;
    *loss counter goes up ONLY 1;
    *print lossStatement;
    *reset computerRandomNumber;
    *reset gemRandomNumber for each gem;

*make 4 different gem pictures (Ruby, Sapphire, Emerald, Topaz);
  *have each gem hold a different random number:
    *random number should be from 1 - 12;
  *if user clicks on a gem:
    *userGuess counter goes up by the random number that was on the gem that they clicked;

TODO:

*Add symmetrical height to the results and message id;
*Set onclick function to reset the game;
*Set reset computerRandomNumber;
*Set reset gemRandomNumber for each gem;
*Fix loss result reset bug;