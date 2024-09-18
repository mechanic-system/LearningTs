import React, { useEffect, useState } from 'react';
import './Scss/Chess.css';
import Game, { Pieces } from './Game.ts';
import Position from './Position.ts';

export type Color = 'Black' | 'White';
export type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
interface BordCall {
  id: string;
  color: string;
}

export default function Bord(): React.ReactElement {
  const game = new Game();
  const figureId = game.StartGame();
  const [figure, setFigure] = useState<Pieces[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [arrayBord, setArrayBord] = useState<BordCall[]>([]);
  const [selectFigure, setSelectFigure] = useState<Pieces | null>(null);
  const [arrayIdCall, setArrayIdCall] = useState<string[]>([]);

  const call = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const callColor = { black: 'callBlack', white: 'callWhite' };
  function createBord() {
    const arr = [];
    for (let i = 0; i < call.length; i += 1) {
      for (let y = 1; y < call.length + 1; y += 1) {
        if (call[i] === 'A' || call[i] === 'C' || call[i] === 'E' || call[i] === 'G') {
          const c = y % 2 === 0 ? callColor.white : callColor.black;
          const obj = { id: call[i] + y, color: c };
          arr.push(obj);
        } else {
          const c = y % 2 === 0 ? callColor.black : callColor.white;
          const obj = { id: call[i] + y, color: c };
          arr.push(obj);
        }
      }
    }
    setArrayBord(arr);
  }
  useEffect(() => {
    setFigure(figureId);
    createBord();
  }, []);
  let count = 0;
  const handleClickFigure = (index: number, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    const { currentTarget } = e;
    const figureFile = currentTarget.getAttribute('data-file');
    const figureRank = currentTarget.getAttribute('data-rank');
    figure.forEach((item) => {
      if (item.getPosition().getFile() === figureFile
        && item.getPosition().getRank() === Number(figureRank)
        && item.getColor() === 'White') {
        setSelectFigure(item);
        setActiveIndex(index);
      }
    });
  };
  const handleSelect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    const idCall = e.currentTarget.getAttribute('id');
    const res = idCall?.split('') ? idCall?.split('') : [];
    setArrayIdCall(res);
  };
  useEffect(() => {
    if (selectFigure !== null && Object.keys(selectFigure).length) {
      selectFigure?.moveTo(new Position(arrayIdCall[0], Number(arrayIdCall[1])));
      setSelectFigure(null);
    }
  }, [arrayIdCall]);
  return (
    <div className="container-chees">
      {arrayBord.map((item: BordCall, index: number) => (
        <div
          key={count += 1}
          role="presentation"
          onClick={(event) => handleSelect(event)}
          className={`container-call ${item.color}`}
          id={item.id}
        >
          {figure.map((el) => (
            el.getPosition().getFile() + el.getPosition().getRank() === item.id
              ? (
                <>
                  {console.log('el', el)}
                  <div
                    role="presentation"
                    onClick={(event) => handleClickFigure(index, event)}
                    className={`figure pic-stile ${el.getColor()} ${el.getColor() === 'Black' ? 'b' : 'w'} ${activeIndex === index ? 'select' : ''}`}
                    data-name={el.constructor.name}
                    data-file={el.getPosition().getFile()}
                    data-rank={el.getPosition().getRank()}
                  />
                </>
              ) : ''
          ))}
        </div>
      ))}
    </div>
  );
}
