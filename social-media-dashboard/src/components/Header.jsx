import { useEffect, useState} from "react"

export const Header = () => {

    const [darkMode, setDarkMode] = useState(false)

    const handleClick= () => {
        setDarkMode(!darkMode)
    }

    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add('dark')
        }
        else{
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])
   
    return(
        <header className="bg-Very-Pale-Blue dark:bg-Very-Dark-Blue h-[235px] rounded-b-[20px] pt-8 px-6 mb-[940px] md:mb-[460px] xl:mb-[177px]">
            <div className="md:max-w-[720px] xl:max-w-[1110px] max-w-[326px] place-content-center absolute left-0 right-0 mx-auto xl:flex xl:justify-between xl:items-center">
            <div className="xl:flex xl:flex-col xl:">
            <h1 className="text-Very-Dark-Blue dark:text-Very-Pale-Blue text-2xl font-bold mb-1">Social Media Dashboard</h1>
            <p className="text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold mb-6 xl:mb-0">Total Followers: 23,004</p>
            </div>
            <hr className="bg-black mb-[19px] xl:hidden"/>
            <div className="flex justify-between xl:justify-end xl:gap-5">
                <p className="text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold">Dark Mode</p>
                <label htmlFor="darkmode" className="border relative bg-Toggle w-12 h-6 rounded-full overflow-hidden cursor-pointer flex items-center pl-[3px]">
                     <input onClick={handleClick} id="darkmode" type="checkbox" className="peer sr-only"/>
                     <div className="w-full h-full peer-checked:bg-Toggle-Gradient absolute top-0 left-0"></div>
                     <div className="w-[18px] h-[18px] bg-Light-Grayish-Blue rounded-full peer-checked:translate-x-[23px] transition-all"></div>
                </label>
            </div>
            </div>
        </header>
    )
}