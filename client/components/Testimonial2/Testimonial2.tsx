
import TestimonialCard from './TestimonialCard';
import CustomCarousal from './CustomCarousal';
//import bgTest from './../../Assets/card-background.jpeg';
const data = [
	{
		
		message:
			"Hello, it has been a great journey with Wonderhood. I couldn't have asked for a better preschool for my daughter. She just completed 6 months with wonderLearn. It has been an amazing experience. ",
		writer: 'Sameer Saxena '
	},
	{
		
		message:
			"Wonderlearn platform is a flexible platform as they offer evening classes. My child Vivaansh used to eagerly wait for the classes n activities. Toys,teaching and technology was impressive and qualitative.",
		writer: 'Chethana '
	},

	{
		message:
			"During covid it is very difficult to make kids sit and listen to the class but wonderlearn made it by taking the kids through the course by changing their mode from boredom to learning mood with lots of fun. Looking forward to more and better levels of courses.",
		writer: 'Swarna '
	}
];
const Glimpses2=()=>{
    return (
        <>
		<div className='bg-repeat bg-gray-900 bg-contain bg-top flex flex-col items-center w-full pt-11 pb-[72px] relative'>
			<div className='relative w-16 md:w-[100px] h-16 md:h-[100px] -mb-[72px] -ml-[308px] md:-mb-24 md:-ml-[32rem] lg:-ml-[42rem] -z-20'>
				 
			</div>
			<h1 className='pt-11 md:pt-12 lg:pt-9 pb-[68px] md:pb-[88px] lg:pb-[60px] text-center text-white tracking-wide text-4xl font-bold'>
				What our happy customers say?
			</h1>
			<div className='hidden lg:flex items-center justify-center gap-4 '>
				{data.map((e, i) => (
					<div
						key={`testimonialCard-${i + 1}`}
						className={i % 2 == 0 ? 'scale-down' : ''}>
						<TestimonialCard
							{...e}
							//background={bgTest}
						/>
					</div>
				))}
			</div>
			<div className='lg:hidden w-[52rem] mb-5'>
				<CustomCarousal
					data={data}
					RenderCard={TestimonialCard}
					slidesToShow={1}
					slidesForIpad={1}
					keyName='testimonial'
				/>
			</div>
		</div>
		<style jsx>
			{`
				.scale-down {
					transform: scale(0.8);
				}
			`}
		</style>
	</>
    )
}



export default Glimpses2;