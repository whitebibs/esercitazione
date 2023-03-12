import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Home } from "./layout/pages/Home";
import { Posts } from "./layout/pages/Posts";
import { Todos } from "./layout/pages/Todos";


const App = () => {
  return(
    <>
    <Routes >
    <Route path="/" element={<DefaultLayout/>}>
      <Route path="/" index element={<Home/>}></Route>
      <Route path="/posts" element={<Posts/>}></Route>
      <Route path="/todos" element={<Todos/>}></Route>
    </Route>
    </Routes>
    </>
  )
}

export default App;
