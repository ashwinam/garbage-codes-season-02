import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);


    return (
        <div className="w-screen h-screen bg-zinc-700 text-zinc-400 justify-center flex flex-col items-center text-[50px] font-roboto font-bold">
            Hello, React

            <button onClick={() => setCount(count + 1)} className="bg-zinc-900 text-white font-roboto mt-5 p-4 font-semibold text-xl border-none cursor-pointer rounded-xl">Count is: {count}</button>
        </div>
    )
}

export default Counter