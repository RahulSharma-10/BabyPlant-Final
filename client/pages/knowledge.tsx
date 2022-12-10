import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import Scroll from "../components/Scroll";
import Slider from "../components/Slider";
import {Gallery} from "../components/Gallery";
import { amsterdamPhotosMetadata, londonPhotosMetadata } from "./data";

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
          photos={amsterdamPhotosMetadata}
          title=""
          titleWidth={8.2}
          category="BTP"
          alt="A building in Amsterdam Zuid at night"
        />
        </div>
        <Footer/>
        </>
    )
}
export default Knowledge;