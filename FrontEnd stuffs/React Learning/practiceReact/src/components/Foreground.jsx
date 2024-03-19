import Cards from "./Cards"
import { useRef } from "react";



function Foreground() {
    const constraintsRef = useRef(null)

    const data = [
        {
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.", fileSize: '0.4MB',
            isDownloadFinished: true,
            tag: { isDownloadStart: false, downloadPercentage: 0.5, tagTitle: 'Open' }
        },
        {
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.", fileSize: '3.4MB',
            isDownloadFinished: true,
            tag: { isDownloadStart: false, downloadPercentage: 0.5, tagTitle: 'Open' }
        },
        {
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.", fileSize: '2.9MB',
            isDownloadFinished: false,
            tag: { isDownloadStart: true, downloadPercentage: 0.7, tagTitle: 'Open' }
        },
        {
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.", fileSize: '1.4MB',
            isDownloadFinished: true,
            tag: { isDownloadStart: false, downloadPercentage: 0.5, tagTitle: 'Open' }
        },
    ]

    return (
        <div ref={constraintsRef} className="fixed top-0 left-0 w-full h-screen z-[3] flex gap-10">
            {data.map((item, index) => <Cards key={index} reference={constraintsRef} data={item} />)}
        </div>
    )
}

export default Foreground