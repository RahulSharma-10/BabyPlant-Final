import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextPage } from 'next';

const CustomCarousal: NextPage<CustomCarousalProps> = ({
	data,
	RenderCard,
	slidesToShow,
	fold,
	keyName,
	slidesForIpad = 3
}) => {
	const settings = {
		className: 'center',
		centerMode: true,
		infinite: true,
		centerPadding: '15px',
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: slidesForIpad
				}
			},
			{
				breakpoint: 540,
				settings: {
					slidesToShow
				}
			}
		]
	};

	return (
		<>
			<Slider {...settings}>
				{data.map((e, index) => (
					<RenderCard
						{...e}
						key={`${keyName}-card-${index}`}
						fold={fold + '-item-' + index}
					/>
				))}
			</Slider>
			<style jsx>{``}</style>
		</>
	);
};

export default CustomCarousal;
interface CustomCarousalProps {
	data: Array<any>;
	RenderCard: any;
	slidesToShow: number;
	fold?: string;
	keyName: string;
	slidesForIpad?: number;
}