function App({ title }: { title: string }) {
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

  type Foo = {
    value: string
  }
  type Baz = {
    value: number
  }

  function call<T extends Foo>(f: (...args: unknown[]) => unknown[], ...args: unknown[]): unknown[] {
    return f(...args);
  }
  function fill(length: number, value: string): string[] {
    return Array.from({ length }, () => value);
  }

  console.log(call(fill, '5', 1));

  return (
    <> </>
  );
}

export default App;
