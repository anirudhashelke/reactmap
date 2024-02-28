import { createRoot } from "react-dom/client";
import FomComp from "./FomComp";
import Header from "./Header";
import "./index.css";

const data=  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const head=["home","contact","about","product","login","sign","signout","search","profile"]

createRoot(document.getElementById("root")).render(
    <>
    {data.map( (ele)=>{
       return  <FomComp  name={ele}  key={ele} /> 
    })}
    
    {head.map((value)=>{
       return <Header   headers={value} key={value} />
    })}
  

    </>
)