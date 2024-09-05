import { File, Rank, Color } from './Chess.tsx';
import Position from './Position.ts';

export default abstract class Piece {
  protected position: Position;

  constructor(
    private readonly color: Color,
    file: File,
    rank: Rank,
  ) {
    this.position = new Position(file, rank);
  }

  public getColor(): Color {
    return this.color;
  }

  public getPosition(): Position {
    return this.position;
  }

  moveTo(position: Position): void {
    this.position = position;
  }

  abstract canMoveTo(position: Position): boolean
}
