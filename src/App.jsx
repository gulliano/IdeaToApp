import { Routes, Route, Link } from "react-router-dom";
import Landing from "./landing/Landing";
import Cgv from "./cgv/Cgv";
import Layout from "./layout/Layout";


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="cgv" element={<Cgv />} />

          <Route path="*" element={<Landing />} />
        </Route>
      </Routes>
    </div>
  );
}
