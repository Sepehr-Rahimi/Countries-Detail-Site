import { useState } from "react"



const DropDown = ({disabled,setFunction}) => {
    const [isOpen,setIsOpen] = useState(false)
    const [choice,setChoice] = useState('No region')


    const handleChoice = (value) => {
        setChoice(value)
        setIsOpen(!isOpen)
        setFunction(value)
    }


    return(
        <div className={`flex-col relative text-center  shadow-md h-12 bg-White dark:bg-DarkBlue rounded-md py-3 w-40  justify-between items-center ${disabled?'opacity-50':null}`}>
            <button className="w-full" disabled={disabled} onClick={() => setIsOpen(!isOpen)}>{choice}</button>
            {isOpen?
                    <ul className="rounded-lg mt-6 relative bg-inherit w-full shadow-md">
                        <li className="py-1 shadow-sm cursor-pointer hover:bg-DarkGray rounded-t-lg" value='africa' onClick={({target}) => handleChoice(target.innerHTML)} >All region</li>
                        <li className="py-1 shadow-sm cursor-pointer hover:bg-DarkGray" value='africa' onClick={({target}) => handleChoice(target.innerHTML)} >Africa</li>
                        <li className="py-1 shadow-sm cursor-pointer hover:bg-DarkGray" value='americas' onClick={({target}) => handleChoice(target.innerHTML)}>Americas</li>
                        <li className="py-1 shadow-sm cursor-pointer hover:bg-DarkGray" value='asia' onClick={({target}) => handleChoice(target.innerHTML)}>Asia</li>
                        <li className="py-1 shadow-sm cursor-pointer hover:bg-DarkGray" value='europe' onClick={({target}) => handleChoice(target.innerHTML)}>Europe</li>
                        <li className="py-1 shadow-sm cursor-pointer hover:bg-DarkGray rounded-b-lg" value='oceania' onClick={({target}) => handleChoice(target.innerHTML)}>Oceania</li>
                    </ul>
                    :null
            }
        </div>
    )
}


export default DropDown