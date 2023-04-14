let currentPlayer = "X";
let gameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

function cellClicked(cell) {
  const row = cell.parentElement;
  const rowIndex = Array.from(row.parentElement.children).indexOf(row);
  const cellIndex = Array.from(row.children).indexOf(cell);

  if (gameBoard[rowIndex][cellIndex] !== "") {
    return;
  }

  cell.innerText = currentPlayer;
  gameBoard[rowIndex][cellIndex] = currentPlayer;

  if (checkForWinner()) {
    alert(`${currentPlayer} won the game!`);
    resetGame();
    return;
  }

  if (checkForTie()) {
    alert("The game ended in a tie!");
    resetGame();
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkForWinner() {
  for (let i = 0; i < 3; i++) {
    if (gameBoard[i][0] !== "" && gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2]) {
      return true;
    }
    if (gameBoard[0][i] !== "" && gameBoard[0][i] === gameBoard[1][i] && gameBoard[1][i] === gameBoard[2][i]) {
      return true;
    }
  }
  if (gameBoard[0][0] !== "" && gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) {
    return true;
  }
  if (gameBoard[0][2] !== "" && gameBoard[0][2] === game
