import Cards from "./Cards"

function Foreground() {

    const data = [
        {
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.", fileSize: '0.4MB',
            isDownloadFinished: true,
            tag: { isDownloadStart: false, downloadPercentage: 0.5, tagTitle: 'Open' }
        },
        {
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.", fileSize: '0.4MB',
            isDownloadFinished: true,
            tag: { isDownloadStart: false, downloadPercentage: 0.5, tagTitle: 'Open' }
        },
        {
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.", fileSize: '0.4MB',
            isDownloadFinished: true,
            tag: { isDownloadStart: false, downloadPercentage: 0.5, tagTitle: 'Open' }
        },
        {
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.", fileSize: '0.4MB',
            isDownloadFinished: true,
            tag: { isDownloadStart: false, downloadPercentage: 0.5, tagTitle: 'Open' }
        },
    ]

    return (
        <div className="fixed top-0 left-0 w-full h-screen z-[3] flex gap-10">
            {data.map((item, index) => <Cards key={index} data={item} />)}
        </div>
    )
}

export default Foreground