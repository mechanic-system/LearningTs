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
    const trafic = (data: { rankValue?: number | null, fileValue?: number}) => {
      const { rankValue = null, fileValue = null } = data;
      if (!selector) {
        return figure.find((el: Pieces) => {
          // console.log('rankValue', rankValue, 'fileValue', fileValue, 'this.file', this.file);
          if (
            el.getPosition().getRank() === (rankValue || this.rank)
          && (
            (rankValue === null || rankValue) && fileValue === null
              ? el.getPosition().getFile() === this.file
              : el.getPosition().getFile().charCodeAt(0) === fileValue
          )
          && (
            (rankValue === null || rankValue) && fileValue === null
              ? el.getPosition().getRank() !== this.rank
              : el.getPosition().getFile() !== this.file
          )
          ) {
            console.log('el', el, 'rankValue', rankValue, 'fileValue', fileValue);
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
