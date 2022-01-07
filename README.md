# odinrock
ODIN PROJECT: ROCK, PAPER, SCISSORS GAME

Page is published at https://cleargoaldigital.github.io/odinrock/

*Pseudocode for Rock Paper Scissors Game*
Brief about the game:
A player is set up against the computer.
Each (computer and player) has three weapons: rock, paper, and scissors. The following analysis holds true for the weapons:

Paper has a higher value than rock - Paper can cover rock.

Rock has higher value than Scissors - Rock can crush Scissors.

Scissors has a higher value than paper - Scissors can cut paper.

PlayerSelect === CompuerSelect : Tie

PlayerSelect: rock - CompuerSelect : scissors == playerScore++;

PlayerSelect: paper - CompuerSelect : rock == playerScore++;

PlayerSelect: scissors - CompuerSelect : paper == playerScore++;

PlayerSelect: paper - CompuerSelect : scissors == computerScore++;

PlayerSelect: scissors - CompuerSelect : rock == computerScore++;
