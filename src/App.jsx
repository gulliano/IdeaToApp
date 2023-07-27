import { Routes, Route, Link } from "react-router-dom";

import { Provider } from 'react-redux';

import { store } from './redux';

import Landing from "./landing/Landing";
import Cgv from "./cgv/Cgv";
import Layout from "./layout/Layout";
import Inscription from "./inscription/Inscription";


export default function App() {
  return (
    <Provider store={store} >
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="cgv" element={<Cgv />} />
            <Route path="inscription" element={<Inscription />} />
            <Route path="*" element={<Landing />} />
          </Route>
        </Routes>
      </div>
    </Provider>
  );
}
