import React, { useEffect, useState } from 'react';
import './Scss/Chees.css';
import Game, { Pieces } from './Game.ts';

export type Color = 'Black' | 'White';
export type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export default function Bord(): React.ReactElement {
  const game = new Game();
  const figureId = game.StartGame();
  const [figure, setFigure] = useState<Pieces[]>([]);
  console.log('figure', figure);

  useEffect(() => {
    setFigure(figureId);
  }, []);
  // const game = new Game();
  // console.log('game', game.StartGame());
  // const data = game.StartGame();
  // data.map((item) => console.log(item));
  // export default function InitGame(): React.JSX.Element {

  //   const figureId = game.StartGame();
  //   console.log('figureId', figureId);
  //   window.onload = () => {
  //     // const [position, setPosition] = useState(figureId.map((item) => item));
  //     // console.log('position', position);
  //     // const newPos = [...position];
  //     // setPosition(newPos);
  //     figureId.forEach((item) => {
  //       const pos = item.getPosition();
  //       const file = pos?.getFile();
  //       const rank = pos?.getRank();
  //       const elId = file + rank;
  //       const call = document.getElementById(elId);
  //       const newDiv = document.createElement('p');
  //       newDiv.className = 'call';
  //       call?.appendChild(newDiv);
  //     });
  //   };
  //   return (
  //     <div>
  //       { }
  //     </div>
  //   );
  // }

  let count = 0;
  return (
    <div className="contaire-chees">
      {figureId.map((item) => (
        <div key={count += 1} />
      ))}
    </div>
  );
}
