let board = ['', '', '', '', '', '', '', '', ''];
let player = 'X';
let result = document.getElementById('result');
let cells = document.getElementsByTagName('td');

function play(cell) {
  if (board[cell.id] !== '') {
    return;
  }
  cell.innerHTML = player;
  board[cell.id] = player;
  if (checkWin()) {
    result.innerHTML = `${player} wins!`;
    disableBoard();
    return;
  }
  if (board.every((val) => val !== '')) {
    result.innerHTML = "It's a tie!";
    disableBoard();
    return;
  }
  player = player === 'X' ? 'O' : 'X';
  result.innerHTML = `${player}'s turn`;
}

function checkWin() {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
}

function disableBoard() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].removeEventListener('click', onCellClicked);
  }
}

function reset() {
  board = ['', '', '', '', '', '', '', '', ''];
  player = 'X';
  result.innerHTML = `${player}'s turn`;
  for (let i = 0; i < cells.length
