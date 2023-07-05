import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'

const Corps = () => {
    const [selectedBuilding, setSelectedBuilding] = useState(null)

    useEffect(() => { }, [selectedBuilding])

    return (
        <section
            id="container"
            className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#edf2f7]"
        >
            <Navigation />
            <div className="flex lg:flex-row flex-col  my-28  md:my-36 border-gray-800 rounded-xl border-4 bg-gray-100">
                <div className=" w-[350px] md:w-[450px] lg:w-[325px] xl:w-[400px] h-fit flex flex-col items-center text-left justify-center focus:ring-4 focus:outline-none font-medium p-4 rounded-lg  bg-white">
                    <div className="flex gap-5 items-center border-b-4">
                        <div className="flex flex-col">
                            <span className="flex items-center gap-2">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                    <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                </svg>
                                <h3 className="text-xl py-4">Първи корпус</h3>
                            </span>
                            <p className="text-sm text-left mb-4 font-normal lg:text-xl xl:px-8 text-gray-600">
                                бул "Княз Борис |-ви" 77,
                                <br />
                                9002 Варна Цетър, Варна
                            </p>
                        </div>
                        <button
                            id="buildingOne"
                            type="button"
                            onClick={() => setSelectedBuilding('mapOne')}
                        >
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className="flex gap-5 border-b-4">
                        <div className="flex flex-col">
                            <span className="flex items-center gap-2">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                    <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                </svg>
                                <h3 className="text-xl py-4">Втори корпус</h3>
                            </span>
                            <p className="text-sm mb-4 font-normal lg:text-xl xl:px-8 text-gray-600">
                                ул "Евлоги Георгиев" 24,
                                <br />
                                9010 Левски, Варна
                            </p>
                        </div>
                        <button
                            id="buildingTwo"
                            type="button"
                            onClick={() => setSelectedBuilding('mapTwo')}
                        >
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className="flex gap-5 ">
                        <div className="flex flex-col">
                            <span className="flex items-center gap-2">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                    <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                </svg>
                                <h3 className="text-xl py-4">Трети корпус</h3>
                            </span>
                            <p className="text-sm mb-4 font-normal lg:text-xl xl:px-4 text-gray-600">
                                бул "Сливница" 158 А,
                                <br />
                                9000 Сев. пром. зона, Варна
                            </p>
                        </div>
                        <button
                            id="buildingThree"
                            type="button"
                            onClick={() => setSelectedBuilding('mapThree')}
                        >
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    id="mapOne"
                    className={selectedBuilding === 'mapOne' ? '' : 'hidden'}
                >
                    <iframe
                        title="main-building"
                        className="w-full h-[380px] sm:w-[350px] md:w-[450px] lg:w-[700px]"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11631.854494743802!2d27.9199391!3d43.2102523!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4540939dfa6d5%3A0x3d401ef3c09a59bf!2sUniversity%20of%20Economics%20%E2%80%93%20Varna!5e0!3m2!1sen!2sbg!4v1686816499276!5m2!1sen!2sbg"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div
                    id="mapTwo"
                    className={
                        selectedBuilding === 'mapTwo' ? 'visible' : 'hidden'
                    }
                >
                    <iframe
                        title="second-building"
                        className="w-full h-[380px] sm:w-[350px] md:w-[450px] lg:w-[700px]"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2907.283437802055!2d27.9183736!3d43.2245167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a45442727d276d%3A0xe726627002b45875!2sUniversity%20of%20Economics%2C%20Varna%20-%20Second%20Corps!5e0!3m2!1sen!2sbg!4v1686816735312!5m2!1sen!2sbg"
                        width="700"
                        height="380"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div
                    id="mapThree"
                    className={
                        selectedBuilding === 'mapThree' ? 'visible' : 'hidden'
                    }
                >
                    <iframe
                        title="third-building"
                        className="w-full h-[380px] sm:w-[350px] md:w-[450px] lg:w-[700px]"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2907.4922658941096!2d27.8956212!3d43.2201377!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a45409acb2c291%3A0x4569fa8c265fc71c!2sCollege%20of%20Tourism%E2%80%93%20Varna!5e0!3m2!1sen!2sbg!4v1686816882817!5m2!1sen!2sbg"
                        width="700"
                        height="380"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default Corps