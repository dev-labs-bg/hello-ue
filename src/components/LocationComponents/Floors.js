import React from 'react'
import Navigation from './Navigation'
import data from './Data'
import ImageMapper from 'reactjs-img-mapper'

export const Floors = () => {

    // const imgCoord = data.imgCoords.find(obj => obj.hasOwnProperty("floor6"));
    // if (imgCoord) {
    //     const floor6 = imgCoord.floor6[0];
    //     console.log(floor6);
    // } else {
    //     console.log("floor6 not found.")
    // }

    // const floorsMap = data.imgCoords.map(obj => {
    //     const key = Object.keys(obj)[0];
    //     return { floor: key, areas: obj[key][0].areas };
    // });
    // console.log(floorsMap);

    return (
        <section
            className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-l from-[#034687] to-[#00c379]"
        >
            <Navigation />
            <div className="w-full min-h-screen grid place-content-center align-middle auto-cols-auto sm:py-8">
                <div className="w-fit h-fit gap-4 lg:gap-8 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-flow-row justify-self-auto place-items-center mx-[20px] my-[120px] auto-cols-auto">
                    {data.staticData.map((item, index) => {
                        const imgUrl = data.schemeImages.find((img) => img.id === item.id).imgUrl;
                        // const imgMap = data.imgCoords.find((coord) => coord[items.id])[items.id][0].areas;
                        const imgCoords = data.imgCoords.find((coord) => coord.name === `floor-${item.id}`);
                        const imgMap = imgCoords ? imgCoords.areas : [];

                        return (
                            <div key={index} className="mx-auto my-4">
                                <h3 className="text-xl md:text-2xl text-black leading-7 font-medium font-serif mb-2">{item.title}</h3>
                                <ImageMapper
                                    src={imgUrl}
                                    map={imgMap}
                                    imgWidth={500}
                                    width={500}
                                    height={350}
                                    className="w-full h-[350px] lg:w-[500px] shadow-2xl rounded-2xl 
                                    transform-gpu transition-all duration-500 hover:hue-rotate-15 hover:rounded-3xl 
                                    hover:drop-shadow-2xl hover:scale-110 hover:m-4
                                    md:hover:scale-105 md:hover:m-3 sm:hover:m-0"
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Floors;