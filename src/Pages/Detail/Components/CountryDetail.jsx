import useCountry from "../Hooks/useCountry"
import {useParams} from 'react-router-dom'


const CountryDetail = () => {

    const {code} = useParams()

    const [country,isLoading,isError] = useCountry(code)
    const {nativeName,topLevelDomain,population,currencies,region,languages,subregion,capital,flag,name} = country

    return(
        <div className="flex flex-wrap justify-between items-center">
            <img className="w-4/5 max-w-xl rounded-md mx-auto" src={flag} alt={nativeName} />
            <div className="flex flex-col">
                <div className="p-4 font-bold text-xl border-b-2 border-DarkBlue">{name}</div>
                <div className="flex flex-wrap max-w-xl ">
                    <div className="w-1/2 p-4">
                        <span className="font-medium">NativeName : </span>
                        <span className="font-light">{nativeName}</span>
                    </div>
                    <div className="w-1/2 p-4">
                        <span className="font-medium">TopLevelDomain : </span>
                        <span className="font-light">{topLevelDomain}</span>
                    </div>
                    <div className="w-1/2 p-4">
                        <span className="font-medium">Population : </span>
                        <span className="font-light">{population}</span>
                    </div>
                    <div className="w-1/2 p-4">
                        <span className="font-medium">Region : </span>
                        <span className="font-light">{region}</span>
                    </div>
                    <div className="w-1/2 p-4">
                        <span className="font-medium">Languages : </span>
                        <span className="font-light">{
                        languages?.map(({name}) => (
                            <span key={name}>{name} , </span>
                        ))
                        }</span>
                    </div>
                    <div className="w-1/2 p-4">
                        <span className="font-medium">Currencies : </span>
                        <span className="font-light">{
                            currencies?.map(({name}) => (
                                <span key={name}>{name} , </span>
                                ))
                            }</span>
                    </div>
                    <div className="w-1/2 p-4">
                        <span className="font-medium">subRegion : </span>
                        <span className="font-light">{subregion}</span>
                    </div>
                    <div className="w-1/2 p-4">
                        <span className="font-medium">capital : </span>
                        <span className="font-light">{capital}</span>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default CountryDetail