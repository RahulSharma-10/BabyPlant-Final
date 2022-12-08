import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Flow from "../components/Flow";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import Head from 'next/head';
import Featured from "../components/Featured/Featured";
import Glimpses2 from "../components/Testimonial2/Testimonial2";
import Banner from "../components/Banner";
import Scroll from "../components/Scroll";

export default function Home() {

  let [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/read")
  //     .then(response => setProducts(response.data));
  // }, []);

  return (
    <>
    <Scroll/>
    <Head>
      <title>BabyPlant</title>
    </Head>
      <Navbar />
      <Banner />
      <Flow />
      <Benefits />
      <Featured/>
      <Glimpses2/>
      <Footer />
    </>
  );
}