import ToysCommon from "./ToysCommon";
import PeakCard from "./PeakCard";


const SneakPeakData = {
    heading: 'Sneak Peak',
    items: [{
        src: [
            'https://i.postimg.cc/J0GRbKTZ/311520711-601986595056487-2146602622595654295-n.jpg', //string sources
            'https://i.postimg.cc/2SvhQ7Js/306321349-5763637417022453-1100918277293015410-n.jpg',
            'https://i.postimg.cc/Y266ZHxv/306129870-128765909901166-95907882551851389-n.jpg',
            'https://i.postimg.cc/T1bNxJZx/show2.jpg',
            'https://i.postimg.cc/yNNPFbqL/144977320-454348172580215-4770542639331673773-n.jpg',
            'https://i.postimg.cc/sfn3mBZK/161380311-310507563758247-2780827598352955006-n.jpg'
        ]
    }]
}
const AboutUsGallery=()=>{
    return(
        <>
        <ToysCommon {...SneakPeakData} RenderCard={PeakCard} />
        </>
    )
}
export default AboutUsGallery;