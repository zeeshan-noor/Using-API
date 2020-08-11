import React, { useEffect, useState } from 'react';


function App() {

const [state , setState] = useState([{}]);

  useEffect(()=>{
  async function getRepos()
  {
    const response = await fetch("https://api.github.com/users/aamirpinger/repos")
    const data = await response.json();
    console.log(data);
    setState(data);
  }
  getRepos();
  },[]) //[] iska mtlb 'Api' aik bar call ho agr isko nai likhty to 'Api' br br call hoti rahy gi;



  return (
    <div>
      <h1>You Are Seeing All Repositories</h1>
      <ul>
        {state.map((obj,index)=>{
          return(
          <li key={index}>{obj.name}</li>
          )
        })}
      </ul>
      {/* <h1>im in trouble</h1> */}
    </div>
  );
}

export default App;
