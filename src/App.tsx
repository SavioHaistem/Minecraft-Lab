import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import HomeStyle from "./css/global";

function App() {

  return (
    <>
    <HomeStyle/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
