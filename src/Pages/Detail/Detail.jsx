import CountryDetail from "./Components/CountryDetail"
import {useNavigate} from 'react-router-dom'
import ThemeToggleButton from "../Common/ThemeToggleButton"

const Detail = () => {


    const navigate = useNavigate()
    return(
        <div className="flex flex-col">
            <div className="flex justify-between items-center w-full bg-White dark:bg-DarkBlue shadow-md p-4 font-semibold">
                <div className="mx-4">Where in the world ?</div>
                <ThemeToggleButton />
            </div>
            <div className="w-11/12 mx-auto flex flex-col my-10">
                <button className="hover:scale-95 rounded-md text-center w-20 h-8 bg-White dark:bg-DarkBlue  mb-8 border-2 border-DarkBlue" onClick={() => {navigate(-1)}}>Back</button>
                <CountryDetail/>
            </div>
        </div>
    )
}


export default Detail