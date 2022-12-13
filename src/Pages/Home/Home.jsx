import { useEffect, useState } from "react"
import ThemeToggleButton from "../Common/ThemeToggleButton"
import AllCountries from "./Components/Allcountries"
import DropDown from "./Components/DropDown"
import FilterdCountries from "./Components/FilterdCountries"
import SearchedCountries from "./Components/SearchedCountries"




const Home = () => {
    const [region,setRegion] = useState('All region')
    const [searchName,setSearchName] = useState('')




    
    
    
    
    const ShowCountries = () => {
        if (region === 'All region' && !searchName){
            return(<AllCountries />)
        }
        else if (searchName) {
            return(<SearchedCountries name={searchName} />)
        }
        else if (region !== 'All region') {
            return(<FilterdCountries region={region} />)
        }
    } 



    return(
        <div className="flex flex-col justify-center items-center w-full" >
            <div className="flex justify-between items-center w-full bg-White dark:bg-DarkBlue shadow-md p-4 font-semibold">
                <div className="mx-4">Where in the world ?</div>
                <ThemeToggleButton />
            </div>
            <div className="w-full flex flex-col p-16">
                <div className={`flex justify-between items-center w-full border-b-2 pb-6 `}>
                    <div className={`${region !== 'All region' ? 'opacity-50':null} grow dark:bg-DarkBlue flex h-12 justify-center items-center shadow-md bg-White rounded-md p-3 mr-6 max-w-xl`}>
                        <span>🍳</span>
                        <input onChange={(({target}) => {
                            setSearchName(target.value)
                        })} value={searchName} disabled={region !== 'All region'} className="text-DarkGray bg-inherit grow mx-3 h-12 focus:outline-0" placeholder="Search for the country ..." type="text" />
                    </div>
                    <DropDown disabled={searchName} setFunction={setRegion} />
                </div>
                <ShowCountries />
            </div>
        </div>
    )
}


export default Home