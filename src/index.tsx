import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App/App.tsx';
import './styles/style.css';
import './styles/less.less';

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<App />);
