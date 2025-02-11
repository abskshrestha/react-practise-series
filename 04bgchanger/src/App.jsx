import { useState } from "react"

function App(){
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rouned-xl">
          <button onClick = {()=>{setColor("red")}}  className="outlin-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>

          <button onClick={()=>setColor("blue")} className="outlin-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>  
          
          <button onClick={()=>setColor("green")} className="outlin-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>
        </div>
      </div>

      <button className="w-3xl">Click one button</button>

    </div>
  )
}

export default App