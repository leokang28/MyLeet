/**
 * The n-queens puzzle is the problem of placing n queens on an n×n chessboard
 * such that no two queens attack each other.
 * 
 * Given an integer n, return all distinct solutions to the n-queens puzzle.
 * 
 * Each solution contains a distinct board configuration of the n-queens'
 * placement, where 'Q' and '.' both indicate a queen and an empty space respectively.
 */
function solveNQueens(n: number): string[][] {
  const res: string[][] = [];
  const board: string[] = initBoard(n);
  backtrack(board, 0, res);
  return res;
};

function initBoard(n: number): string[] {
  return [...Array(n)].map(_ => [...Array(n)].map(_ => '.').join(''))
}

function backtrack(board: string[], row: number, res: string[][]): void {
  if (row === board.length) {
    res.push([...board]);
    return;
  }
  const cols = board[row].length;
  for (let i = 0; i < cols; i++) {
    if (!check(board, row, i)) {
      continue;
    }

    board[row] = replace(board[row], i, 'Q');
    backtrack(board, row + 1, res);
    board[row] = replace(board[row], i, '.');
  }
}

function check(board: string[], row: number, col: number): boolean {
  let n: number = board.length;

  for (let i = 0; i < n; i++) {
    if (board[i][col] === 'Q') {
      return false;
    }
  }

  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 'Q') {
      return false;
    }
  }

  for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
    if (board[i][j] === 'Q') {
      return false;
    }
  }

  return true;
}

function replace(str: string, index: number, rep: string): string {
  const str_arr: string[] = str.split('');
  str_arr.splice(index, 1, rep);
  return str_arr.join('')
}