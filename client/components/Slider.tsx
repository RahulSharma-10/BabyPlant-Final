import MediaCard from "./MediaCard";
import { NextPage } from 'next';
import { ReactNode } from "react";
import ppt from './../Assets/PPT/Copy-of-BTP Presentation_MidSem_7thSemester_page-0001.jpg'

const images=[
    {
        src:'https://im3.ezgif.com/tmp/ezgif-3-4f3debef1f.jpg',
        type:'image'
    },
    {
        src:'https://im3.ezgif.com/tmp/ezgif-3-79af32cf4a.jpg',
        type:'image'
    },
    {
        src:'https://im3.ezgif.com/tmp/ezgif-3-24f41578ef.jpg',
        type:'image'
    },
    {
        src:'https://im3.ezgif.com/tmp/ezgif-3-098bec3c0d.jpg',
        type:'image'
    },
]
const Slider=()=>{
    return(
        <>
        <div className="w-full h-full bg-gray-900">
        <MediaCard media={images} RenderCard={BannerMediaCard} />
        </div>
        </>
    );
}
//image height and width for mobile and laptop, and adjust md h and w to fit somewhere like home
const BannerMediaCard: NextPage<{ children: ReactNode }> = ({ children }) => (
	<div className='m-2 w-60 h-80 md:w-[35rem] md:h-[25rem]'>{children}</div>
);
export default Slider;