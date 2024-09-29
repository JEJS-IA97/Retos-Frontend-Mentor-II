import data from '../../data/data.json';
import { OverviewCard, OverviewTodayCard } from './OverviewCard'

const convertNumber = (number) => {
    if(number >=10000){
        number = number/1000
        return `${number}k`
    }
    return number
}

export const OverviewContainer = () => { 

    return (
        <section className='max-w-[1110px] flex flex-wrap gap-[25px] xl:gap-[23px] place-content-center absolute top-[190px] xl:top-[142px] left-0 right-0 mx-auto'>
            {
                data.overview.map(object => 
                    <OverviewCard 
                    key={object.id}
                    user={object.user}
                    audienceType={object.audienceType}
                    audience={convertNumber(object.audience)}
                    network={object.network}
                    isUp={object.isUp}
                    today={object.today}
                    />
                )
            }
        </section>
    )
}

export const OverViewTodayContainer = () => {
   
    return(
        <section className='md:max-w-[1110px] max-w-[326px] place-content-center absolute left-0 right-0 mx-auto'>
            <h2 className='text-[26px] font-bold mb-[27px] text-Dark-Grayish-Blue'>OverView - Today</h2>
            <div className='flex flex-wrap xl:gap-[10px]
            xl:gap-x-[23px]'> 
            {
                data['overview-today'].map(object =>
                    <OverviewTodayCard key={object.id}
                    network={object.network}
                    statsType={object.statsType}
                    stats={convertNumber(object.stats)}
                    porcentage={object.porcentage}
                    isUp={object.isUp}/>
                )
            }
        </div>
        </section>
        
    )

}