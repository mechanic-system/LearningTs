import { File, Rank } from './Chess.tsx';

export default class Position {
  constructor(
    private file: File | string,
    private rank: Rank | number,
  ) {
    this.file = file;
    this.rank = rank;
  }

  getFile() {
    return this.file;
  }

  getRank() {
    return this.rank;
  }
  
  distanceFrom(position: Position):{rank: number, file: number} {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0)),
    };
  }
}
