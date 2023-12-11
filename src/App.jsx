import { useState } from "react";
import Blog from "./pages/Blog.jsx";
import Home from "./pages/Home.jsx";
import PostShow from "./pages/PostShow.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="posts" element={<Blog />}></Route>
          <Route path="posts/:id" element={<PostShow />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
