import Home from "./Components/Home";
import Data from './Components/Data'
import { useState } from "react";
import './App.css'
import Buttons from "./Components/Buttons";

export default function App() {
  const [Datas, setDatas] = useState(Data)
  // wrong method
  // const author = Data.map((value)=>(value.author))
  // use below method
  const author = [...new Set(Data.map((value)=>(value.author)))]
  console.log(author);
  const filter = (cat) =>{
    const filterSet = Data.filter((value)=>(value.author===cat))
    setDatas(filterSet)
  }
  return(
    <>
    <Buttons author={author} filter={filter} setDatas={setDatas}/>
    <Home Data={Datas}/>
    </>
  )
}