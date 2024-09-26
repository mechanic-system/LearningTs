import React, { useEffect, useState } from 'react';
// import SocketClient from 'socket.io-client';
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
  // const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [arrayBord, setArrayBord] = useState<BordCall[]>([]);
  const [selectFigure, setSelectFigure] = useState<Pieces | null>(null);
  // const [arrayIdCall, setArrayIdCall] = useState<string[]>([]);
  const [progress, setProgress] = useState<Color>('White');
  const [figureFile, setFigureFile] = useState<string | null>();
  const [figureRank, setFigureRank] = useState<string | null>();
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

  // useEffect(() => {
  //   const res = SocketClient('ws://192.168.1.97:8989', {
  //     transports: ['websocket'],
  //   });
  //   res.on('users', (data) => {
  //   });
  //   res.on('chess', (data) => {
  //     console.log('data', data);
  //   });
  //   console.log('res', res);
  // }, []);

  useEffect(() => {
    setFigure(figureId);
    createBord();
  }, []);

  const handleClickFigure = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { currentTarget } = e;
    const figureF = currentTarget.getAttribute('data-file');
    const figureR = currentTarget.getAttribute('data-rank');
    setFigureFile(figureF);
    setFigureRank(figureR);
    figure.forEach((item) => {
      if (item.getPosition().getFile() === figureF
      && item.getPosition().getRank() === Number(figureR)
      && item.getColor() === progress) {
        e.stopPropagation();
        setSelectFigure(item);
        const select = currentTarget.classList.toggle('select');
        if (!select) {
          setSelectFigure(null);
        }
      }
    });
  };

  function Move(position: string[]) {
    if (selectFigure !== null && Object.keys(selectFigure).length) {
      selectFigure?.moveTo(new Position(position[0], Number(position[1])));
      setProgress(selectFigure.getColor() === 'White' ? 'Black' : 'White');
      setSelectFigure(null);
    }
  }

  function CanMove() {
    // const positionFigure = selectFigure?.getPosition();

    // if (!positionFigure) {
    //   return;
    // }
    // const figureTraficRestrictions: Pieces[] = [];
    // const file = positionFigure.getFile().charCodeAt(0);
    // const rank = positionFigure.getRank();

    // function FigureTrafic(figureF: Pieces[]) {
    //   let selector = false;
    //   return function Trafic(data: {position: Position, rankValue?: number, fileValue?: number}): Pieces | undefined {
    //     const { position, rankValue = 0, fileValue = 0 } = data;
    //     if (!selector) {
    //       return figureF.find((el) => {
    //         if (
    //           el.getPosition().getRank() === (rankValue || position.getRank())
    //         && ((rankValue && fileValue === 0)
    //           ? el.getPosition().getFile() === position.getFile()
    //           : el.getPosition().getFile() === String.fromCharCode(fileValue))
    //         && ((rankValue && fileValue === 0)
    //           ? el.getPosition().getRank() !== position.getRank()
    //           : el.getPosition().getFile() !== position.getFile())
    //         ) {
    //           selector = true;
    //           return el;
    //         }
    //         return undefined;
    //       });
    //     }
    //   };
    // }

    // for (
    //   let rankU = rank,
    //     rankD = rank,
    //     fileL = file,
    //     fileR = file,
    //     rankCountU = 8,
    //     rankCountD = 1,
    //     traficU = FigureTrafic(figure),
    //     traficD = FigureTrafic(figure),
    //     traficR = FigureTrafic(figure),
    //     traficL = FigureTrafic(figure),
    //     traficUL = FigureTrafic(figure),
    //     traficUR = FigureTrafic(figure),
    //     traficDL = FigureTrafic(figure),
    //     traficDR = FigureTrafic(figure);
    //   rankU <= rankCountU || rankD >= rankCountD;
    //   rankU += 1, rankD -= 1, fileR += 1, fileL -= 1
    // ) {
    //   const arrFunctionTrafic = [
    //     traficU({ position: positionFigure, rankValue: rankU }),
    //     traficD({ position: positionFigure, rankValue: rankD }),
    //     traficL({ position: positionFigure, fileValue: fileL }),
    //     traficR({ position: positionFigure, fileValue: fileR }),
    //     traficUL({ position: positionFigure, rankValue: rankU, fileValue: fileL }),
    //     traficUR({ position: positionFigure, rankValue: rankU, fileValue: fileR }),
    //     traficDL({ position: positionFigure, rankValue: rankD, fileValue: fileL }),
    //     traficDR({ position: positionFigure, rankValue: rankD, fileValue: fileR }),
    //   ];
    //   arrFunctionTrafic.forEach((el) => {
    //     if (el) {
    //       figureTraficRestrictions.push(el);
    //     }
    //   });
    // }
    // console.log('figureTraficRestrictions', figureTraficRestrictions);

    const res = selectFigure?.canFollowRoute(figure);
    console.log('res', res);
  }

  useEffect(() => {
    CanMove();
  }, [selectFigure]);

  const handleSelectCall = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    const idCall = e.currentTarget.getAttribute('id');
    const position = idCall?.split('') ? idCall?.split('') : [];
    const newFigure: Pieces[] = [];
    figure.forEach((el) => {
      if (!(el.getColor() !== progress
        && selectFigure
        && el.getPosition().getFile() === position[0]
        && el.getPosition().getRank() === Number(position[1]))) {
        newFigure.push(el);
      }
    });
    if (selectFigure !== null && Object.keys(selectFigure).length) {
      const canMove = selectFigure.canMoveTo(new Position(position[0], Number(position[1])));
      console.log('canMove', canMove);
      if (canMove) {
        setFigure(newFigure);
        Move(position);
      }
    }
  };

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
                  {/* {console.log('progress', progress)} */}
                  <div
                    role="presentation"
                    onClick={(event) => handleClickFigure(event)}
                    className={`figure pic-stile ${el.getColor()}
                      ${el.getColor() === 'Black' ? 'b' : 'w'}
                      ${figureFile === el.getPosition().getFile()
                      && Number(figureRank) === el.getPosition().getRank()
                      && progress === el.getColor()
                      ? 'select' : ''}`}
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
