import type { FC } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Create from "./pages/create"
import Detail from "./pages/detail"
import Header from "./components/header"


const App:FC = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/create" element={<Create />}></Route>
      <Route path="/place/:id" element={<Detail />}></Route>

    </Routes>
    </BrowserRouter>
  )
  
}

export default App