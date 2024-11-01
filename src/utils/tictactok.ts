/**
 * Function to check if there is a winner in the current Tic-Tac-Toe board state.
 * 
 * The function evaluates predefined winning combinations (rows, columns, diagonals) and returns
 * the winner ('X' or 'O') if a combination is found. If no winner is found, it returns `null`.
 * 
 * @param {string[]} squares - The current state of the Tic-Tac-Toe board represented as an array of strings.
 *                             Each element is either 'X', 'O', or an empty string.
 * @returns {string | null} - Returns 'X' or 'O' if there is a winner, otherwise returns `null`.
 */
export const checkForWinner = (squares: string[]): string | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    
    // Check if squares at positions a, b, and c are the same and not empty
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Return the winner ('X' or 'O')
    }
  }

  return null; // No winner, return null
};
