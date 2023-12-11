import { useState } from "react";
import Blog from "./pages/Blog.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="blog" element={<Blog />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
