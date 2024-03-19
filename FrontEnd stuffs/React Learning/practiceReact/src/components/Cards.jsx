import { FaRegFileLines } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { FiDownload } from "react-icons/fi";


function Cards({ data }) {
    return (
        <div className="cards relative w-60 h-72 bg-zinc-800/10 mt-5 rounded-[35px] text-white px-8 py-10 overflow-hidden">
            <FaRegFileLines />
            <p className="text-lg mt-3 font-semibold">{data.desc}</p>
            <div className={`footer absolute bottom-0 left-0 w-full ${data.isDownloadFinished ? 'mb-10' : null} flex items-center justify-between p-5`}>
                <div className="data-size font-roboto font-semibold ">{data.fileSize}</div>
                <span className="bg-zinc-200 p-1 rounded-full cursor-pointer">
                    {data.isDownloadFinished ? <RxCross2 color="black" size="1em" /> : <FiDownload color="black" size="1em" />}
                </span>
            </div>
            <div className="tag absolute bottom-0 left-0 w-full h-12 bg-green-600 flex items-center justify-center font-roboto font-semibold">
                {data.isDownloadFinished ? 'Open Now' : <progress value={data.tag.downloadPercentage} color="white" />}
            </div>
        </div>
    )
}

export default Cards