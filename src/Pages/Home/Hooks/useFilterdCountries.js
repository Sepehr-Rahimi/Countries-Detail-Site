import { useEffect, useState } from "react"
import axios from 'axios'
import endpoints from "../../../Constants/endpoints"



const getFilterdCountries = endpoints.getFilterdCountries


const useFilterdCountries = (region) => {
    const [countries , setCountries] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [isError,setIsError] = useState(false)



    useEffect(() => {
        const getData = async () => {
            try{
                setIsError(false)
                setIsLoading(true)
                const {data} = await axios.get(getFilterdCountries(region))
                setIsLoading(false)
                setCountries(data)
            } catch(e) {
                setIsLoading(false)
                setIsError(true)
            }
        }
        getData()
    },[])



    return (
        [countries,isLoading,isError]
    )
}


export default useFilterdCountries