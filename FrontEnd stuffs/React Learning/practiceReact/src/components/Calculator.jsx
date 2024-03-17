
function Calculator() {
    return (
        <div className="main absolute w-80 h-auto top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[50%] text-zinc-500 font-roboto font-bold text-4xl shadow-xl">
            <div className="w-full h-28 bg-zinc-50 text-zinc-900 p-3 flex items-center justify-end rounded-sm">4,215</div>
            <div className="buttons-screen flex justify-between w-full">
                <div className="numbers-buttons flex-1 bg-zinc-100">
                    <div className="first-row flex justify-between" >
                        <button className="p-5 text-4xl hover:bg-zinc-200">7</button>
                        <button className="p-5 text-4xl hover:bg-zinc-200">8</button>
                        <button className="p-5 text-4xl hover:bg-zinc-200">9</button>
                    </div>
                    <div className="second-row flex justify-between" >
                        <button className="p-5 text-4xl hover:bg-zinc-200">4</button>
                        <button className="p-5 text-4xl hover:bg-zinc-200">5</button>
                        <button className="p-5 text-4xl hover:bg-zinc-200">6</button>
                    </div>
                    <div className="third-row flex justify-between" >
                        <button className="p-5 text-4xl hover:bg-zinc-200">1</button>
                        <button className="p-5 text-4xl hover:bg-zinc-200">2</button>
                        <button className="p-5 text-4xl hover:bg-zinc-200">3</button>
                    </div>
                    <div className="fourth-row flex justify-between" >
                        <button className="p-5 text-4xl hover:bg-zinc-200">.</button>
                        <button className="p-5 text-4xl hover:bg-zinc-200">0</button>
                        <button className="p-5 text-4xl hover:bg-zinc-200">=</button>
                    </div>
                </div>
                <div className="operators-buttons bg-zinc-500 text-white flex flex-col justify-between p-3">
                    <button className="font-semibold text-2xl font-roboto hover:text-zinc-400 p-2">DEL</button>
                    <button className="hover:text-zinc-400 p-2">/</button>
                    <button className="hover:text-zinc-400 p-2">*</button>
                    <button className="hover:text-zinc-400 p-2">-</button>
                    <button className="hover:text-zinc-400 p-2">+</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator