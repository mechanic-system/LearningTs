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


// <div className="contaire-chees">
// <div className="container-bord">
//   <div className="col-1">
//     <div>
//       A
//       <div className="container-call" id="A1" data-file="E" data-rank={1} />
//     </div>
//     <div>
//       <div className="container-call" id="A2" data-file="E" data-rank={2} />
//     </div>
//     <div className="container-call" id="A3" data-file="E" data-rank={3} />
//     <div className="container-call" id="A4" data-file="E" data-rank={4} />
//     <div className="container-call" id="A5" data-file="E" data-rank={5} />
//     <div className="container-call" id="A6" data-file="E" data-rank={6} />
//     <div className="container-call" id="A7" data-file="E" data-rank={7} />
//     <div className="container-call" id="A8" data-file="E" data-rank={8} />
//   </div>
//   <div className="col-2">
//     <div>
//       <div className="container-call" id="B1" data-file="B" data-rank={1} />
//       B
//     </div>
//     <div className="container-call" id="B2" data-file="B" data-rank={2} />
//     <div className="container-call" id="B3" data-file="B" data-rank={3} />
//     <div className="container-call" id="B4" data-file="B" data-rank={4} />
//     <div className="container-call" id="B5" data-file="B" data-rank={5} />
//     <div className="container-call" id="B6" data-file="B" data-rank={6} />
//     <div className="container-call" id="B7" data-file="B" data-rank={7} />
//     <div className="container-call" id="B8" data-file="B" data-rank={8} />
//   </div>
//   <div className="col-3">
//     <div>
//       <div className="container-call" id="C1" data-file="C" data-rank={1} />
//       C
//     </div>
//     <div className="container-call" id="C2" data-file="C" data-rank={2} />
//     <div className="container-call" id="C3" data-file="C" data-rank={3} />
//     <div className="container-call" id="C4" data-file="C" data-rank={4} />
//     <div className="container-call" id="C5" data-file="C" data-rank={5} />
//     <div className="container-call" id="C6" data-file="C" data-rank={6} />
//     <div className="container-call" id="C7" data-file="C" data-rank={7} />
//     <div className="container-call" id="C8" data-file="C" data-rank={8} />
//   </div>
//   <div className="col-4">
//     <div>
//       <div className="container-call" id="D1" data-file="D" data-rank={1} />
//       D
//     </div>
//     <div className="container-call" id="D2" data-file="D" data-rank={2} />
//     <div className="container-call" id="D3" data-file="D" data-rank={3} />
//     <div className="container-call" id="D4" data-file="D" data-rank={4} />
//     <div className="container-call" id="D5" data-file="D" data-rank={5} />
//     <div className="container-call" id="D6" data-file="D" data-rank={6} />
//     <div className="container-call" id="D7" data-file="D" data-rank={7} />
//     <div className="container-call" id="D8" data-file="D" data-rank={8} />
//   </div>
//   <div className="col-5">
//     <div>
//       <div className="container-call" id="E1" data-file="E" data-rank={1} />
//       E
//     </div>
//     <div className="container-call" id="E2" data-file="E" data-rank={2} />
//     <div className="container-call" id="E3" data-file="E" data-rank={3} />
//     <div className="container-call" id="E4" data-file="E" data-rank={4} />
//     <div className="container-call" id="E5" data-file="E" data-rank={5} />
//     <div className="container-call" id="E6" data-file="E" data-rank={6} />
//     <div className="container-call" id="E7" data-file="E" data-rank={7} />
//     <div className="container-call" id="E8" data-file="E" data-rank={8} />
//   </div>
//   <div className="col-6">
//     <div>
//       <div className="container-call" id="F1" data-file="F" data-rank={1} />
//       F
//     </div>
//     <div className="container-call" id="F2" data-file="F" data-rank={2} />
//     <div className="container-call" id="F3" data-file="F" data-rank={3} />
//     <div className="container-call" id="F4" data-file="F" data-rank={4} />
//     <div className="container-call" id="F5" data-file="F" data-rank={5} />
//     <div className="container-call" id="F6" data-file="F" data-rank={6} />
//     <div className="container-call" id="F7" data-file="F" data-rank={7} />
//     <div className="container-call" id="F8" data-file="F" data-rank={8} />
//   </div>
//   <div className="col-7">
//     <div>
//       <div className="container-call" id="G1" data-file="G" data-rank={1} />
//       G
//     </div>
//     <div className="container-call" id="G2" data-file="G" data-rank={2} />
//     <div className="container-call" id="G3" data-file="G" data-rank={3} />
//     <div className="container-call" id="G4" data-file="G" data-rank={4} />
//     <div className="container-call" id="G5" data-file="G" data-rank={5} />
//     <div className="container-call" id="G6" data-file="G" data-rank={6} />
//     <div className="container-call" id="G7" data-file="G" data-rank={7} />
//     <div className="container-call" id="G8" data-file="G" data-rank={8} />
//   </div>
//   <div className="col-8">
//     <div>
//       <div className="container-call" id="H1" data-file="H" data-rank={1} />
//       H
//     </div>
//     <div className="container-call" id="H2" data-file="H" data-rank={2} />
//     <div className="container-call" id="H3" data-file="H" data-rank={3} />
//     <div className="container-call" id="H4" data-file="H" data-rank={4} />
//     <div className="container-call" id="H5" data-file="H" data-rank={5} />
//     <div className="container-call" id="H6" data-file="H" data-rank={6} />
//     <div className="container-call" id="H7" data-file="H" data-rank={7} />
//     <div className="container-call" id="H8" data-file="H" data-rank={8} />
//   </div>
// </div>
// </div>
// <div key={count += 1} className={item.getColor()} id="A1" data-file={item.getPosition().getFile()} data-rank={item.getPosition().getRank()} />