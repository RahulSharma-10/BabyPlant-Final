import { NextPage } from "next";
import Img from "next/image";

const PeakCard: NextPage<{ data: string[] }> = ({ data }) => {
    return (
        <div className="flex flex-col justify-center lg:flex-row gap-3 md:gap-4 mt-10 mb-4 w-[90%] m-auto">
            <div className="flex gap-3 md:gap-4">
                <BigCard img={data[0]} />
                <div className="flex flex-col justify-between w-full lg:w-[16.9rem]">
                    <SmallCard img={data[1]} />
                    <SmallCard img={data[2]} />
                </div>
            </div>
            <div className="flex flex-row-reverse lg:flex-row gap-3 md:gap-4">
                <BigCard img={data[3]} />
                <div className="flex flex-col justify-between w-full lg:w-[16.9rem]">
                    <SmallCard img={data[4]} />
                    <SmallCard img={data[5]} />
                </div>
            </div>
        </div>
    )
}


const SmallCard: NextPage<{ img: string; }> = ({ img }) => {
    return <div className="h-[48%] w-full relative rounded-sm">
        <Img src={img} alt='' layout='fill' objectFit='cover' />
    </div>
}

const BigCard: NextPage<{ img: string; }> = ({ img }) => {
    return <div className="h-56 w-full md:h-[31rem] lg:w-[16.9rem] lg:h-[26.4rem] relative rounded-sm">
        <Img src={img} alt='' layout='fill' objectFit='cover' />
    </div>
}

export default PeakCard