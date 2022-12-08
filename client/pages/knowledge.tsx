import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import Scroll from "../components/Scroll";

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