// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App/App.tsx';

// ReactDOM.render(<App title="home" />, document.getElementById('root'));
// const root = ReactDOM.createRoot(document.getElementById('root')!);
// root.render(
//   <React.StrictMode>
//     <App title="home" />
//   </React.StrictMode>,
// );

import { createRoot } from 'react-dom/client';
import './styles/style.css';
import './styles/less.less';
import App from './App/App.tsx';

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<App title="home" />);
