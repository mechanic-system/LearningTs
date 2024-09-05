import Piece from './Piece.ts';
import Position from './Position.ts';

export default class Rook extends Piece {
  canMoveTo(position: Position):boolean {
    const distance = this.position.distanceFrom(position);
    return distance.rank < 2 && distance.file < 2;
  }
}
