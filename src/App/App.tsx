function App({ title }:{title: string}) {
  type Reserve = {
    (from: Date, to: Date, destination: string): string
    (from: Date, destination: string): string
    (from: string): string
  }

  function foo() {
    let count = 0;
    return function buuz(v) {
      return count += 1 + v;
    };
  }
  const baz = foo();
  console.log(baz('1'));
  console.log(baz('2'));

  const reserve: Reserve = (
    from: Date | string,
    toOrDestination?: Date | string,
    destination?: string,
  ) => {
    let result = '';
    if (from instanceof Date && toOrDestination instanceof Date && destination !== 'undefined') {
      result = `${from} : ${toOrDestination} - ${destination}`;
    } else if (from instanceof Date && destination !== 'undefined') {
      result = `${from} : ${toOrDestination} - ${destination}`;
    } else if (typeof toOrDestination === 'string') {
      result = `${from} - ${toOrDestination}`;
    } else if (typeof from === 'string') {
      result = `${from}`;
    }
    return result;
  };
  const res = reserve(new Date(), new Date(), 'top');
  const res2 = reserve(new Date(), 'Anapa');
  const res3 = reserve('USA');

  console.log('res', res);
  console.log('res2', res2);
  console.log('res3', res3);

  function call(f:(...args: unknown[]) => unknown, ...args: unknown[]): unknown {
    return f(...args);
  }

  function fill(length: number, value: string): string[] {
    return Array.from({ length }, () => value);
  }

  console.log(call(fill, 1, 1));
  // async function diksi() {
  //   try {
  //   // // 'https://dostavka.dixy.ru/catalog/?q=%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D1%84%D0%B5%D0%BB%D1%8C'
  //   //   const result = await fetch('https://dostavka.dixy.ru/catalog/?q=%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D1%84%D0%B5%D0%BB%D1%8C', {
  //   //     method: 'GET',
  //   //   });
  //     // const data = await result.json();
  //     // console.log('res', data);
  //     // setDicsi(res);
  //   } catch (er) {
  //     console.log('error', er);
  //   }
  // }

  // diksi();
  return (
    // <div className="container">
    //   <h1 className="title">Webpack</h1>
    //   <div className="logo" />
    //   <div className="box">
    //     <h2>None stop</h2>
    //   </div>
    //   <div className="box-title" title={title} />
    // </div>
    <>
    </>
  );
}

export default App;
