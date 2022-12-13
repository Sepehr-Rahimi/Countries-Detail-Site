import EachCountry from "./EachCountry"
import useFilterdCountries from "../Hooks/useFilterdCountries"

const FilterdCountries = ({region}) => {


    const [countries,isLoading,isError] = useFilterdCountries(region)




    if (isError) {
        return(
            <div className="w-full text-center mt-6 border-2 border-DarkBlue rounded-md">Not Found</div>
        )
    }
    else if (isLoading) {
        return(
            <div className="w-full text-center mt-6 border-2 border-DarkBlue rounded-md">Loading ...</div>
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
        )}
}



export default FilterdCountries