import { Pieces } from './Game.ts';
import Piece from './Piece.ts';
import Position from './Position.ts';

export default class Rook extends Piece {
  canMoveTo(position: Position):boolean {
    const distance = this.position.distanceFrom(position);
    return (distance.rank < 8 && distance.file < 1) || (distance.rank < 1 && distance.file < 8);
  }

  canFollowRoute(figure: Pieces[]): Pieces[] {
    const figureTraficRestrictions: Pieces[] = [];
    for (
      let rankU = this.position.getRank(),
        rankD = this.position.getRank(),
        fileL = this.position.getFile().charCodeAt(0),
        fileR = this.position.getFile().charCodeAt(0),
        rankCountU = 8,
        rankCountD = 1,
        traficU = this.position.figureTrafic(figure),
        traficD = this.position.figureTrafic(figure),
        traficL = this.position.figureTrafic(figure),
        traficR = this.position.figureTrafic(figure);
      rankU <= rankCountU || rankD >= rankCountD;
      rankU += 1, rankD -= 1, fileL -= 1, fileR += 1
    ) {
      if (rankD < 1) {
        rankD = -1;
      }
      const arrFunctionTrafic = [
        traficU({ rankValue: rankU }),
        traficD({ rankValue: rankD }),
        traficL({ fileValue: fileL }),
        traficR({ fileValue: fileR }),
      ];
      arrFunctionTrafic.forEach((el) => {
        if (el) {
          figureTraficRestrictions.push(el);
        }
      });
    }
    return figureTraficRestrictions;
  }
}
