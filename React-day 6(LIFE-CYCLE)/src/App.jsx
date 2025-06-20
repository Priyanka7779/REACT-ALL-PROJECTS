import { useEffect,useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App(){
  let [flag,setFlag]=useState(false);
  let [input , setInput] = useState("");
  let [input2, setInput2] = useState("");

  const changeFlag = ()=>{
    setFlag(!flag);
  };

  const handelTextFildChange = (event)=>{
    setInput(event.target.value);
  };
  const handelTextFild2Change = (event)=>{
    setInput2(event.target.value);
  };

  return(
    <>
    <h1>React life cycle:</h1>

    <form>

      <input type="text" onChange={handelTextFildChange}/>
      <input type="text" onChange={handelTextFild2Change}/>
      <br /><br />
    </form>

    <button onClick={changeFlag}>Toggel Counter</button>
    <br /><br /><br />
    {flag ? <Counter data={input2}/> : null}
    </>
  );
}

export default App;