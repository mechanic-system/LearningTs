import * as React from 'react';
// import Task5 from '../Chapter4/Task5.tsx';
import Chess from '../Chapter5/Chess.tsx';

function App(): React.ReactElement {
  // type Reserve = {
  //   (from: Date, to: Date, destination: string): string
  //   (from: Date, destination: string): string
  //   (from: string): string
  // }

  // const reserve: Reserve = (
  //   from: Date | string,
  //   toOrDestination?: Date | string,
  //   destination?: string,
  // ) => {
  //   let result = '';
  //   if (from instanceof Date && toOrDestination instanceof Date && destination !== 'undefined') {
  //     result = `${from} : ${toOrDestination} - ${destination}`;
  //   } else if (from instanceof Date && destination !== 'undefined') {
  //     result = `${from} : ${toOrDestination} - ${destination}`;
  //   } else if (typeof toOrDestination === 'string') {
  //     result = `${from} - ${toOrDestination}`;
  //   } else if (typeof from === 'string') {
  //     result = `${from}`;
  //   }
  //   return result;
  // };
  // const res = reserve(new Date(), new Date(), 'top');
  // const res2 = reserve(new Date(), 'Anapa');
  // const res3 = reserve('USA');
  //
  // console.log('res', res);
  // console.log('res2', res2);
  // console.log('res3', res3);

  // type FuncWithSecondArgString = {
  //   <T extends (...args: any[]) => unknown[]>(
  //     f: (a: Parameters<T>[0], b: string, ...rest: unknown[]) => ReturnType<T>,
  //     ...args: [Parameters<T>[0], string, ...unknown[]]
  //   ): ReturnType<T>;
  // };

  // Перегрузка функции
  // const call: FuncWithSecondArgString = (f, ...args) => f(...args);
  //
  // // Пример функции
  // function fill(length: number, value: string): string[] {
  //   return Array.from({ length }, () => value);
  // }

  // Использование
  // const result = call(fill, 10, '1'); // вычисляется как массив из 10 'a'
  // console.log('result', result);

  return (
    <Chess />
  );
}

export default App;
