import { Pieces } from './Game.ts';
import Piece from './Piece.ts';
import Position from './Position.ts';

export default class Pawn extends Piece {
  canMoveTo(position: Position):boolean {
    const distance = this.position.distanceFrom(position);
    return distance.rank < 3 && distance.file < 2;
  }

  canFollowRoute(figure: Pieces[]): Pieces[] {
    const figureTraficRestrictions: Pieces[] = [];
    for (
      let rankU = this.position.getRank(),
        rankD = this.position.getRank(),
        fileL = this.position.getFile().charCodeAt(0),
        fileR = this.position.getFile().charCodeAt(0),
        rankCountU = 2,
        rankCountD = 1,
        traficU = this.position.figureTrafic(figure),
        traficUL = this.position.figureTrafic(figure),
        traficUR = this.position.figureTrafic(figure);
      rankU <= rankCountU || rankD >= rankCountD;
      rankU += 1, rankD -= 1, fileL -= 1, fileR += 1
    ) {
      if (rankD < 1) {
        rankD = -1;
      }
      const arrFunctionTrafic = [
        traficU({ rankValue: rankU }),
        traficUL({ rankValue: rankU, fileValue: fileL }),
        traficUR({ rankValue: rankU, fileValue: fileR }),
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
