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

    const clicked = (area) => {
        hoveredArea(`${area.name}`)
    }

    const clickedOutside = (evt) => {
        const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY }
        hoveredArea(`${JSON.stringify(coords)}`)
    }

    return (
        <>
            <div className="relative">
                <ImageMapper
                    src={props.item && props.item.imgUrl}
                    map={props.map}
                    imgWidth={500}
                    width={500}
                    height={400}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={(area) => clicked(area)}
                    onImageClick={(evt) => clickedOutside(evt)}
                />
                {hoveredArea && (
                    <div
                        style={{
                            width: "100%",
                            zIndex: '99',
                            padding: '5px',
                            fontWeight: 'bold',
                            textAlign: "center",
                            position: 'absolute',
                            background:
                                hoveredArea.preFillColor || 'rgba(0, 0, 0, 0.7)',
                            color: hoveredArea.fillColor || 'white',
                        }}
                    >
                        {hoveredArea.name}
                    </div>
                )}
            </div>
        </>
    )

}

export default ImageMap