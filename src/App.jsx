import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState("black")

  return (
    <>
      <div className='p-5 w-full h-screen' style={{background:count}}>
        <div className='flex justify-center  top-3.5 border-black p-1.5 align-center flex-wrap border-2 py-3.5 px-1.5 gap-1.5 rounded-4xl' 
        >

        
          <button onClick={() => setCount("red")} className='bg-red-500  text-black px-3.5 rounded-2xl border-2'>red</button>
          <button className='bg-yellow-500  text-black p-3.5 rounded-2xl border-2' onClick={() => setCount("yellow")}>yellow</button>
          <button className='bg-orange-500  text-black p-3.5 rounded-2xl border-2' onClick={() => setCount("orange")}>olive</button>
          <button className='bg-green-500  text-black p-3.5 rounded-2xl border-2' onClick={() =>setCount("green")}>Green</button>
          <button className='bg-violet-500  text-black p-3.5 rounded-2xl border-2' onClick={() => setCount("violet")}>Voilet</button>
          <button className='bg-white  text-black p-3.5 rounded-2xl border-2' onClick={()=>setCount("white")}>white</button>
          <button className='bg-black  text-white p-3.5 rounded-2xl border-amber-50' onClick={()=>setCount("black")}>Black</button>
        
      </div>
      </div>
    </>
  )
}

export default App
