import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserStore from './store/UserStore';
import { IContext } from './types/UserStoreType';
import { DeviceStore } from './store/DeviceStore';

export const Context = createContext<IContext | null>(null);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Context.Provider value={ {
      userStore: new UserStore(),
      deviceStore: new DeviceStore()
    } }>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
