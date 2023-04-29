import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import GlobalStyle from "./css/global";

function App() {

  return (
    <>
    <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
