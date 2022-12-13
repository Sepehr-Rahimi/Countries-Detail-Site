
import {useNavigate} from 'react-router-dom'



const EachCountry = ({flagUrl,name,population,region,capital,alpha3Code}) => {
    const navigate = useNavigate()
    const detailLink = '/detail/' + alpha3Code



    return(
        <span onClick={() => {navigate(detailLink)}} className="cursor-pointer flex flex-col max-w-xs rounded-lg shadow-md mb-20 mx-auto w-80 h-96 dark:shadow-White">
            <img  className="w-full h-44 rounded-t-lg" src={flagUrl} alt={name} />
            <div className="flex flex-col px-6">
                <div className="font-bold mt-6 text-xl">{name}</div>
                <div className="mt-6 mb-10">
                    <div>
                        <span className="font-medium">Population : </span>
                        <span className="font-light">{population}</span>
                    </div>
                    <div>
                        <span className="font-medium">Region : </span>
                        <span className="font-light">{region}</span>
                    </div>
                    <div>
                        <span className="font-medium">Capital : </span>
                        <span className="font-light">{capital}</span>
                    </div>
                </div>
            </div>
        </span>
    )
}


export default EachCountry