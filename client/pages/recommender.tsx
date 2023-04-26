import Navbar from "../components/Navbar";
import Head from "next/head";
import Scroll from "../components/Scroll";
import Form from "../components/Form";

const recommender=()=>{
    return(
        <>
        <Scroll/>
        <Head>
        <title>Plant Recommender</title>
        </Head>
        <Navbar/>
        <Form />
        </>
    )
}
export default recommender;