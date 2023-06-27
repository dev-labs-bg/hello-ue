import React from 'react'
import Navigation from './Navigation'
import data from './FloorsMapData'
import ImageMap from './ImageMap'
import "./Mapper.css"

export const Floors = () => {

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-l from-[#edf2f7]">
            <Navigation />
            <div className="w-full min-h-screen grid place-content-center align-middle auto-cols-auto ">
                <div className="w-fit h-fit md:py-8 gap-8 lg:gap-14 grid 2xl:max-2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 grid-flow-row justify-center my-20 ">
                    {data.map((item, index) => {
                        const imgCoords = data.find((coord) => coord.name === item.name);
                        return (
                            <div key={index} className="relative m-auto">
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                        <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                    </svg>
                                    <h3 className="text-xl md:text-2xl text-black leading-7 font-medium font-serif mb-2">{item.title}</h3>
                                </span>
                                <ImageMap item={item} map={imgCoords} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Floors;
