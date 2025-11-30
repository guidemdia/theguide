import { BrowserRouter, Routes, Route } from "react-router-dom";

import Launching from "./Launching";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Launching />} />
      </Routes>
    </BrowserRouter>
  );
}
