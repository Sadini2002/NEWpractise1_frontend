import { useState } from "react";


export default function TestPage() {
const [count, setCount] = useState(0);


   
    return (
        <div className="w-full h-screen  flex justify-center items-center">
          <div className="w-[450px] h-[450px] bg-green-400" >
            <button button onClick={()=>{setCount(count-1)}} className="bg-blue-400 text-white font-bold text-center w-[100px] h-[40px] shadow cursor-pointer"> - </button>
            <span className="text-3xl font-bold text-center mx-5 ">
                {count}

            </span>
            <button onClick={()=>{setCount(count+1)
            }}className="bg-red-400 text-white font-bold text-center w-[100px] h-[40px] cursor-pointer "> + </button>  

          </div>
        </div>
      );

}