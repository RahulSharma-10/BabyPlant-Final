import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import Scroll from "../components/Scroll";
import Slider from "../components/Slider";
import {Gallery} from "../components/Gallery";
import { BTPPhotosMetadata} from "./data";

const Knowledge=()=>{
    return(
        <>
        <Scroll/>
        <Head>
        <title>Knowledge</title>
        </Head>
        <Navbar/>
        <div className="gallery">
        <Gallery
          photos={BTPPhotosMetadata}
          title=""
          titleWidth={8.2}
          category="BTP"
          alt="PPT photo"
        />
        </div>
        </>
    )
}
export default Knowledge;