import { NextPage } from "next";
import  DivCarousal from "./DivCarousal";

const ToysCommon: NextPage<PurchaseToysProps> = ({ items, RenderCard }) => {
    return (
        <div className="py-12 pt-2 bg-gray-900">
             {/* <h1 className='tracking-wide text-white text-center'>{heading}</h1>  */}
            <DivCarousal media={items} RenderCard={RenderCard} />
        </div>
    )
}

export default ToysCommon;

interface PurchaseToysProps {
    heading: string;
    items: { src: string[] }[];
    RenderCard: any;
}