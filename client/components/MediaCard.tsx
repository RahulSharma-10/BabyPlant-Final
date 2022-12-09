import { NextPage } from 'next';
import { useState, useEffect, useCallback } from 'react';
import ReactPlayer from 'react-player';
import Img from 'next/image';

const MediaCard: NextPage<any> = ({
	media,
	RenderCard,
	...restProps
}) => {
	const [index, setIndex] = useState(1);
	const [src, setSrc] = useState('');

	useEffect(() => {
		const timeout = setTimeout(
			() => setIndex(index === media.length ? 1 : index + 1),
			3000
		);

		return () => clearTimeout(timeout);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [src]);

	useEffect(
		() => setSrc(media[index - 1].src),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[index]
	);

	const getXPosition = useCallback(
        (		itemIndex: number) => (itemIndex - (index - 1)) * 100,
		[index]
	);

	const getMediaBox = (mediaUrl: string, itemIndex: number) => {
		const type = media.find(({ src }:{src:any}) => src === mediaUrl)?.type;

		return (
			<>
				<div className='transform-position w-full h-full flex relative justify-center -mr-[100%]'>
					<div className='relative h-full w-full'>
						{getMedia(mediaUrl, type)}
					</div>
				</div>
				<style jsx>{`
					.transform-position {
						transform: translateX(${getXPosition(itemIndex)}%);
						transition: transform 0.6s ease-in-out;
					}
				`}</style>
			</>
		);
	};

	const getMedia = (mediaUrl: string, type?: 'image' | 'video' | 'div') => {
		switch (type) {
			case 'video':
				return (
					<ReactPlayer
						url={mediaUrl}
						loop
						playing
						muted
						controls
						width='100%'
						height='100%'
						
					/>
				);

			case 'image':
				return (
					<Img
						src={mediaUrl}
						alt='media'
						layout='fill'
						priority
						objectFit='contain' //contain in case of image size
						
					/>
				);

			default:
				return 'Media type not supported';
		}
	};
//whole container for mobie and laptop, do w-fit and delete md:h-[630px] to fit in a place like home
	return (
		<div className='w-fit flex flex-col relative gap-7 md:gap-4 lg:gap-6 items-center'>
			<RenderCard {...restProps}>
				<div className='flex w-full h-full overflow-hidden'>
					{media.map(({ src }: any, i: number) => (
						<div
							className='w-full h-full -mr-[100%]'
							key={src + i + '-media-box'}>
							{getMediaBox(src, i)}
						</div>
					))}
				</div>
			</RenderCard>
			{media.length > 1 && (
				<div className='flex gap-1 '>
					{media.map(({ src }: any, i: number) => (
						<div
							key={src + i + '-media-card-dot'}
							onClick={() => setIndex(i + 1)}
							className={`h-2 md:h-3 cursor-pointer ${index === i + 1
								? 'bg-white w-8 md:w-10 rounded-md'
								: 'bg-white w-2 md:w-3 rounded-full'
								}`}></div>
					))}
				</div>
			)}
		</div>
	);
};

export default MediaCard;