import { NextPage } from 'next';
import { useState, useEffect, useCallback } from 'react';
import Img from 'next/image';

const DivCarousal: NextPage<DivCarousalProps> = ({
    media,
    RenderCard
}) => {
    const [index, setIndex] = useState(1);
    const [src, setSrc] = useState<string[]>();

    useEffect(() => {
        const timeout = setTimeout(
            () => setIndex(index === media.length ? 1 : index + 1),
            4000
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
        (        itemIndex: number) => (itemIndex - (index - 1)) * 100,
        [index]
    );

    return (
        <div className='w-full flex flex-col relative lg:gap-6 items-center'>
            <div className='flex w-full h-full overflow-hidden'>
                {media.map(({ src }, i) => (
                    <div
                        className='w-full h-full -mr-[100%]'
                        key={'media-box-' + i}>
                        <>
                            <div className='transform-position w-full h-full flex relative justify-center -mr-[100%]'>
                                <div className='relative h-full w-full'>
                                    <RenderCard data={src} />
                                </div>
                            </div>
                            <style jsx>{`
					.transform-position {
						transform: translateX(${getXPosition(i)}%);
						transition: transform 0.6s ease-in-out;
					}
				`}</style>
                        </>
                    </div>
                ))}
            </div>
            {media.length > 1 && (
                <div className='flex gap-1 '>
                    {media.map((_, i) => (
                        <div
                            key={'-media-card-dot' + i}
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

export default DivCarousal;

interface DivCarousalProps {
    media: { src: string[] }[];
    RenderCard: NextPage<any>;
}
