import React, { useState } from 'react'
import ImageMapper from 'reactjs-img-mapper'

const ImageMap = (props) => {
    const [hoveredArea, setHoveredArea] = useState(null)

    const handleMouseEnter = (area, evt) => {
        const { clientX, clientY } = evt
        setHoveredArea({ ...area, clientX, clientY })
    }

    const handleMouseLeave = () => {
        setHoveredArea(null)
    }

    return (
        <>
            <ImageMapper
                src={props.item && props.item.imgUrl}
                map={props.map}
                imgWidth={500}
                width={500}
                height={400}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
            {hoveredArea && (
                <div
                    style={{
                        zIndex: '99',
                        position: 'absolute',
                        top: hoveredArea.clientY - 100,
                        left: hoveredArea.clientX - 50,
                        transform: 'translate(-50%, -50%)',
                        background:
                            hoveredArea.preFillColor || 'rgba(0, 0, 0, 0.7)',
                        color: hoveredArea.fillColor || 'white',
                        padding: '5px',
                        fontWeight: 'bold',
                    }}
                >
                    {hoveredArea.name}
                </div>
            )}
        </>
    )

}

export default ImageMap