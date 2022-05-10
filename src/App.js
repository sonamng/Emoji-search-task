
import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import EmojiData from './component/Emoji.json';



const App=()=>{
  const [search,setSearch]=useState("")
  const [data,setData]=useState([]);
  useEffect(()=>{
    const newData=EmojiData.filter(emoji=>emoji.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    setData(newData)
  })


  return( 
    <div className='App'>
      <h1>Emoji Search</h1>
      <input className='Input' type="text" name='search' placeholder='Emoji Search here' value={search} onChange={(e)=>setSearch(e.target.value)}/>
      {data.map(emoji=> <div>
        <div class='card'>
          <div class="card-body" onClick={()=>{navigator.writeText(emoji.symbol)}}>
            {emoji.symbol} {emoji.title}
          </div>
        </div>
      </div>)}
    </div>
  )
}
export default App;
