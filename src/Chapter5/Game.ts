import King from './King.ts';
import Queen from './Qeen.ts';
import Bishop from './Bishop.ts';
import Knight from './Knight.ts';
import Rook from './Rook.ts';
import Pawn from './Pawn.ts';

export type Pieces = King | Queen | Bishop | Knight | Rook | Pawn

export default class Game {
  private pieces: Pieces[] = Game.makePieces();

  private static makePieces(): Pieces[] {
    return [
      // Короли
      new King('White', 'E', 1),
      new King('Black', 'E', 8),

      // Ферзи
      new Queen('White', 'D', 1),
      new Queen('Black', 'D', 8),

      // Слоны
      new Bishop('White', 'C', 1),
      new Bishop('White', 'F', 1),
      new Bishop('Black', 'C', 8),
      new Bishop('Black', 'F', 8),

      // Кони
      new Knight('White', 'B', 1),
      new Knight('White', 'G', 1),
      new Knight('Black', 'B', 8),
      new Knight('Black', 'G', 8),

      // Ладьи
      new Rook('White', 'A', 1),
      new Rook('White', 'H', 1),
      new Rook('Black', 'A', 8),
      new Rook('Black', 'H', 8),

      // Пешки
      new Pawn('White', 'A', 2),
      new Pawn('White', 'B', 2),
      new Pawn('White', 'C', 2),
      new Pawn('White', 'D', 2),
      new Pawn('White', 'E', 2),
      new Pawn('White', 'F', 2),
      new Pawn('White', 'G', 2),
      new Pawn('White', 'H', 2),
      new Pawn('Black', 'A', 7),
      new Pawn('Black', 'B', 7),
      new Pawn('Black', 'C', 7),
      new Pawn('Black', 'D', 7),
      new Pawn('Black', 'E', 7),
      new Pawn('Black', 'F', 7),
      new Pawn('Black', 'G', 7),
      new Pawn('Black', 'H', 7),
    ];
  }

  StartGame(): Pieces[] {
    return this.pieces;
  }
}
