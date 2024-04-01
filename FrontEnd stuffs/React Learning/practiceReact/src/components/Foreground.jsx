import Cards from "./Cards"
import { useEffect, useRef, useState } from "react";
import Search from "./Search";



function Foreground() {
    const constraintsRef = useRef(null)
    const [search, setSearch] = useState('')
    const originalData = [
        {
            desc: "Hello My name is ashwin", fileSize: '0.4MB',
            isDownloadFinished: true,
            tag: { isDownloadStart: false, downloadPercentage: 0.5, tagTitle: 'Open' }
        },
        {
            desc: "Hello My name is Rohit", fileSize: '3.4MB',
            isDownloadFinished: true,
            tag: { isDownloadStart: false, downloadPercentage: 0.5, tagTitle: 'Open' }
        },
        {
            desc: "Hello My name is jatinder", fileSize: '2.9MB',
            isDownloadFinished: false,
            tag: { isDownloadStart: true, downloadPercentage: 0.7, tagTitle: 'Open' }
        },
        {
            desc: "Hello My name is Unknown", fileSize: '1.4MB',
            isDownloadFinished: true,
            tag: { isDownloadStart: false, downloadPercentage: 0.5, tagTitle: 'Open' }
        },
    ]

    const [data, setData] = useState(originalData)

    useEffect(() => {
        const filteredData = search ? originalData.filter((item) => item.desc.toLowerCase().includes(search.toLowerCase())) : originalData;

        setData(filteredData);
    }, [search])

    return (
        <>
            <Search searchMap={setSearch} />
            <div ref={constraintsRef} className="fixed top-0 left-0 w-full h-screen z-[3] flex gap-10 py-32">
                {data.map((item, index) => <Cards key={index} reference={constraintsRef} data={item} />)}
            </div>
        </>
    )
}

export default Foreground