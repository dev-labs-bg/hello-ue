import React, { useState } from 'react'
import Navigation from './Navigation'
import data from './FloorsMapData'
import ImageMap from './ImageMap'
import "./Mapper.css"

const Floors = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const previousImage = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + data.length) % data.length)
    }

    const nextImage = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % data.length)
    }

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-l from-[#edf2f7]">
            <Navigation />
            <div className="w-full min-h-screen flex justify-center">
                <div className="w-full h-full md:py-8 gap-8 flex justify-center my-20 ">
                    {data.map((item, index) => {
                        const imgCoords = data.find((coord) => coord.name === item.name);
                        const isActive = index === currentIndex
                        return (
                            <div key={index} className={`flex flex-col gap-6 ${isActive ? "visible" : "hidden"}`}>
                                <span className="flex items-center text-center justify-center gap-6">
                                    <button type="button" onClick={previousImage} className=" text-[30px]">
                                        &lt;
                                    </button>
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                        <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                    </svg>
                                    <h3 className="text-xl md:text-2xl text-black leading-7 font-medium font-serif mb-2">{item.title}</h3>
                                    <button type="button" onClick={nextImage} className=" text-[30px]">
                                        &gt;
                                    </button>
                                </span>
                                <ImageMap
                                    item={item}
                                    map={imgCoords}
                                    currentIndex={currentIndex}
                                    setCurrentIndex={setCurrentIndex}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Floors;
