import React,{ useState } from 'react';
import './App.css';

function App() {
  

  const [mood,setmood]=useState("rgb(238, 241, 0)")
  const handle =(e)=>{
   setmood(e.target.value)
   console.log({mood})
    }
  return (
    <div id="main">
    
    <select onChange={handle}>
       <option value="rgb(238, 241, 0)">Happy</option>
      <option value="rgb(19, 0, 164)">Sad</option>
      <option value="rgb(35, 177, 0)">Sleepy</option>
      <option value="rgb(255, 0, 66)">Excited</option> 
    </select>
    <div id="mood-indicator"  style={{backgroundColor:mood}}></div> 
    </div>
  )

}
// function App() {
//   const [fruit, setFruit] = useState();
//   const hamdle=(e)=>{
//     setFruit(e.target.value)
  
//   console.log(e.target.value)}

//   return (
//     <div>
//       <select id="fruits" value={fruit} 
//               onChange={hamdle}>

//         <option value="Apple">Apple</option>
//         <option value="Pear">Pear</option>
//         <option value="Pineapple">Pineapple</option>
//       </select>
//       <h1>Selected Fruit: {fruit}</h1>
//     </div>

//   );
  
// }

export default App;

