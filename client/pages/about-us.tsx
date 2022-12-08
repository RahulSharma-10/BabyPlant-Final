import Navbar from "../components/Navbar";
import AboutHeader from "../components/AboutHeader";
import AboutDesc from "../components/AboutDesc";
import AboutTeam from "../components/AboutTeam";
import Footer from "../components/Footer";
import Head from "next/head";
import Scroll from "../components/Scroll";

const AboutUs=()=>{
    return(
        <div>
            <Scroll/>
            <Head>
                <title>BabyPlant - About Us</title>
            </Head>
            <Navbar/>
            <AboutHeader/>
            <AboutDesc />
            <AboutTeam />
            <Footer/>
        </div>
    )
}
export default AboutUs;