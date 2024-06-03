function App({ title }:{title: string}) {
  type Reserve = {
    (from: Date, to: Date, destination: string): string
    (from: Date, destination: string): string
    (from: string): string
  }

  const reserve: Reserve = (
    from: Date | string,
    toOrDestination?: Date | string,
    destination?: string,
  ) => {
    let result;
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

    // if (typeof from) {
    //   return '';
    // }
    { return ''; }
  };
  const res = reserve(new Date(), new Date(), 'top');
  const res2 = reserve(new Date(), 'Anapa');
  const res3 = reserve('USA');

  console.log('res', res);
  console.log('res2', res2);
  console.log('res3', res3);
  async function diksi() {
    try {
    // 'https://dostavka.dixy.ru/catalog/?q=%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D1%84%D0%B5%D0%BB%D1%8C'
      const res = await fetch('https://dostavka.dixy.ru/catalog/?q=%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D1%84%D0%B5%D0%BB%D1%8C', {
        method: 'GET',
        headers: {
          'Content-Type': 'text/plain;charset=UTF-8',
        },
        body: undefined, // string, FormData, Blob, BufferSource, or URLSearchParams
        referrer: 'about:client', // or "" to send no Referer header,
        // or an url from the current origin
        referrerPolicy: 'strict-origin-when-cross-origin', // no-referrer-when-downgrade, no-referrer, origin, same-origin...
        mode: 'cors', // same-origin, no-cors
        credentials: 'same-origin', // omit, include
        cache: 'default', // no-store, reload, no-cache, force-cache, or only-if-cached
        redirect: 'follow', // manual, error
        integrity: '', // a hash, like "sha256-abcdef1234567890"
        keepalive: false, // true
        signal: undefined, // AbortController to abort request
      });
      const data = await res.json();
      console.log('res', data);
      // setDicsi(res);
    } catch (er) {
      console.log('error', er);
    }
  }

  diksi();

  return (
    <div className="container">
      <h1 className="title">Webpack</h1>
      <div className="logo" />
      <div className="box">
        <h2>None stop</h2>
      </div>
      <div className="box-title" title={title} />
    </div>
  );
}

export default App;
