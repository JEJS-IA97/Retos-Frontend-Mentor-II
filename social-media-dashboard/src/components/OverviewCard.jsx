import facebookLogo from '../assets/images/icon-facebook.svg'
import twitterLogo from '../assets/images/icon-twitter.svg'
import instagramLogo from '../assets/images/icon-instagram.svg'
import YouTubeLogo from '../assets/images/icon-youtube.svg'
import iconUp from '../assets/images/icon-up.svg'
import iconDown from '../assets/images/icon-down.svg'

const networkLogos = {
    Facebook: facebookLogo,
    Twitter: twitterLogo,
    Instagram: instagramLogo,
    YouTube: YouTubeLogo
}

const networkColors = {
    Facebook: 'bg-Facebook',
    Twitter: 'bg-Twitter',
    Instagram: 'bg-Instagram',
    YouTube: 'bg-YouTube'
}


export const OverviewCard = ({user, audienceType, audience, network, today, isUp}) => {
    return(
        <article className="bg-Light-Grayish-Blue w-[326px] h-[215px] rounded-[5px] mx-auto overflow-hidden text-center dark:bg-Dark-Desaturated-Blue hover:brightness-95 cursor-pointer hover:dark:brightness-125 xl:w-[260px] xl:h-[220px] ">
            <div className={`${networkColors[network]} h-[4px] mb-8`} ></div>
            <div className='flex items-center place-content-center gap-2 mb-[2px]'>
                <img src={networkLogos[network]} alt={`logo ${network}`} />
                <p className='text-xs text-Dark-Grayish-Blue font-bold'>{user}</p>
            </div>
            <p className='text-[56px] font-bold text-Very-Dark-Blue dark:text-white'>{audience}</p>
            <p className='uppercase tracking-[5px] text-Dark-Grayish-Blue text-xs mb-6'>{audienceType}</p>
            <div className='flex items-center place-content-center gap-1'>
                <img src={isUp ? iconUp : iconDown} alt="icon arrow" />
                <p className={`text-xs font-bold ${isUp ? 'text-Lime-Green' : 'text-red-600'}`}>{today} Today</p>
            </div>
        </article>
    )

}

export const OverviewTodayCard = ({network, statsType, stats, porcentage, isUp}) => {
    return(
        <article className='bg-Light-Grayish-Blue w-[325px] h-[130px] mb-[15px] mx-auto rounded-[5px] p-[27px] cursor-pointer hover:brightness-95 dark:bg-Dark-Desaturated-Blue hover:dark:brightness-125 xl:w-[260px]'> 
            <div className='flex items-center justify-between'>
                <p className='text-Dark-Grayish-Blue font-bold'>{statsType}</p>
                <img src={networkLogos[network]} alt="" />
            </div>
            <div className='flex justify-between' >
                <p className='flex items-center text-[40px] h-[40px] mt-[15px] font-bold text-Very-Dark-Blue dark:text-white'>{stats}</p>
                <div className='flex items-center place-content-center gap-1 mt-[30px]'>
                <img src={isUp ? iconUp : iconDown} alt="icon arrow" />
                <p className={`text-xs font-bold ${isUp ? 'text-Lime-Green' : 'text-red-600'}`}>{porcentage}%</p>
            </div>
            </div>
        </article>
    )
}