import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import Scroll from "../components/Scroll";
import Slider from "../components/Slider";

const Knowledge=()=>{
    return(
        <>
        <Scroll/>
        <Head>
        <title>Knowledge</title>
        </Head>
        <Navbar/>
        <Footer/>
        </>
    )
}
export default Knowledge;