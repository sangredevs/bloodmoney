import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Details from "./pages/details";
import { AnimatePresence } from "framer-motion";

const App = () => (
  <AnimatePresence exitBeforeEnter>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="details" element={<Details />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </AnimatePresence>
);

export default App;
