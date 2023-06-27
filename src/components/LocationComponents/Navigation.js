import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="absolute top-[0.8%] lg:top-[2.5%] md:top-[1.5%] sm:top-[1%] inset-x-[auto] flex gap-x-10 font-medium font-serif sm:text-lg md:text-xl lg:text-2xl" >
            <Link to="/location/corps">
                <button
                    type="button"
                    className="hover:text-gray-800 hover:underline underline-offset-8"
                >
                    Корпуси
                </button>
            </Link>
            <Link to="/location/floors">
                <button
                    type="button"
                    className="hover:text-gray-800 hover:underline underline-offset-8"
                >
                    Етажи-първи корпус
                </button>
            </Link>
        </div >
    )
}

export default Navigation