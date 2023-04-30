import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="absolute top-[5%] left-auto inset-x-[auto] flex gap-x-10 font-semibold sm:text-lg md:text-xl lg:text-2xl" >
            <Link to="/location/corps">
                <button
                    type="button"
                    className="hover:text-gray-600 hover:underline underline-offset-8"
                >
                    Корпуси
                </button>
            </Link>
            <Link to="/location/floors">
                <button
                    type="button"
                    className="hover:text-gray-600 hover:underline underline-offset-8"
                >
                    Етажи-първи корпус
                </button>
            </Link>
            <Link to="/location/library">
                <button
                    type="button"
                    className="hover:text-gray-600 hover:underline underline-offset-8"
                >
                    Библиотека
                </button>
            </Link>
        </div >
    )
}

export default Navigation