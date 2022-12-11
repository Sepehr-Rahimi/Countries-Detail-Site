import { useEffect, useState } from "react"
import EachCountry from "./Components/EachCountry"
import axios from 'axios'




const Home = () => {
    const [countries,setCountries] = useState([])


    return(
        <div className="flex flex-col justify-center items-center w-full  " >
            <div className="flex justify-between items-center w-full bg-White shadow-md p-4 font-semibold">
                <div className="mx-4">Where in the world ?</div>
                <button className="mx-4">
                    <span>🌙</span>
                    <span>Dark mode</span>
                </button>
            </div>
            <div className="w-full flex flex-col p-16">
                <div className="flex justify-between items-center w-full ">
                    <div className="grow flex h-12 justify-center items-center shadow-md bg-White rounded-md p-3 mr-6 max-w-xl">
                        <span>🍳</span>
                        <input className="text-DarkGray grow mx-3 h-12 focus:outline-0" placeholder="Search for the country ..." type="text" />
                    </div>
                    <div className="shadow-md h-12 bg-White rounded-md p-3 w-40 flex justify-between items-center">
                        <span>Filter by region</span>
                        <span>🔽</span>
                    </div>
                </div>
                <div className="mt-10 flex flex-wrap grow justify-between">
                    
                </div>
            </div>
        </div>
    )
}


export default Home