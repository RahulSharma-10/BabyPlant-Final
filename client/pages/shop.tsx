import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Category from "../components/Category";
import Footer from "../components/Footer";
import Head from 'next/head';
import Scroll from "../components/Scroll";

export default function Home() {

  let [products, setProducts] = useState([]);

  return (
    <div>
      <Scroll/>
      <Head>
      <title>BabyPlant - Shop</title>
      </Head>
    <Navbar />
    <Category/>
    <Footer/>
    </div>  
  );
}