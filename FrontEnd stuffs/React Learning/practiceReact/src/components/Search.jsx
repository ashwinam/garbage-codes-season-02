import { useRef } from "react"

function Search({ searchMap }) {
    const ref = useRef(null)
    return (
        <form action="" onSubmit={(event) => {
            event.preventDefault()
            if (ref.current !== null) return searchMap(ref.current.value);
        }}>
            <input ref={ref} type="text" className="absolute z-[4] top-[5%] w-[500px] left-1/2 -translate-x-[50%] -translate-y-[50%] rounded-md font-roboto font-semibold text-zinc-300 text-xl bg-zinc-800 p-2 px-3 placeholder:text-bold focus:border-blue-600" placeholder="Search ..." />
        </form>
    )
}

export default Search