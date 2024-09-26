import { File, Rank, Color } from './Chess.tsx';
import { Pieces } from './Game.ts';
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

  abstract canFollowRoute(figure: Pieces[], rank: number, file: number): Pieces[]
}
