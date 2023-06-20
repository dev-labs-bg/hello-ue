import React, { useState } from 'react'
import Navigation from './Navigation'
import data from './Data'
// import ImageMapper from 'reactjs-img-mapper'

export const Floors = () => {
    const [building, setBuilding] = useState(null)

    const buttonClickHandler = (id) => {
        setBuilding(prevBuilding => (prevBuilding === id ? null : id))
        //Toggle image
    }

    return (
        <section
            id="container"
            className="relative w-full min-h-screen bg-gradient-to-r flex items-center justify-center from-teal-200 to-indigo-200"
        >
            <Navigation />
            <div className="w-full min-h-screen gap-8 flex flex-col items-center justify-center py-24 my-6 text-left text-black text-xl">
                {data.staticData.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col lg:flex-row items-center gap-6 bg-gray-600 rounded-md">
                            <div className=" w-[350px] md:w-[450px] lg:w-[325px] xl:w-[400px] h-fit flex flex-col lg:flex-row items-center
                             text-left justify-center focus:ring-4 focus:outline-none font-medium p-4 rounded-lg bg-white">
                                <span className="flex gap-5 items-center border-b-4 ">
                                    <h3 className="text-xl py-4">{item.title}</h3>
                                    <button onClick={() => buttonClickHandler(item.id)}>
                                        &gt;{data.btnsId.find((btn) => btn.id === item.id).title}
                                    </button>
                                </span>
                            </div>
                            <div id="image-container" className={building === item.id ? "visible" : "hidden"}>
                                <img src={data.schemeImages.find((img) => img.id === item.id).imgUrl}
                                    alt={`Schema: ${item.id}`}
                                    className="w-full h-[280px] sm:w-[350px] md:w-[450px] lg:w-[450px]" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Floors;