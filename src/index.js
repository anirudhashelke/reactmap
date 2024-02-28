import { createRoot } from "react-dom/client";
import FomComp from "./FomComp";
import Header from "./Header";

const data=  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const head=["home","contact","about"]

createRoot(document.getElementById("root")).render(
    <>
    {data.map( (ele,index)=>{
       return  <FomComp  name={ele}  key={ele} /> 
    })}
    
    {head.map((value)=>{
       return <Header   headers={value} key={value} />
    })}

    </>
)