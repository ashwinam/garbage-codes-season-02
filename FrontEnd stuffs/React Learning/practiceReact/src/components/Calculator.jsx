import { useRef, useState } from "react"

function Calculator() {

    const [number, setNumber] = useState(0)
    const ref = useRef(null);

    const isOverflowed = () => {
        const textContent = ref.current;
        return textContent.scrollHeight > textContent.clientHeight;
    }

    function handleDelete() {
        if (typeof number == 'number') {
            setNumber(0)
            return;
        }
        let arrOfNumbers = [...number]
        arrOfNumbers.pop()
        setNumber(arrOfNumbers.length ? arrOfNumbers.join('') : 0)

    }

    const btnValue = (event) => setNumber(number ? number + event.target.textContent : event.target.textContent)

    return (
        <div className="main absolute w-80 h-auto top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[50%] text-zinc-500 font-roboto font-bold text-4xl shadow-xl">
            <div className="w-full h-28 bg-zinc-50 text-zinc-900 p-3 flex items-center justify-end rounded-sm" ref={ref} >{number}</div>
            <div className="buttons-screen flex justify-between w-full">
                <div className="numbers-buttons flex-1 bg-zinc-100">
                    <div className="first-row flex justify-between" >
                        <button className="p-5 text-4xl hover:bg-zinc-200" onClick={btnValue}>7</button>
                        <button className="p-5 text-4xl hover:bg-zinc-200" onClick={btnValue}>8</button>
                        <button className="p-5 text-4xl hover:bg-zinc-200" onClick={btnValue}>9</button>
                    </div>
                    <div className="second-row flex justify-between" >
                        <button className="p-5 text-4xl hover:bg-zinc-200" onClick={btnValue}>4</button>
                        <button className="p-5 text-4xl hover:bg-zinc-200" onClick={btnValue}>5</button>
                        <button className="p-5 text-4xl hover:bg-zinc-200" onClick={btnValue}>6</button>
                    </div>
                    <div className="third-row flex justify-between" >
                        <button className="p-5 text-4xl hover:bg-zinc-200" onClick={btnValue}>1</button>
                        <button className="p-5 text-4xl hover:bg-zinc-200" onClick={btnValue}>2</button>
                        <button className="p-5 text-4xl hover:bg-zinc-200" onClick={btnValue}>3</button>
                    </div>
                    <div className="fourth-row flex justify-between" >
                        <button className="p-5 text-4xl hover:bg-zinc-200" onClick={btnValue}>.</button>
                        <button className="p-5 text-4xl hover:bg-zinc-200" onClick={btnValue}>0</button>
                        <button className="p-5 text-4xl hover:bg-zinc-200" onClick={() => setNumber(eval(number))}>=</button>
                    </div>
                </div>
                <div className="operators-buttons bg-zinc-500 text-white flex flex-col justify-between p-3">
                    <button className="font-semibold text-2xl font-roboto hover:text-zinc-400 p-2" onClick={handleDelete}>DEL</button>
                    <button className="hover:text-zinc-400 p-2" onClick={btnValue}>/</button>
                    <button className="hover:text-zinc-400 p-2" onClick={btnValue}>*</button>
                    <button className="hover:text-zinc-400 p-2" onClick={btnValue}>-</button>
                    <button className="hover:text-zinc-400 p-2" onClick={btnValue}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator