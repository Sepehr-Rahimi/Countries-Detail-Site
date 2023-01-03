import EachCountry from "./EachCountry"
import useCountries from './../Hooks/useCountries'
import allCountries from "../../../Constants/allCountries"
import EachCountrySkleton from "./EachCountrySkleton"




const AllCountries = () => {


    // const [countries,isLoading,isError] = useCountries()
    const isLoading = false 
    const isError = false
    const countries = allCountries()
    console.log(countries)


    if (isError) {
        return(
            <div className="w-full mt-6 text-center border-2 border-DarkBlue rounded-md">Not Found</div>
        )
    }
    else if (isLoading) {
        return(
            <EachCountrySkleton/>
        )
    }
    else {
        return(
            <div className="mt-10 flex flex-wrap grow justify-between w-full">
                {countries.map(({flag,capital,name,population,region,alpha3Code}) => {
                    return(
                        <EachCountry key={name} alpha3Code={alpha3Code} flagUrl={flag} capital={capital} name={name} population={population} region={region} />
                    )
                })}
            </div>
            )
    }

    
    
}



export default AllCountries