import { NextPage } from 'next';
import Img from 'next/image';
import Link from 'next/link';

const FeaturedItem: NextPage<any> = ({ src }) => (
		<div className=' w-40  h-16 md:w-[276px] md:h-[92px] lg:w-[300px] lg:h-[100px] py-3 px-2 md:py-5 md:px-8 lg:py-6 lg:px-8 relative shadow-md rounded-md bg-white flex items-center justify-center'>
			<div className='relative w-full h-full'>
				<Img
					src={src}
					objectFit='contain'
					layout='fill'
					alt=''
					priority
				/>
			</div>
		</div>
);

export default FeaturedItem;