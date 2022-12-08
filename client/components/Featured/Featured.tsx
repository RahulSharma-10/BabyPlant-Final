import { NextPage } from 'next';
import FeaturedItem from './FeaturedItem';
import toi from './../../Assets/The_times_of_india.svg';

const Featured=()=>{
     
    const items = [
        {
            src: toi,
            url: 'https://timesofindia.indiatimes.com/blogs/voices/in-this-digital-age-here-are-some-suggestions-for-making-your-child-smart/'
        },
        {
            src: toi,
            url: 'https://www.newindianexpress.com/lifestyle/health/2021/sep/26/a-head-start-2362854.html'
        },
        {
            src: toi,
            url: 'http://bweducation.businessworld.in/article/How-Do-Edtech-Platforms-Impact-Learning/23-07-2021-397726/'
        },
        {
            src: toi,
            url: 'https://podcasts.apple.com/us/podcast/insiders-talk-with-pooja-midha-and-kavitha/id1584152928?i=1000541033962'
        },
        {
            src: toi,
            url: 'https://open.spotify.com/episode/2RvYDUK7fVV3sEOiHXYTMa'
        },
        {
            src: toi,
            url: 'https://yourstory.com/herstory/2021/09/women-entrepreneurs-early-learning-tech-toys/amp'
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