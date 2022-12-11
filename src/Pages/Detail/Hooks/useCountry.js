import { useEffect, useState } from "react"
import axios from 'axios'
import endpoints from "../../../Constants/endpoints"



const getCountry = endpoints.getCountry


const useCountry = (code) => {
    const [country , setCountry] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [isError,setIsError] = useState(false)



    useEffect(() => {
        const getData = async () => {
            try{
                setIsError(false)
                setIsLoading(true)
                const {data} = await axios.get(getCountry(code))
                setIsLoading(false)
                setCountry(data)
            } catch(e) {
                setIsLoading(false)
                setIsError(true)
            }
        }
        getData()
    },[])



    return (
        [country,isLoading,isError]
    )
}


export default useCountry