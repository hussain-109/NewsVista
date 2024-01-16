import React from 'react'
export default function NewsItem(props) {
    return (

        <div className="dark:bg-[#232520] dark:text-[#ffffff] flex w-[20rem] sm:w-[15rem] h-[24rem] flex-col items-center hover:scale-[108%] transition-all duration-200 ease-in-out">

            {/* set source of news  */}
            <span className="bg-[#b9e4f5] dark:bg-red-500 px-2 rounded-lg relative top-[15px] z-10">
                {props.src}
            </span>

            {/* outer div for news-image published date news-title and description */}
            <a href={props.link} target='_blank'>
            <div className="border-[1px] border-[#7b7c7d] dark:border-none shadow-lg shadow-[#898987]/60 dark:shadow-[#898987]/50  h-[23rem] dark:bg-[#111210] rounded-lg cursor-pointer relative">

                {/* news image */}
                <div className="w-[100%] h-[45%] sm:h-[38%] ">
                    <img
                        className="rounded-t-lg w-[100%] h-[100%]"
                        src={props.img}
                        alt=""
                    />
                </div>

                {/* published date  */}
                <div className="dark:text-[#7b7c7d] p-2 text-[0.7rem]">{props.date}</div>

                {/* news Title */}
                <div className="w-[100%]  text-[1.1rem] font-semibold px-2">
                {(props.title)?props.title.slice(0,76):""}...
                </div>
            
                {/* description */}
                <div className="w-[100%] text-[0.8rem] font-cur p-2">
                {(props.desc)?props.desc.slice(0,133):""}...
                </div>
            </div>
            </a>
        </div>
    )
}

