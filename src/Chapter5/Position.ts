import { File, Rank } from './Chess.tsx';
import { Pieces } from './Game.ts';

type FilePos = File | string;
type RankPos = Rank | number;

export default class Position {
  constructor(
    private file: FilePos,
    private rank: RankPos,
  ) {
    this.file = file;
    this.rank = rank;
  }

  getFile(): FilePos {
    return this.file;
  }

  getRank(): RankPos {
    return this.rank;
  }

  figureTrafic(figure: Pieces[]) {
    let selector = false;
    const trafic = (data: { rankValue?: number, fileValue?: number}) => {
      const { rankValue = 0, fileValue = 0 } = data;
      if (!selector) {
        return figure.find((el: Pieces) => {
          if (
            el.getPosition().getRank() === (rankValue || this.rank)
          && ((rankValue && fileValue === 0)
            ? el.getPosition().getFile() === this.file
            : el.getPosition().getFile() === String.fromCharCode(fileValue))
          && ((rankValue && fileValue === 0)
            ? el.getPosition().getRank() !== this.rank
            : el.getPosition().getFile() !== this.file)
          ) {
            selector = true;
            return el;
          }
          return undefined;
        });
      }
      return undefined;
    };
    return trafic;
  }

  distanceFrom(position: Position):{rank: number, file: number} {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0)),
    };
  }
}
