import Navbar from "../components/Navbar";
import AboutHeader from "../components/AboutHeader";
import AboutDesc from "../components/AboutDesc";
import AboutTeam from "../components/AboutTeam";
import Footer from "../components/Footer";
import Head from "next/head";
import Scroll from "../components/Scroll";
import AboutUsGallery from "../components/AboutUsGallery/AboutUsGallery";

const AboutUs=()=>{
    return(
        <div>
            <Scroll/>
            <Head>
                <title>BabyPlant - About Us</title>
            </Head>
            <Navbar/>
            <AboutHeader/>
            <AboutUsGallery/>
            <AboutDesc />
            <AboutTeam />
            <Footer/>
        </div>
    )
}
export default AboutUs;