import React, { useState } from 'react'
import Navigation from './Navigation'
import data from './FloorsMapData'
import ImageMapper from 'reactjs-img-mapper'
import "./Mapper.css"

export const Floors = () => {
    const [hoveredArea, setHoveredArea] = useState(null)

    const handleMouseEnter = (area, evt) => {
        const { clientX, clientY } = evt
        setHoveredArea({ ...area, clientX, clientY })
    }

    const handleMouseLeave = () => {
        setHoveredArea(null)
    }

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-l from-[#034687] to-[#00c379]">
            <Navigation />
            <div className="w-full min-h-screen grid place-content-center align-middle auto-cols-auto sm:py-8">
                <div className="w-fit h-fit md:py-8 gap-4 lg:gap-14 grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 grid-flow-row justify-self-auto place-items-center mx-[20px] my-[120px] auto-cols-auto">
                    {data.map((item, index) => {
                        const imgCoords = data.find((coord) => coord.name === item.name);
                        const currentImage = hoveredArea && hoveredArea.item === item.name

                        return (
                            <div key={index} className="relative m-auto">
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                        <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                    </svg>
                                    <h3 className="text-xl md:text-2xl text-black leading-7 font-medium font-serif mb-2">{item.title}</h3>
                                </span>
                                <ImageMapper
                                    src={item.imgUrl}
                                    map={imgCoords}
                                    imgWidth={500}
                                    width={500}
                                    height={400}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                />
                                {hoveredArea && setHoveredArea.name !== item.name && (
                                    <div
                                        style={{
                                            zIndex: "99",
                                            position: 'absolute',
                                            top: hoveredArea.clientY - 100,
                                            left: hoveredArea.clientX - 50,
                                            transform: 'translate(-50%, -50%)',
                                            background: hoveredArea.preFillColor || 'rgba(0, 0, 0, 0.7)',
                                            color: hoveredArea.fillColor || 'white',
                                            padding: '5px',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {hoveredArea.name}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Floors;
