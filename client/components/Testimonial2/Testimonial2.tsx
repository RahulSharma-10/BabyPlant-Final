
import TestimonialCard from './TestimonialCard';
import CustomCarousal from './CustomCarousal';
//import bgTest from './../../Assets/card-background.jpeg';

const data = [
	{
		
		message:
			"Pleasant experience and insightful advice for taking care of these plants in a simple way instead of just going by my own understanding. I felt like baby plant did a good job in arranging the delivery and also sharing care to guide to us. ",
		writer: 'Sameer Saxena '
	},
	{
		
		message:
			"It is my second order already and I'm very happy with my purchase, plants were packed very carefully and delivered well, no damage. I highly recommend baby plant to everyone! Will order again!",
		writer: 'Chethana'
	},

	{
		message:
			"I got few plants from baby plant yesterday and they answered to all my questions before I proceed with the purchase and they even made a follow up to offer plant care tips. Great work guys, very satisfied with their services.",
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