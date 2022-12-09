import { NextPage } from 'next';
import FeaturedItem from './FeaturedItem';
import toi from './../../Assets/The_times_of_india.svg';
import pk from './../../Assets/logo-1.svg';
import ie from './../../Assets/indian-express-logo-n.svg';
import msme from './../../Assets/msme.svg';
import ht from './../../Assets/ht-logo.svg';
import hindu from './../../Assets/thehindu-logo.svg';

const Featured=()=>{
     
    const items = [
        {
            src: toi,
            url: '#'
        },
        {
            src: pk,
            url: '#'
        },
        {
            src: ie,
            url: '#'
        },
        {
            src: msme,
            url: '#'
        },
        {
            src: ht,
            url: '#'
        },
        {
            src: hindu,
            url: '#'
        }
    ];
    return(
        <div className='flex justify-center w-full bg-gray-900 pt-8 pb-20 md:pt-[52px] md:pb-24 lg:pt-9 lg:pb-[84px]'>
		<div className='flex flex-col items-center justify-center flex-wrap gap-10 md:gap-12 max-w-7xl w-full'>
			<h1 className='tracking-wide text-white text-center text-4xl font-bold'>BabyPlant in the news</h1>
			<div className='flex flex-wrap items-center justify-center gap-6 lg:gap-7'>
				{items.map((item, i) => (
					<FeaturedItem key={item.src +i+ '-featured-item'} {...item} />
				))}
			</div>
		</div>
	</div>
    )
}


export default Featured;