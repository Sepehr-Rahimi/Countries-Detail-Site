import { useState } from "react"
import { useEffect } from "react"
import sun from './SVG`s/sun.svg'
import moon from './SVG`s/moon.svg'




const ThemeToggleButton = () => {
    const [theme,steTheme] = useState()


    useEffect(() => {
        if (!localStorage.theme) {
            if (matchMedia('(prefers-color-scheme: dark)').matches)
            localStorage.setItem('theme','dark')
            else {
                localStorage.setItem('theme','light')
            }
        }
    },[])



    useEffect(() => {
        if (localStorage.theme === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
        console.log('miad')
      },[theme])




    const toggleTheme = () => {
        if (localStorage.theme === 'dark'){
            localStorage.theme = 'light'
            steTheme('light')
        }
        else {
            localStorage.theme = 'dark'
            steTheme('dark')
        }
    }

    if (theme === 'light'){
        return(
            <button onClick={toggleTheme} className="mx-4 flex justify-center items-center">
                <img className="w-10 h-10 mr-3" src={moon} alt="dark mode" />
                <span>Dark mode</span>
            </button>
    
        )
    }
    if (theme === 'dark'){
        return(
            <button onClick={toggleTheme} className="mx-4 flex justify-center items-center">
                <img className="w-10 h-10 mr-3" src={sun} alt="light mode" />
                <span>Light mode</span>
            </button>
    
        )
    }
}

export default ThemeToggleButton