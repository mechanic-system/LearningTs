import React, { useEffect, useState } from 'react';
import Game, { Pieces } from './Game.ts';
import Position from './Position.ts';
import './Scss/Chess.css';

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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [arrayBord, setArrayBord] = useState<BordCall[]>([]);
  const [selectFigure, setSelectFigure] = useState<Pieces | null>(null);
  const [arrayIdCall, setArrayIdCall] = useState<string[]>([]);
  const [progress, setProgress] = useState<Color>('White');

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

  const handleClickFigure = (index: number, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    const { currentTarget } = e;
    figure.forEach((item) => {
      const figureFile = currentTarget.getAttribute('data-file');
      const figureRank = currentTarget.getAttribute('data-rank');
      if (item.getPosition().getFile() === figureFile
        && item.getPosition().getRank() === Number(figureRank)
        && item.getColor() === progress) {
        console.log('item', item);
        setSelectFigure(item);
        setActiveIndex(index);
        currentTarget.classList.toggle('select');
        console.log('555');
      }
    });
    // console.log('figureFile', figureFile, figureRank);
    // console.log('figureRank', figureRank);
    // if (selectFigure) {
    //   // selectFigure?.moveTo(new Position(String(figureFile), Number(figureRank)));
    //   console.log('222');
    //   // setSelectFigure(null);
    // }
  };

  const handleSelectCall = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    const idCall = e.currentTarget.getAttribute('id');
    const res = idCall?.split('') ? idCall?.split('') : [];
    setArrayIdCall(res);
    console.log('handleSelectCall');
  };

  function Move() {
    if (selectFigure !== null && Object.keys(selectFigure).length && arrayIdCall.length) {
      selectFigure?.moveTo(new Position(arrayIdCall[0], Number(arrayIdCall[1])));
      setSelectFigure(null);
      setProgress(selectFigure.getColor() === 'White' ? 'Black' : 'White');
      console.log('change');
    }
  }

  function Capture() {
    console.log('selectFigure', selectFigure);
  }

  useEffect(() => {
    Move();
    Capture();
    return () => { console.log('1'); };
  }, [arrayIdCall]);

  return (
    <div className="container-chees">
      {arrayBord.map((item: BordCall) => (
        <div
          key={item.id}
          role="presentation"
          onClick={(event) => handleSelectCall(event)}
          className={`container-call ${item.color}`}
          id={item.id}
        >
          {figure.map((el, index: number) => (
            el.getPosition().getFile() + el.getPosition().getRank() === item.id
              ? (
                <>
                  {/* {console.log('el', el)} */}
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
